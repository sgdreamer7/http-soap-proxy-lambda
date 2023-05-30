import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts } from "./MiscCosts";
import { Attributes } from "./Attributes";
import { Memos } from "./Memos";
import { Erratas } from "./Erratas";
import { ServiceControl } from "./ServiceControl";
import { Links } from "./Links";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes32 } from "./$attributes32";
import { ServiceGroup } from "./ServiceGroup";
import { StarRating } from "./StarRating";
import { Arrangement } from "./Arrangement";
import { Turnover } from "./Turnover";
import { External } from "./External";
import { AdHoc } from "./AdHoc";
import { AnonymousTravel } from "./AnonymousTravel";
import { Rooms } from "./Rooms";
import { Discount } from "./Discount";
import { Yield } from "./Yield";
import { Bedbank } from "./Bedbank";
import { ServiceAccPayments } from "./ServiceAccPayments";

/**
 * AccommodationService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface AccommodationService {
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
    MiscCosts?: MiscCosts;
    /** Attributes */
    Attributes?: Attributes;
    /** Memos */
    Memos?: Memos;
    /** Erratas */
    Erratas?: Erratas;
    /** ServiceControl */
    ServiceControl?: ServiceControl;
    /** Links */
    Links?: Links;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes32;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** Chain */
    Chain?: Reason;
    /** StockClass */
    StockClass?: Reason;
    /** StarRating */
    StarRating?: StarRating;
    /** Arrangement */
    Arrangement?: Arrangement;
    /** Turnover */
    Turnover?: Turnover;
    /** Analysis */
    Analysis?: Reason;
    /** Country */
    Country?: Reason;
    /** Region */
    Region?: Reason;
    /** Resort */
    Resort?: Reason;
    /** CostPromotion */
    CostPromotion?: Reason;
    /** InventoryPromotion */
    InventoryPromotion?: Reason;
    /** xs:boolean */
    ModernMarketIndicator?: string;
    /** External */
    External?: External;
    /** PlatformRatePlan */
    PlatformRatePlan?: Reason;
    /** xs:string */
    PlatformPackageName?: string;
    /** AdHoc */
    AdHoc?: AdHoc;
    /** AnonymousTravel */
    AnonymousTravel?: AnonymousTravel;
    /** Rooms */
    Rooms?: Rooms;
    /** CityPackage */
    CityPackage?: PromotionGroup;
    /** TransferType */
    TransferType?: PromotionGroup;
    /** Reisewelten */
    Reisewelten?: PromotionGroup;
    /** Concept */
    Concept?: PromotionGroup;
    /** NonEmptyString|xs:string|minLength */
    ExclusiveUse?: string;
    /** Discount */
    Discount?: Discount;
    /** Yield */
    Yield?: Yield;
    /** Bedbank */
    Bedbank?: Bedbank;
    /** ServiceAccPayments */
    ServiceAccPayments?: ServiceAccPayments;
}
