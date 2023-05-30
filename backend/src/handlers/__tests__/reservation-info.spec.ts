import { handler as reservationInfoHandler } from '../reservation-info';
import { ReservationInfoApiCallArgs } from '../../types';

describe('reservationInfoHandler', () => {
  const mockRequest: ReservationInfoApiCallArgs = {
    httpMethod: 'POST',
    body: JSON.stringify({
      'systemCode': 'ATCOMRES',
      'bookingCode': '82029289',
    }),
    headers: {},
    multiValueHeaders: {},
    path: '',
    pathParameters: {},
    stageVariables: {},
    isBase64Encoded: false,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    resource: '',
    systemCode: '',
    bookingCode: '',
    requestContext: {} as unknown,
  } as ReservationInfoApiCallArgs;

  it('should return reservation info', async () => {
    const response = await reservationInfoHandler(mockRequest);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('should return an error when body payload is missing', async () => {
    const invalidRequest = {
      ...mockRequest,
      body: JSON.stringify({}),
    };

    const response = await reservationInfoHandler(invalidRequest);

    expect(response.statusCode).toBe(404);
    expect(response.body).toBeDefined();
  });

  it('should handle errors gracefully', async () => {
    const invalidRequest = {
      ...mockRequest,
      body: 'error',
    };

    const response = await reservationInfoHandler(invalidRequest);

    expect(response.statusCode).toBe(500);
    expect(response.body).toBeDefined();
  });

});
