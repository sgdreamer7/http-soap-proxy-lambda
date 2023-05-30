import { CustomerDoxRecipient } from "./CustomerDoxRecipient";
import { ReservationStatus } from "./ReservationStatus";

/** $attributes */
export interface $attributes137 {
    /** xs:decimal */
    AmountPaid?: number;
    /** xs:decimal */
    Balance?: number;
    /** xs:decimal */
    BalanceAdditionalCurrency?: number;
    /** xs:decimal */
    BalanceDebit?: number;
    /** xs:date */
    BalanceDueDate?: string;
    /** xs:date */
    BalanceDueDateDebit?: string;
    /** xs:string */
    BaseLanguageCode?: string;
    /** BookingStatusType|xs:string|QTE,OPT,BKG,CNX */
    BookingStatus?: string;
    /** xs:dateTime */
    CancelDateTime?: string;
    /** NonEmptyString|xs:string|minLength */
    CetsCatalogCode?: string;
    /** NonEmptyString|xs:string|minLength */
    CetsReference?: string;
    /** xs:string */
    CetsTourOperatorCode?: string;
    /** xs:dateTime */
    ConfirmedDateTime?: string;
    /** xs:string */
    CustomerDoxLanguageCode?: string;
    /** xs:string */
    CustomerDoxPerPassenger?: string;
    /** CustomerDoxRecipient */
    CustomerDoxRecipient?: CustomerDoxRecipient;
    /** xs:string */
    CustomerDoxSuppressPrices?: string;
    /** xs:decimal */
    Deposit?: number;
    /** xs:decimal */
    DepositAdditionalCurrency?: number;
    /** xs:decimal */
    DepositDebit?: number;
    /** xs:date */
    DepositDueDate?: string;
    /** xs:date */
    DepositDueDateDebit?: string;
    /** xs:string */
    ExternalSystemReferenceId?: string;
    /** xs:string */
    ExternalVersion?: string;
    /** xs:date */
    FirstStartDate?: string;
    /** xs:boolean */
    FlightTimeRestrictionIndicator?: string;
    /** xs:string */
    GroupReservationConfirmedDateTime?: string;
    /** GroupReservationIndicatorType|ns6:NonEmptyString */
    GroupReservationIndicator?: string;
    /** xs:string */
    GroupReservationNumber?: string;
    /** xs:string */
    InitialSalesChannel?: string;
    /** xs:string */
    InitialSourceSystem?: string;
    /** xs:string */
    InvoiceNumber?: string;
    /** xs:boolean */
    IsTest?: string;
    /** xs:date */
    LastEndDate?: string;
    /** xs:boolean */
    LateBookingIndicator?: string;
    /** NonEmptyString|xs:string|minLength */
    MainYieldCategory?: string;
    /** xs:boolean */
    ModernMarketIndicator?: string;
    /** xs:dateTime */
    ModificationDateTime?: string;
    /** xs:boolean */
    NewClosedMessagesIndicator?: string;
    /** xs:integer */
    NumAdults?: number;
    /** xs:integer */
    NumChildren?: number;
    /** xs:integer */
    NumInfants?: number;
    /** xs:integer */
    NumPax?: number;
    /** xs:date */
    OptionExpiryDate?: string;
    /** xs:integer */
    OptionToBooking?: number;
    /** BookingStatusType|xs:string|QTE,OPT,BKG,CNX */
    OptionTransitionStatus?: string;
    /** xs:dateTime */
    OriginDateTime?: string;
    /** xs:string */
    PackageIndicator?: string;
    /** xs:boolean */
    PreBookingIndicator?: string;
    /** BookingStatusType|xs:string|QTE,OPT,BKG,CNX */
    PreviousBookingStatus?: string;
    /** xs:decimal */
    ReservationFeesExcluding?: number;
    /** xs:decimal */
    ReservationPriceExcluding?: number;
    /** ReservationStatus */
    ReservationStatus?: ReservationStatus;
    /** xs:dateTime */
    ReservationStatusDateTime?: string;
    /** xs:string */
    SalesChannel?: string;
    /** xs:string */
    SalesNetwork?: string;
    /** xs:string */
    ScreenLanguageCode?: string;
    /** xs:decimal */
    SellingPrice?: number;
    /** xs:decimal */
    SellingPriceAdditionalCurrency?: number;
    /** xs:string */
    SourceSystem?: string;
    /** xs:string */
    SuperPNR?: string;
    /** xs:boolean */
    TUICardRulesIndicator?: string;
    /** xs:boolean */
    Tourguide?: string;
    /** xs:date */
    VirtualStartDate?: string;
}
