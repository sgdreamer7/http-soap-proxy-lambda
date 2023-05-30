import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { ReservationRequest } from "./definitions/ReservationRequest";
import { ReservationResponse } from "./definitions/ReservationResponse";
import { GetReservationSoaphttp } from "./services/GetReservationSoaphttp";

export interface ReservationInfoClient extends SoapClient {
    GetReservationSoaphttp: GetReservationSoaphttp;
    GetReservationAsync(reservationRequest: ReservationRequest): Promise<[result: ReservationResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ReservationInfoClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ReservationInfoClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
