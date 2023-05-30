import { APIGatewayProxyResult } from 'aws-lambda';
import { ReservationInfoApiCallArgs } from '../types';
import {
  ReservationRequest,
  ReservationResponse,
  createClientAsync,
} from '../soap-client/reservationinfo';
import {
  RESERVATION_INFO_SOAP_WSDL_URL,
  RESERVATION_INFO_SERVICE_URL,
  RESERVATION_SERVICE_API_KEY,
} from '../constants';

type AttributeNodeType = { $attributes: { Code: string } };
type RootNodeType = { Envelope: { Body: { Fault: { detail: { Fault: { Message: Array<AttributeNodeType> } } } } } };

export async function handler(
  event: ReservationInfoApiCallArgs,
): Promise<APIGatewayProxyResult> {
  try {

    const { systemCode, bookingCode, version } = JSON.parse(event?.body || '{}');

    const wsdlOptions = {
      attributesKey: '$attributes',
      endpoint: RESERVATION_INFO_SERVICE_URL,
    };

    // Create a SOAP client using the WSDL URL
    const client = await createClientAsync(RESERVATION_INFO_SOAP_WSDL_URL, wsdlOptions);

    const query: ReservationRequest = {
      $attributes: {
        ApiKey: RESERVATION_SERVICE_API_KEY,
        ApiRequestedVersion: 18,
      },
      ReservationKeyPattern: {
        $attributes: {
          Id: bookingCode,
          SystemCode: systemCode,
          ...(version && { Version: version } || {}),
        },
      },
    };


    const parameters: ReservationRequest = query;

    // Make the SOAP request with the extracted body
    const soapResponse = await client.GetReservationAsync(parameters);
    const soapResult: ReservationResponse = soapResponse[0];
    const status = soapResult.$attributes?.Status;
    if (status != 'SUCCEEDED') {
      throw new Error('soap call to booking information service failed');
    }
    const jsonResponse = soapResult.Reservation;

    // Return the JSON response
    return {
      statusCode: 200,
      body: JSON.stringify(jsonResponse),
    };
  } catch (error) {
    if ((error as { root: object }).root) {
      const soapErrorResponse: RootNodeType = (error as { root: object }).root as RootNodeType;
      // eslint-disable-next-line max-len
      if (soapErrorResponse.Envelope.Body.Fault.detail.Fault.Message.find((item: AttributeNodeType) => item.$attributes.Code === 'DH.SERVICE.API.RESERVATION.INFO-1000')) {
        return {
          statusCode: 404,
          body: 'Not Found',
        };
      }
    }
  }
  return {
    statusCode: 500,
    body: 'Internal Server Error',
  };
}