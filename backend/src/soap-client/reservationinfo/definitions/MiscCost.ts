import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { $attributes23 } from "./$attributes23";

/**
 * MiscCost
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface MiscCost {
    /** PriceCode */
    PriceCode?: Reason;
    /** Currency */
    Currency?: PromotionGroup;
    /** $attributes */
    $attributes?: $attributes23;
}
