import { Reason } from "./Reason";
import { SeatRequest } from "./SeatRequest";
import { $attributes78 } from "./$attributes78";

/**
 * PaxRef
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface PaxRef2 {
    /** BaggageAllowance */
    BaggageAllowance?: Reason;
    /** SeatRequest */
    SeatRequest?: SeatRequest;
    /** TicketingIndicator */
    TicketingIndicator?: Reason;
    /** $attributes */
    $attributes?: $attributes78;
}
