import { ReservationKeyPattern } from "./ReservationKeyPattern";
import { Query } from "./Query";
import { $attributes1 } from "./$attributes1";

/**
 * ReservationRequest
 * @targetNSAlias `reskey`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservationkey-types.xsd`
 */
export interface ReservationRequest {
    /** ReservationKeyPattern */
    ReservationKeyPattern?: ReservationKeyPattern;
    /** Query */
    Query?: Query;
    /** $attributes */
    $attributes?: $attributes1;
}
