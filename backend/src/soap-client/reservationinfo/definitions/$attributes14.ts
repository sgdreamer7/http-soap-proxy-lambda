import { LocalAgent } from "./LocalAgent";

/** $attributes */
export interface $attributes14 {
    /** xs:decimal */
    AgentCommissionPercentage?: number;
    /** NonEmptyString|xs:string|minLength */
    BusinessUnitNumber?: string;
    /** xs:decimal */
    CommissionAmount?: number;
    /** xs:date */
    CommissionDueDate?: string;
    /** NonEmptyString|xs:string|minLength */
    InitialBusinessUnitNumber?: string;
    /** xs:string */
    InitialPersonInAgency?: string;
    /** LocalAgent */
    LocalAgent?: LocalAgent;
    /** xs:string */
    PersonInAgency?: string;
    /** xs:string */
    PersonInAgencyName?: string;
    /** xs:decimal */
    TotalAmount?: number;
    /** xs:decimal */
    VatOnCommission?: number;
}
