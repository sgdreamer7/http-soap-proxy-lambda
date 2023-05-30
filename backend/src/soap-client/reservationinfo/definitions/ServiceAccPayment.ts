import { ServiceAccPaymentVirtualCards } from "./ServiceAccPaymentVirtualCards";
import { $attributes65 } from "./$attributes65";

/**
 * ServiceAccPayment
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface ServiceAccPayment {
    /** ServiceAccPaymentVirtualCards */
    ServiceAccPaymentVirtualCards?: ServiceAccPaymentVirtualCards;
    /** $attributes */
    $attributes?: $attributes65;
}
