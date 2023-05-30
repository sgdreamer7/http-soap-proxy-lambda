import { Reason } from "./Reason";
import { $attributes133 } from "./$attributes133";

/**
 * Message
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Message {
    /** Queue */
    Queue?: Reason;
    /** SendUser */
    SendUser?: Reason;
    /** SendOffice */
    SendOffice?: Reason;
    /** $attributes */
    $attributes?: $attributes133;
}
