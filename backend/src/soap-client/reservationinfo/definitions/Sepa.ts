import { SepaMandate } from "./SepaMandate";

/**
 * SEPA
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Sepa {
    /** SepaMandate */
    SepaMandate?: SepaMandate;
    /** NonEmptyString|xs:string|minLength */
    IBAN?: string;
    /** NonEmptyString|xs:string|minLength */
    BIC?: string;
}
