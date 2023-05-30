import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts4 } from "./MiscCosts4";
import { Attributes3 } from "./Attributes3";
import { Memos2 } from "./Memos2";
import { Erratas2 } from "./Erratas2";
import { ServiceControl2 } from "./ServiceControl2";
import { Links2 } from "./Links2";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes81 } from "./$attributes81";
import { Item } from "./Item";
import { SubServices } from "./SubServices";
import { ServiceGroup } from "./ServiceGroup";
import { DepartureGeography } from "./DepartureGeography";
import { AdHoc } from "./AdHoc";
import { AdditionalInformation } from "./AdditionalInformation";
import { External3 } from "./External3";

/**
 * TransferService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface TransferService {
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
    MiscCosts?: MiscCosts4;
    /** Attributes */
    Attributes?: Attributes3;
    /** Memos */
    Memos?: Memos2;
    /** Erratas */
    Erratas?: Erratas2;
    /** ServiceControl */
    ServiceControl?: ServiceControl2;
    /** Links */
    Links?: Links2;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes81;
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
    SubServices?: SubServices;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** DepartureGeography */
    DepartureGeography?: DepartureGeography;
    /** ArrivalGeography */
    ArrivalGeography?: DepartureGeography;
    /** DepartureCarrier */
    DepartureCarrier?: Reason;
    /** ArrivalCarrier */
    ArrivalCarrier?: Reason;
    /** AdHoc */
    AdHoc?: AdHoc;
    /** AdditionalInformation */
    AdditionalInformation?: AdditionalInformation;
    /** External */
    External?: External3;
}
