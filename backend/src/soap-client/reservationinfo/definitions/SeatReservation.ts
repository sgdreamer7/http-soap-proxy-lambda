import { SeatClassifications } from "./SeatClassifications";
import { $attributes76 } from "./$attributes76";

/**
 * SeatReservation
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface SeatReservation {
    /** SeatClassifications */
    SeatClassifications?: SeatClassifications;
    /** $attributes */
    $attributes?: $attributes76;
}
