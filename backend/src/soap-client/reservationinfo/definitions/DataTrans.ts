
/**
 * DataTrans
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface DataTrans {
    /** NonEmptyString|xs:string|minLength */
    MerchantId?: string;
    /** NonEmptyString|xs:string|minLength */
    PaymentMethod?: string;
    /** NonEmptyString|xs:string|minLength */
    UppTransactionId?: string;
    /** NonEmptyString|xs:string|minLength */
    AcquirerAuthenticationCode?: string;
}
