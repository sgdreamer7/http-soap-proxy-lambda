import { IncompleteIndicator } from "./IncompleteIndicator";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { MiscCosts6 } from "./MiscCosts6";
import { Attributes4 } from "./Attributes4";
import { Memos3 } from "./Memos3";
import { Erratas3 } from "./Erratas3";
import { ServiceControl3 } from "./ServiceControl3";
import { Links3 } from "./Links3";
import { ControllingAttributes } from "./ControllingAttributes";
import { $attributes91 } from "./$attributes91";
import { Item } from "./Item";
import { SubServices1 } from "./SubServices1";
import { ServiceGroup } from "./ServiceGroup";
import { AdditionalInformation } from "./AdditionalInformation";

/**
 * InsuranceService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface InsuranceService {
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
    MiscCosts?: MiscCosts6;
    /** Attributes */
    Attributes?: Attributes4;
    /** Memos */
    Memos?: Memos3;
    /** Erratas */
    Erratas?: Erratas3;
    /** ServiceControl */
    ServiceControl?: ServiceControl3;
    /** Links */
    Links?: Links3;
    /** YieldPromotion */
    YieldPromotion?: Reason;
    /** ControllingAttributes */
    ControllingAttributes?: ControllingAttributes;
    /** $attributes */
    $attributes?: $attributes91;
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
    SubServices?: SubServices1;
    /** ServiceGroup */
    ServiceGroup?: ServiceGroup;
    /** xs:integer */
    ReferencedSeq?: number;
    /** xs:integer */
    SpecialTariffId?: number;
    /** xs:string */
    SpecialTariffName?: string;
    /** xs:string */
    SpecialTariffCode?: string;
    /** Incentive */
    Incentive?: Reason;
    /** AdditionalInformation */
    AdditionalInformation?: AdditionalInformation;
    /** xs:string */
    EmergencyNumber?: string;
    /** xs:string */
    InsuredRiskAmount?: string;
    /** xs:string */
    InsuredRiskGroupFromAmount?: string;
    /** xs:string */
    InsuredRiskGroupToAmount?: string;
    /** xs:string */
    GeographicalLimits?: string;
    /** xs:string */
    DurationFrom?: string;
    /** xs:string */
    DurationTo?: string;
    /** xs:string */
    Excess?: string;
    /** xs:string */
    PermutationalWarranty?: string;
    /** xs:string */
    DateOfValidityTariffStop?: string;
    /** xs:string */
    ValidityTariffStopType?: string;
    /** xs:string */
    ValidityTariffStopDateTo?: string;
}
