import { Airport } from "./Airport";
import { Location } from "./Location";

/**
 * Transfer
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Transfer {
    /** xs:string */
    Description?: string;
    /** Airport */
    Airport?: Airport;
    /** Location */
    Location?: Location;
}
