import { ReservationRequest } from "../definitions/ReservationRequest";
import { ReservationResponse } from "../definitions/ReservationResponse";

export interface SoapSpGetSpReservation {
    GetReservation(reservationRequest: ReservationRequest, callback: (err: any, result: ReservationResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
