import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
// ====***< NEW SAGAS >***========
import classSaga from './class.saga';
import customerSaga from './customer.saga';
import trainerSaga from './trainer.saga';
import adminSaga from './admin.saga';


export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    classSaga(),
    customerSaga(),
  ]);
}
