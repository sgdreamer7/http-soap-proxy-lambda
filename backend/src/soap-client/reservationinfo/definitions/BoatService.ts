import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts9 } from "./MiscCosts9";
import { Attributes7 } from "./Attributes7";
import { Memos6 } from "./Memos6";
import { Erratas6 } from "./Erratas6";
import { ServiceControl6 } from "./ServiceControl6";
import { Links6 } from "./Links6";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes102 } from "./$attributes102";
import { ServiceGroup } from "./ServiceGroup";
import { SubServices4 } from "./SubServices4";

/**
 * BoatService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface BoatService {
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
    MiscCosts?: MiscCosts9;
    /** Attributes */
    Attributes?: Attributes7;
    /** Memos */
    Memos?: Memos6;
    /** Erratas */
    Erratas?: Erratas6;
    /** ServiceControl */
    ServiceControl?: ServiceControl6;
    /** Links */
    Links?: Links6;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes102;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** DepartureBase */
    DepartureBase?: Reason;
    /** ArrivalBase */
    ArrivalBase?: Reason;
    /** Country */
    Country?: Reason;
    /** Region */
    Region?: Reason;
    /** SubServices */
    SubServices?: SubServices4;
}
