import { Transfer } from "./Transfer";
import { TransferType } from "./TransferType";
import { $attributes111 } from "./$attributes111";

/**
 * Pickup
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Pickup {
    /** Transfer */
    Transfer?: Transfer;
    /** TransferType */
    TransferType?: TransferType;
    /** $attributes */
    $attributes?: $attributes111;
}
