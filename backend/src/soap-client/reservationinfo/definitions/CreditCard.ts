import { Reason } from "./Reason";
import { ThreeDSecure } from "./ThreeDSecure";
import { $attributes129 } from "./$attributes129";

/**
 * CreditCard
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface CreditCard {
    /** CardIssuer */
    CardIssuer?: Reason;
    /** CardType */
    CardType?: Reason;
    /** ThreeDSecure */
    ThreeDSecure?: ThreeDSecure;
    /** $attributes */
    $attributes?: $attributes129;
}
