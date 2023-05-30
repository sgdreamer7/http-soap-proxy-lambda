import { ProfitCenter } from "./ProfitCenter";
import { Season } from "./Season";
import { CostUnit1 } from "./CostUnit1";
import { TaxRegion1 } from "./TaxRegion1";

/**
 * ControllingReservationAttributes
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface ControllingReservationAttributes {
    /** ProfitCenter */
    ProfitCenter?: ProfitCenter;
    /** Season */
    Season?: Season;
    /** CostUnit */
    CostUnit?: CostUnit1;
    /** TaxRegion */
    TaxRegion?: TaxRegion1;
}
