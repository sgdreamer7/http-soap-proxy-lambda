import { Reason } from "./Reason";
import { AttributeNotes } from "./AttributeNotes";
import { $attributes25 } from "./$attributes25";

/**
 * Attribute
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Attribute {
    /** AttributeCode */
    AttributeCode?: Reason;
    /** AttributeNotes */
    AttributeNotes?: AttributeNotes;
    /** $attributes */
    $attributes?: $attributes25;
}
