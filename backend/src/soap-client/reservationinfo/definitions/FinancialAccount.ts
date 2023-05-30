
/** FinancialAccount */
export interface FinancialAccount {
    /** NonEmptyString|xs:string|minLength */
    Code?: string;
    /** FinancialAccountTypeType|xs:string|LIABILITY,RECEIVABLE,EXPENSE,REVENUE */
    Type?: string;
}
