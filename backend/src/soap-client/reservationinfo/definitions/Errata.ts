import { Reason } from "./Reason";
import { ErrataNotes } from "./ErrataNotes";
import { $attributes28 } from "./$attributes28";

/**
 * Errata
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Errata {
    /** ErrataCode */
    ErrataCode?: Reason;
    /** ErrataNotes */
    ErrataNotes?: ErrataNotes;
    /** $attributes */
    $attributes?: $attributes28;
}
