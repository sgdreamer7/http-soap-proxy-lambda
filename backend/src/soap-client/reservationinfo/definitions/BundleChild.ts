import { Promotion } from "./Promotion";
import { Reason } from "./Reason";
import { Item } from "./Item";
import { Supplier } from "./Supplier";
import { NotificationSupplier } from "./NotificationSupplier";
import { FinancialSupplier } from "./FinancialSupplier";
import { $attributes95 } from "./$attributes95";

/**
 * BundleChild
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface BundleChild {
    /** Promotion */
    Promotion?: Promotion;
    /** ItemSet */
    ItemSet?: Reason;
    /** Item */
    Item?: Item;
    /** StockType */
    StockType?: Reason;
    /** StockCurrency */
    StockCurrency?: Reason;
    /** Supplier */
    Supplier?: Supplier;
    /** NotificationSupplier */
    NotificationSupplier?: NotificationSupplier;
    /** FinancialSupplier */
    FinancialSupplier?: FinancialSupplier;
    /** $attributes */
    $attributes?: $attributes95;
}
