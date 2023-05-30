import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts10 } from "./MiscCosts10";
import { Attributes8 } from "./Attributes8";
import { Memos7 } from "./Memos7";
import { Erratas7 } from "./Erratas7";
import { ServiceControl7 } from "./ServiceControl7";
import { Links7 } from "./Links7";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes105 } from "./$attributes105";
import { ServiceGroup } from "./ServiceGroup";
import { SubServices5 } from "./SubServices5";

/**
 * TrainService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface TrainService {
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
    MiscCosts?: MiscCosts10;
    /** Attributes */
    Attributes?: Attributes8;
    /** Memos */
    Memos?: Memos7;
    /** Erratas */
    Erratas?: Erratas7;
    /** ServiceControl */
    ServiceControl?: ServiceControl7;
    /** Links */
    Links?: Links7;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes105;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** xs:integer */
    Distance?: number;
    /** xs:string */
    LinkedReservationReference?: string;
    /** xs:boolean */
    ReturnIndicator?: string;
    /** ServiceClass */
    ServiceClass?: Reason;
    /** TrainCard */
    TrainCard?: Reason;
    /** ServiceType */
    ServiceType?: Reason;
    /** Tariff */
    Tariff?: Reason;
    /** DepartureStation */
    DepartureStation?: Reason;
    /** ArrivalStation */
    ArrivalStation?: Reason;
    /** Country */
    Country?: Reason;
    /** Region */
    Region?: Reason;
    /** SubServices */
    SubServices?: SubServices5;
}
