import { Supplier1 } from "./Supplier1";
import { $attributes38 } from "./$attributes38";

/**
 * External
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface External {
    /** Supplier */
    Supplier?: Supplier1;
    /** ParentExternal */
    ParentExternal?: External;
    /** $attributes */
    $attributes?: $attributes38;
}
