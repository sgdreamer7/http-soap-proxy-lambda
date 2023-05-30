import { APIGatewayProxyEvent } from 'aws-lambda';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_PORT: string;
      BACKEND_WS_PORT: string;
      RESERVATION_INFO_SOAP_WSDL_URL: string;
      RESERVATION_INFO_SERVICE_URL: string;
      RESERVATION_SERVICE_API_KEY: string;
    }
  }
}

export interface NumberConversionApiCallArgs extends APIGatewayProxyEvent {
  key1: string
}

export interface ReservationInfoApiCallArgs extends APIGatewayProxyEvent {
  systemCode: string,
  bookingCode: string,
  version?: number,
}