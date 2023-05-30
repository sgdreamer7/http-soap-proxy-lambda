import { $attributes19 } from "./$attributes19";
import { CustomerNoneSelfBilling } from "./CustomerNoneSelfBilling";
import { OnSideFees } from "./OnSideFees";

/**
 * FinancialSupplier
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface FinancialSupplier {
    /** $attributes */
    $attributes?: $attributes19;
    /** CustomerNoneSelfBilling */
    CustomerNoneSelfBilling?: CustomerNoneSelfBilling;
    /** OnSideFees */
    OnSideFees?: OnSideFees;
}
