import {put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// ** This saga file will listen for the following actions:
    // *[] Getting all the customers registered classes (My Classes)
    // *[] Getting all the customers personal info (Personal Info/Profile)
    // *[] Adding a new class to their reservations (My/All Classes/Class Details)
    // *[] Removing a class from their reservations (My Classes/Class Details)

// =============***< (GET ALL) REGISTERED CLASSES >***=======================================
function* fetchCustomerClass() {
    try {
        console.log('In fetchCustomerClass, about to axios.get all the customers registered classes');
        const customerClassResponse = yield axios.get('/api/..');
        console.log('Getting all registered classes:', customerClassResponse.data);
        yield put({ type: '', payload: customerClassResponse.data });

    } catch {
        console.log('Error trying to fetch in sagas');
    }
}

// =============***< (GET ALL) CUSTOMER INFO >***=======================================
function* fetchCustomerInfo(){
    console.log('In , about to axios.');
    const customerInfoResponse = yield axios.get('/api/..');
    console.log('Getting all customer info:', customerInfoResponse.data);
    yield put({ type: 'SET_USER_INFO', payload: customerInfoResponse.data });


}

// =============***< (POST) ADD CLASS RESERVATION >***=======================================
function* addReservation(){
    try {
        console.log('The action.payload for adding a new class reservation is:', action.payload)
        yield axios.post('/api/..', action.payload);
        yield put({ type: 'FETCH_CUSTOMER_CLASS' });
    } catch (error) {
        console.log('Error adding a new class reservation', error);
    }    
}

// =============***< (DELETE) REMOVE CLASS RESERVATION >***=======================================
function* removeReservation(action){
    try {
        console.log('The action.payload in removing a class reservation is:', action.payload)
        yield axios.delete(`/api/../../${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_CUSTOMER_CLASS' });
    } catch (error) {
        console.log('Error removing a class reservation', error);
    }   
}

// =============***<  >***=======================================
// function* (){
    // console.log('In , about to axios.');


// }

function* customerSaga() {
  yield takeLatest('FETCH_CUSTOMER_CLASS', fetchCustomerClass);
  yield takeLatest('FETCH_CUSTOMER_INFO', fetchCustomerInfo);
  yield takeLatest('ADD_RESERVATION', addReservation);
  yield takeLatest('REMOVE_RESERVATION', removeReservation);
}

export default customerSaga; // ** NOT EXPORTED INTO ROOT SAGA YET **