import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts11 } from "./MiscCosts11";
import { Attributes9 } from "./Attributes9";
import { Memos8 } from "./Memos8";
import { Erratas8 } from "./Erratas8";
import { ServiceControl8 } from "./ServiceControl8";
import { Links8 } from "./Links8";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes108 } from "./$attributes108";
import { Item } from "./Item";
import { SubServices6 } from "./SubServices6";
import { ServiceGroup } from "./ServiceGroup";
import { BundleChildren1 } from "./BundleChildren1";
import { Pickup } from "./Pickup";
import { Vehicle } from "./Vehicle";
import { ContractConditions } from "./ContractConditions";
import { External3 } from "./External3";

/**
 * CamperService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface CamperService {
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
    MiscCosts?: MiscCosts11;
    /** Attributes */
    Attributes?: Attributes9;
    /** Memos */
    Memos?: Memos8;
    /** Erratas */
    Erratas?: Erratas8;
    /** ServiceControl */
    ServiceControl?: ServiceControl8;
    /** Links */
    Links?: Links8;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes108;
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
    SubServices?: SubServices6;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** BundleChildren */
    BundleChildren?: BundleChildren1;
    /** Pickup */
    Pickup?: Pickup;
    /** DropOff */
    DropOff?: Pickup;
    /** Vehicle[] */
    Vehicle?: Array<Vehicle>;
    /** Inclusive[] */
    Inclusive?: Array<Reason>;
    /** ContractConditions */
    ContractConditions?: ContractConditions;
    /** External */
    External?: External3;
}
