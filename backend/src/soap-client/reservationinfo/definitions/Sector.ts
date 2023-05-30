import { Prices1 } from "./Prices1";
import { MiscCosts3 } from "./MiscCosts3";
import { $attributes75 } from "./$attributes75";
import { DepartureAirport } from "./DepartureAirport";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { SeatReservations } from "./SeatReservations";
import { PaxRefs2 } from "./PaxRefs2";

/**
 * Sector
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Sector {
    /** Prices */
    Prices?: Prices1;
    /** MiscCosts */
    MiscCosts?: MiscCosts3;
    /** $attributes */
    $attributes?: $attributes75;
    /** DepartureAirport */
    DepartureAirport?: DepartureAirport;
    /** ArrivalAirport */
    ArrivalAirport?: DepartureAirport;
    /** IncludedMeal */
    IncludedMeal?: Reason;
    /** ServiceClass */
    ServiceClass?: Reason;
    /** BookingClass */
    BookingClass?: PromotionGroup;
    /** MarketingCarrier */
    MarketingCarrier?: Reason;
    /** OperatingCarrier */
    OperatingCarrier?: Reason;
    /** AircraftType */
    AircraftType?: Reason;
    /** SeatReservations */
    SeatReservations?: SeatReservations;
    /** PaxRefs */
    PaxRefs?: PaxRefs2;
    /** xs:boolean */
    ScheduledFlightIndicator?: string;
}
