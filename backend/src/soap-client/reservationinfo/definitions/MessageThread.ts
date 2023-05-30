import { Code } from "./Code";
import { Category1 } from "./Category1";
import { Messages } from "./Messages";
import { $attributes134 } from "./$attributes134";

/**
 * MessageThread
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface MessageThread {
    /** Code */
    Code?: Code;
    /** Category */
    Category?: Category1;
    /** Messages */
    Messages?: Messages;
    /** $attributes */
    $attributes?: $attributes134;
}
