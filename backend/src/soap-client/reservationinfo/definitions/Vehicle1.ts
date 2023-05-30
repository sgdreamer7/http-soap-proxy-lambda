import { CarDesc } from "./CarDesc";
import { Reason } from "./Reason";
import { $attributes119 } from "./$attributes119";

/**
 * Vehicle
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Vehicle1 {
    /** CarDesc */
    CarDesc?: CarDesc;
    /** Catalog */
    Catalog?: Reason;
    /** $attributes */
    $attributes?: $attributes119;
}
