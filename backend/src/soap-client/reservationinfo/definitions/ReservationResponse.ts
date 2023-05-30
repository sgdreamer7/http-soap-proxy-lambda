import { Reservation } from "./Reservation";
import { Message } from "./Message";
import { $attributes138 } from "./$attributes138";

/**
 * ReservationResponse
 * @targetNSAlias `res`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface ReservationResponse {
    /** Reservation */
    Reservation?: Reservation;
    /** Message[] */
    Message?: Array<Message>;
    /** $attributes */
    $attributes?: $attributes138;
}
