import fetch from 'node-fetch';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import * as fs from 'fs';
import * as path from 'path';
import { parseAndGenerate } from '../wsdl-tsclient';
import { RESERVATION_INFO_SOAP_WSDL_URL } from '../constants';

const fetchWsdlFile = async (wsdlUrl: URL) => {
  const response = await fetch(wsdlUrl);
  const data = await response.text();
  return data;
};

type WsdlTransformerFunction = (sourceXml: string) => string;
type XmlNodeType = { [s: string]: unknown; };
type XmlNodeListType = Array<XmlNodeType>;

const convertAttributeToElement = (xmlNode: XmlNodeType): XmlNodeType => {
  const attributesNodeName = Object.keys(xmlNode).find((key) => key === ':@');
  if (attributesNodeName) {
    const attributesNode = xmlNode[attributesNodeName] as XmlNodeType;
    const attributeName = attributesNode['@_name'] || '';
    const attributeType = attributesNode['@_type'] || '';
    const attributeRequired = attributesNode['@_use'] || undefined;
    const elementXmlNode = {
      'xs:element': [],
      ':@': {
        '@_name': attributeName,
        '@_type': attributeType,
        '@_minOccurs': attributeRequired ? 1 : 0,
        '@_maxOccurs': attributeRequired ? 1 : 0,
      },
    };
    return elementXmlNode;
  }
  return xmlNode;
};

const processXmlNode = (xmlNode: XmlNodeType): XmlNodeType => {
  const nodeName = Object.keys(xmlNode).find((key) => key !== ':@');
  if (nodeName && nodeName !== '#text') {
    const children = xmlNode[nodeName] as XmlNodeListType;
    if (nodeName === 'xs:complexType') {
      const attributes = children.filter((item) => Object.keys(item).find(key => key === 'xs:attribute'));
      if (attributes.length > 0) {
        const convertedAttributes = attributes.map(convertAttributeToElement);
        let sequence = children.find((item) => Object.keys(item).find(key => key === 'xs:sequence'));
        if (!sequence) {
          children.unshift({ 'xs:sequence': [] });
          sequence = children.find((item) => Object.keys(item).find(key => key === 'xs:sequence'));
        }
        const sequenceChildren = sequence && sequence['xs:sequence'] as XmlNodeListType || [];
        const attributesElement = {
          'xs:element': [
            {
              'xs:complexType': [
                {
                  'xs:sequence': convertedAttributes,
                },
              ],
            },
          ],
          ':@': {
            '@_name': '$attributes',
            '@_minOccurs': 1,
            '@_maxOccurs': 1,
          },
        };
        sequenceChildren.push(attributesElement);
      }
    }
    const processedChildren = children.map((child: XmlNodeType) => processXmlNode(child));
    const processedXmlNode = { ...xmlNode, [nodeName]: processedChildren };
    return processedXmlNode;
  }
  return xmlNode;
};

const ReservationInfoTransformerFunc: WsdlTransformerFunction = (sourceXml: string): string => {
  const parserOptions = {
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    allowBooleanAttributes: true,
    commentPropName: '#comment',
    preserveOrder: true,
  };
  const parser = new XMLParser(parserOptions);

  const jsonObjects = parser.parse(sourceXml);
  const processedJsonObjects = jsonObjects.map(processXmlNode);

  const builderOptions = {
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    commentPropName: '#comment',
    preserveOrder: true,
  };
  const builder = new XMLBuilder(builderOptions);
  const xmlContent = builder.build(processedJsonObjects);
  return xmlContent;
};

const generateClient = async (
  soapWsdlUrl: string,
  filenamePrefix: string,
  transformerFunction?: WsdlTransformerFunction,
) => {
  const filename = path.join(__dirname, `${filenamePrefix}.xml`);
  const data = await fetchWsdlFile(new URL(soapWsdlUrl));
  const transformedData = transformerFunction ? transformerFunction(data) : data;
  fs.writeFileSync(filename, transformedData);
  const outDir = path.join(__dirname, '../soap-client/');
  await parseAndGenerate(filename, outDir, { quiet: true, maxRecursiveDefinitionName: Number.MAX_SAFE_INTEGER });
};

(async () => {
  await generateClient(RESERVATION_INFO_SOAP_WSDL_URL, 'ReservationInfo', ReservationInfoTransformerFunc);
})();