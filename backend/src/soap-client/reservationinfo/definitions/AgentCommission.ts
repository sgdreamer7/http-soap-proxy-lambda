import { Accounting } from "./Accounting";
import { Tax1 } from "./Tax1";
import { Reason } from "./Reason";
import { $attributes46 } from "./$attributes46";

/**
 * AgentCommission
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface AgentCommission {
    /** Accounting */
    Accounting?: Accounting;
    /** Tax[] */
    Tax?: Array<Tax1>;
    /** AdditionalCommission */
    AdditionalCommission?: Reason;
    /** $attributes */
    $attributes?: $attributes46;
}
