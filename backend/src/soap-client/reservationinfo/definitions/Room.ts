import { Prices } from "./Prices";
import { MiscCosts1 } from "./MiscCosts1";
import { $attributes54 } from "./$attributes54";
import { Reason } from "./Reason";
import { External1 } from "./External1";
import { OverwriteRoom } from "./OverwriteRoom";
import { ValueOffer } from "./ValueOffer";
import { CostAdjustments } from "./CostAdjustments";
import { Facilities } from "./Facilities";
import { PaxRefs1 } from "./PaxRefs1";

/**
 * Room
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Room {
    /** Prices */
    Prices?: Prices;
    /** MiscCosts */
    MiscCosts?: MiscCosts1;
    /** $attributes */
    $attributes?: $attributes54;
    /** BoardBasis */
    BoardBasis?: Reason;
    /** Category */
    Category?: Reason;
    /** External */
    External?: External1;
    /** OverwriteRoom */
    OverwriteRoom?: OverwriteRoom;
    /** ValueOffer[] */
    ValueOffer?: Array<ValueOffer>;
    /** CostAdjustments */
    CostAdjustments?: CostAdjustments;
    /** Facilities */
    Facilities?: Facilities;
    /** PaxRefs */
    PaxRefs?: PaxRefs1;
    /** BaseRoom */
    BaseRoom?: Reason;
}
