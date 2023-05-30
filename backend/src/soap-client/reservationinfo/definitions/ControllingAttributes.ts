import { TaxRegion } from "./TaxRegion";

/**
 * ControllingAttributes
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface ControllingAttributes {
    /** xs:string */
    Season?: string;
    /** xs:string */
    CostCentre?: string;
    /** xs:string */
    CostUnit?: string;
    /** TaxRegion */
    TaxRegion?: TaxRegion;
}
