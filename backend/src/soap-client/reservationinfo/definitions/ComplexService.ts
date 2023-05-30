import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts13 } from "./MiscCosts13";
import { Attributes11 } from "./Attributes11";
import { Memos10 } from "./Memos10";
import { Erratas10 } from "./Erratas10";
import { ServiceControl10 } from "./ServiceControl10";
import { Links10 } from "./Links10";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes122 } from "./$attributes122";
import { SubServices8 } from "./SubServices8";
import { ServiceGroup } from "./ServiceGroup";

/**
 * ComplexService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface ComplexService {
    /** g */
    0?: string;
    /** r */
    1?: string;
    /** o */
    2?: string;
    /** u */
    3?: string;
    /** p */
    4?: string;
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
    MiscCosts?: MiscCosts13;
    /** Attributes */
    Attributes?: Attributes11;
    /** Memos */
    Memos?: Memos10;
    /** Erratas */
    Erratas?: Erratas10;
    /** ServiceControl */
    ServiceControl?: ServiceControl10;
    /** Links */
    Links?: Links10;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes122;
    /** SubServices */
    SubServices?: SubServices8;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** Package */
    Package?: PromotionGroup;
    /** xs:nonNegativeInteger */
    MinimumPassengers?: string;
}
