import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts8 } from "./MiscCosts8";
import { Attributes6 } from "./Attributes6";
import { Memos5 } from "./Memos5";
import { Erratas5 } from "./Erratas5";
import { ServiceControl5 } from "./ServiceControl5";
import { Links5 } from "./Links5";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes99 } from "./$attributes99";
import { Item } from "./Item";
import { SubServices3 } from "./SubServices3";

/**
 * AdminService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface AdminService {
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
    MiscCosts?: MiscCosts8;
    /** Attributes */
    Attributes?: Attributes6;
    /** Memos */
    Memos?: Memos5;
    /** Erratas */
    Erratas?: Erratas5;
    /** ServiceControl */
    ServiceControl?: ServiceControl5;
    /** Links */
    Links?: Links5;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes99;
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
    SubServices?: SubServices3;
    /** PlatformRatePlan */
    PlatformRatePlan?: Reason;
}
