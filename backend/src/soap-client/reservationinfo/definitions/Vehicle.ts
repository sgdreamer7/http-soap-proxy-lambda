import { CamperDesc } from "./CamperDesc";
import { Reason } from "./Reason";
import { $attributes113 } from "./$attributes113";

/**
 * Vehicle
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Vehicle {
    /** CamperDesc */
    CamperDesc?: CamperDesc;
    /** Catalog */
    Catalog?: Reason;
    /** $attributes */
    $attributes?: $attributes113;
}
