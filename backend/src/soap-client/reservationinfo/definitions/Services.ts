import { AccommodationService } from "./AccommodationService";
import { FlightService } from "./FlightService";
import { TransferService } from "./TransferService";
import { InsuranceService } from "./InsuranceService";
import { ExtraService } from "./ExtraService";
import { AdminService } from "./AdminService";
import { BoatService } from "./BoatService";
import { TrainService } from "./TrainService";
import { CamperService } from "./CamperService";
import { CarService } from "./CarService";
import { ComplexService } from "./ComplexService";
import { CouponService } from "./CouponService";

/**
 * Services
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Services {
    /** AccommodationService */
    AccommodationService?: AccommodationService;
    /** FlightService */
    FlightService?: FlightService;
    /** TransferService */
    TransferService?: TransferService;
    /** InsuranceService */
    InsuranceService?: InsuranceService;
    /** ExtraService */
    ExtraService?: ExtraService;
    /** AdminService */
    AdminService?: AdminService;
    /** BoatService */
    BoatService?: BoatService;
    /** TrainService */
    TrainService?: TrainService;
    /** CamperService */
    CamperService?: CamperService;
    /** CarService */
    CarService?: CarService;
    /** ComplexService */
    ComplexService?: ComplexService;
    /** CouponService */
    CouponService?: CouponService;
}
