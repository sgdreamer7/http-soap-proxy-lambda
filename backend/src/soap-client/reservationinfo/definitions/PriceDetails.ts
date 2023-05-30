import { Edition } from "./Edition";
import { $attributes51 } from "./$attributes51";

/** PriceDetails */
export interface PriceDetails {
    /** xs:date */
    StartDate?: string;
    /** xs:date */
    EndDate?: string;
    /** Edition */
    Edition?: Edition;
    /** xs:positiveInteger */
    AccommodationSupplementSequence?: string;
    /** $attributes */
    $attributes?: $attributes51;
}
