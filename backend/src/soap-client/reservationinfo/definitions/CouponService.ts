import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts14 } from "./MiscCosts14";
import { Attributes12 } from "./Attributes12";
import { Memos11 } from "./Memos11";
import { Erratas11 } from "./Erratas11";
import { ServiceControl11 } from "./ServiceControl11";
import { Links11 } from "./Links11";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes125 } from "./$attributes125";
import { Item } from "./Item";
import { SubServices9 } from "./SubServices9";
import { ServiceGroup } from "./ServiceGroup";

/**
 * CouponService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface CouponService {
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
    MiscCosts?: MiscCosts14;
    /** Attributes */
    Attributes?: Attributes12;
    /** Memos */
    Memos?: Memos11;
    /** Erratas */
    Erratas?: Erratas11;
    /** ServiceControl */
    ServiceControl?: ServiceControl11;
    /** Links */
    Links?: Links11;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes125;
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
    SubServices?: SubServices9;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
}
