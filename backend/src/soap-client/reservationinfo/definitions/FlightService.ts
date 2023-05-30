import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts2 } from "./MiscCosts2";
import { Attributes1 } from "./Attributes1";
import { Memos1 } from "./Memos1";
import { Erratas1 } from "./Erratas1";
import { ServiceControl1 } from "./ServiceControl1";
import { Links1 } from "./Links1";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes69 } from "./$attributes69";
import { ServiceGroup } from "./ServiceGroup";
import { DepartureAirport } from "./DepartureAirport";
import { FlightPromotion } from "./FlightPromotion";
import { ScheduledFlight } from "./ScheduledFlight";
import { External2 } from "./External2";
import { ThirdParty } from "./ThirdParty";
import { AdHoc } from "./AdHoc";
import { Discount1 } from "./Discount1";
import { Sectors } from "./Sectors";

/**
 * FlightService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface FlightService {
    /** IncompleteIndicator */
    IncompleteIndicator?: IncompleteIndicator;
    /** StockType */
    StockType?: Reason;
    /** PromotionGroup */
    PromotionGroup?: PromotionGroup;
    /** SearchPromotionGroup */
    SearchPromotionGroup?: PromotionGroup;
    /** Promotion */
    Promotion?: Promotion;
    /** Terms */
    Terms?: Reason;
    /** Supplier */
    Supplier?: Supplier;
    /** NotificationSupplier */
    NotificationSupplier?: NotificationSupplier;
    /** FinancialSupplier */
    FinancialSupplier?: FinancialSupplier;
    /** ServiceVoucherMethodType|xs:string|PROD,MUL,SUPP */
    ServiceVoucherMethod?: string;
    /** MiscCosts */
    MiscCosts?: MiscCosts2;
    /** Attributes */
    Attributes?: Attributes1;
    /** Memos */
    Memos?: Memos1;
    /** Erratas */
    Erratas?: Erratas1;
    /** ServiceControl */
    ServiceControl?: ServiceControl1;
    /** Links */
    Links?: Links1;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes69;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** DepartureAirport */
    DepartureAirport?: DepartureAirport;
    /** NonEmptyString|xs:string|minLength */
    DepartureCountryHaulType?: string;
    /** ArrivalAirport */
    ArrivalAirport?: DepartureAirport;
    /** NonEmptyString|xs:string|minLength */
    ArrivalCountryHaulType?: string;
    /** ServiceClass */
    ServiceClass?: Reason;
    /** BookingClass */
    BookingClass?: PromotionGroup;
    /** CompartmentClass */
    CompartmentClass?: PromotionGroup;
    /** MarketingCarrier */
    MarketingCarrier?: Reason;
    /** OperatingCarrier */
    OperatingCarrier?: Reason;
    /** FlightProviderProduct */
    FlightProviderProduct?: Reason;
    /** FlightPromotion */
    FlightPromotion?: FlightPromotion;
    /** xs:boolean */
    ScheduledFlightIndicator?: string;
    /** xs:string */
    AccountInfo?: string;
    /** ScheduledFlight */
    ScheduledFlight?: ScheduledFlight;
    /** External */
    External?: External2;
    /** ThirdParty */
    ThirdParty?: ThirdParty;
    /** AdHoc */
    AdHoc?: AdHoc;
    /** Discount */
    Discount?: Discount1;
    /** Sectors */
    Sectors?: Sectors;
}
