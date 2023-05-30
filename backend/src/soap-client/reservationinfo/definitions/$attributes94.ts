
/** $attributes */
export interface $attributes94 {
    /** xs:string */
    AdditionalStatus?: string;
    /** xs:dateTime */
    ConfirmedDateTime?: string;
    /** xs:dateTime */
    CreationDateTime?: string;
    /** xs:date */
    EndDate?: string;
    /** xs:integer */
    Id?: number;
    /** NonEmptyString|xs:string|minLength */
    MainYieldType?: string;
    /** xs:string */
    ManualVoucherMethod?: string;
    /** xs:integer */
    NumAdults?: number;
    /** xs:integer */
    NumChildren?: number;
    /** xs:integer */
    NumInfants?: number;
    /** xs:integer */
    NumPax?: number;
    /** NonEmptyString|xs:string|minLength */
    OriginServiceType?: string;
    /** xs:string */
    PackageIndicator?: string;
    /** xs:dateTime */
    PriceBaseCalculationDate?: string;
    /** xs:integer */
    Quantity?: number;
    /** xs:string */
    SellType?: string;
    /** xs:integer */
    Seq?: number;
    /** ServiceTypeType|xs:string|ACC,ADM,AHOC,BKG,CPX,EXT,INS,TRF,TRS,BOT,TRN,CMP,CAR,VOU,CPN */
    ServiceType?: string;
    /** xs:date */
    StartDate?: string;
    /** ServiceStatusType|xs:string|CON,REQ,CNX */
    Status?: string;
}
