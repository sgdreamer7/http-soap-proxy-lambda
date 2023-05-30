import * as lambdaLocal from 'lambda-local';
import * as path from 'path';



const jsonPayload = {
  body: JSON.stringify({
    'systemCode': 'ATCOMRES',
    'bookingCode': '82029289',
    // 'version': 1.0,
  }),
};
lambdaLocal.execute({
  event: jsonPayload,
  lambdaPath: path.join(__dirname, 'src/handlers/reservation-info.js'),
  timeoutMs: 3000,
}).then(function (done) {
  console.log(done);
}).catch(function (err) {
  console.log(err);
});

