import { PriceCode } from "./PriceCode";
import { CostCenter } from "./CostCenter";
import { CostUnit } from "./CostUnit";
import { CostCompensationType } from "./CostCompensationType";
import { FinancialAccount } from "./FinancialAccount";
import { FinancialSeason } from "./FinancialSeason";
import { FinancialBrand } from "./FinancialBrand";
import { Promotions } from "./Promotions";
import { Reason } from "./Reason";
import { FinancialSupplier } from "./FinancialSupplier";
import { Tax } from "./Tax";
import { AgentCommission } from "./AgentCommission";
import { PaxRefs } from "./PaxRefs";
import { Insurance } from "./Insurance";
import { ReferencedStockService } from "./ReferencedStockService";
import { PriceDetails } from "./PriceDetails";
import { GrossPriceDetails } from "./GrossPriceDetails";
import { YieldSupplement } from "./YieldSupplement";
import { SuppressedFee } from "./SuppressedFee";
import { $attributes53 } from "./$attributes53";

/**
 * Price
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Price {
    /** PriceCode */
    PriceCode?: PriceCode;
    /** CostCenter */
    CostCenter?: CostCenter;
    /** CostUnit */
    CostUnit?: CostUnit;
    /** CostCompensationType */
    CostCompensationType?: CostCompensationType;
    /** FinancialAccount[] */
    FinancialAccount?: Array<FinancialAccount>;
    /** FinancialSeason */
    FinancialSeason?: FinancialSeason;
    /** FinancialBrand */
    FinancialBrand?: FinancialBrand;
    /** Promotions */
    Promotions?: Promotions;
    /** FlightPriceMarker */
    FlightPriceMarker?: Reason;
    /** StockCurrency */
    StockCurrency?: Reason;
    /** FinancialSupplier */
    FinancialSupplier?: FinancialSupplier;
    /** Tax[] */
    Tax?: Array<Tax>;
    /** AgentCommission */
    AgentCommission?: AgentCommission;
    /** PaxRefs */
    PaxRefs?: PaxRefs;
    /** Insurance */
    Insurance?: Insurance;
    /** ReferencedStockService */
    ReferencedStockService?: ReferencedStockService;
    /** PriceDetails[] */
    PriceDetails?: Array<PriceDetails>;
    /** GrossPriceDetails */
    GrossPriceDetails?: GrossPriceDetails;
    /** xs:string */
    RateMarginBasis?: string;
    /** YieldSupplement[] */
    YieldSupplement?: Array<YieldSupplement>;
    /** SuppressedFee */
    SuppressedFee?: SuppressedFee;
    /** $attributes */
    $attributes?: $attributes53;
}
