import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' }); // * Goes to REDUCER "errors.reducer"

    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload); // * Goes to SERVER "user.router"

    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload }); // * Goes to SAGAS "login.saga"

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' }); // * NO CLUE WHERE THIS GOES???
  } catch (error) {
    yield put({ type: 'REGISTRATION_FAILED' }); // * Goes to REDUCER "errors.reducer"
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
