import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts7 } from "./MiscCosts7";
import { Attributes5 } from "./Attributes5";
import { Memos4 } from "./Memos4";
import { Erratas4 } from "./Erratas4";
import { ServiceControl4 } from "./ServiceControl4";
import { Links4 } from "./Links4";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes94 } from "./$attributes94";
import { Item } from "./Item";
import { SubServices2 } from "./SubServices2";
import { ServiceGroup } from "./ServiceGroup";
import { BundleChildren } from "./BundleChildren";
import { External3 } from "./External3";
import { Location } from "./Location";
import { AdHoc } from "./AdHoc";
import { AdditionalInformation } from "./AdditionalInformation";

/**
 * ExtraService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface ExtraService {
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
    MiscCosts?: MiscCosts7;
    /** Attributes */
    Attributes?: Attributes5;
    /** Memos */
    Memos?: Memos4;
    /** Erratas */
    Erratas?: Erratas4;
    /** ServiceControl */
    ServiceControl?: ServiceControl4;
    /** Links */
    Links?: Links4;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes94;
    /** ItemSet */
    ItemSet?: Reason;
    /** Item */
    Item?: Item;
    /** Country */
    Country?: Reason;
    /** Region */
    Region?: Reason;
    /** Resort */
    Resort?: Reason;
    /** SubServices */
    SubServices?: SubServices2;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** PlatformRatePlan */
    PlatformRatePlan?: Reason;
    /** BundleChildren */
    BundleChildren?: BundleChildren;
    /** External */
    External?: External3;
    /** Location */
    Location?: Location;
    /** AdHoc */
    AdHoc?: AdHoc;
    /** AdditionalInformation */
    AdditionalInformation?: AdditionalInformation;
}
