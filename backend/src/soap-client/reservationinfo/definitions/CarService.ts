import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts12 } from "./MiscCosts12";
import { Attributes10 } from "./Attributes10";
import { Memos9 } from "./Memos9";
import { Erratas9 } from "./Erratas9";
import { ServiceControl9 } from "./ServiceControl9";
import { Links9 } from "./Links9";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes117 } from "./$attributes117";
import { Item } from "./Item";
import { SubServices7 } from "./SubServices7";
import { ServiceGroup } from "./ServiceGroup";
import { BundleChildren2 } from "./BundleChildren2";
import { Pickup } from "./Pickup";
import { Vehicle1 } from "./Vehicle1";
import { ContractConditions } from "./ContractConditions";
import { External3 } from "./External3";

/**
 * CarService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface CarService {
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
    MiscCosts?: MiscCosts12;
    /** Attributes */
    Attributes?: Attributes10;
    /** Memos */
    Memos?: Memos9;
    /** Erratas */
    Erratas?: Erratas9;
    /** ServiceControl */
    ServiceControl?: ServiceControl9;
    /** Links */
    Links?: Links9;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes117;
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
    SubServices?: SubServices7;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** BundleChildren */
    BundleChildren?: BundleChildren2;
    /** Pickup */
    Pickup?: Pickup;
    /** DropOff */
    DropOff?: Pickup;
    /** Vehicle[] */
    Vehicle?: Array<Vehicle1>;
    /** Inclusive[] */
    Inclusive?: Array<Reason>;
    /** ContractConditions */
    ContractConditions?: ContractConditions;
    /** External */
    External?: External3;
}
