import { Reason } from "./Reason";
import { $attributes26 } from "./$attributes26";

/**
 * Memo
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Memo {
    /** MemoCode */
    MemoCode?: Reason;
    /** xs:string */
    Description?: string;
    /** $attributes */
    $attributes?: $attributes26;
}
