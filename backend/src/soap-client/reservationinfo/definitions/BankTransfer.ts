
/** BankTransfer */
export interface BankTransfer {
    /** NonEmptyString|xs:string|minLength */
    IBAN?: string;
    /** NonEmptyString|xs:string|minLength */
    BIC?: string;
    /** xs:string */
    Country?: string;
    /** xs:string */
    BankCity?: string;
    /** xs:string */
    BankName?: string;
}
