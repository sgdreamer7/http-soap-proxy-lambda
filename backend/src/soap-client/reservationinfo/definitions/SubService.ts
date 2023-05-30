import { Prices2 } from "./Prices2";
import { MiscCosts5 } from "./MiscCosts5";
import { $attributes83 } from "./$attributes83";
import { PaxRefs3 } from "./PaxRefs3";

/**
 * SubService
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface SubService {
    /** Prices */
    Prices?: Prices2;
    /** MiscCosts */
    MiscCosts?: MiscCosts5;
    /** $attributes */
    $attributes?: $attributes83;
    /** PaxRefs */
    PaxRefs?: PaxRefs3;
}
