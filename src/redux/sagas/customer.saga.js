import {put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// ** This saga file will listen for the following actions:
    // *[x] Getting all the customers personal info (Personal Info/Profile)
    // *[x] Update customers personal info (Personal Info/Profile)
    // *[x] Getting all the customers registered classes (My Classes)
    // *[x] Adding a new class to their reservations (My/All Classes/Class Details)
    // *[x] Removing a class from their reservations (My Classes/Class Details)



// =============***< (GET ALL) CUSTOMER INFO >***=======================================
function* fetchCustomerInfo(){
    try {
        console.log('In fetchCustomerInfo, about to axios.get all the customer personal info');
        const customerInfoResponse = yield axios.get('/api/user'); // Goes to SERVER "user.router"
        console.log('Getting all customer info:', customerInfoResponse.data);
        yield put({ type: 'SET_USER_INFO', payload: customerInfoResponse.data }); // * Goes to REDUCER "customerInfo.reducer.js"
    } catch {
        console.log('Error trying to fetchCustomerInfo in sagas!');
    }
}

// =============***< (PUT) UPDATE CUSTOMER INFO >***=======================================
function* updateCustomerInfo(action){
    try {
        console.log('In updateCustomerInfo the action.payload is:', action.payload);

        // Best practice for REST API's, the ID of the thing you're changing should be on the url
        yield axios.put(`/api/customer/pronouns/${action.payload.id}`, action.payload); // * Goes to SERVER "customer.router" *

        // SYNTAX-UPDATE : TEST this, make sure it works 
        // yield put({type: 'FETCH_CUSTOMER_INFO'}); // * Goes to THIS SAGA "customer.saga.js" (fetchCustomerInfo) *
        yield put({type: 'FETCH_USER'}); // * Goes to THIS SAGA "customer.saga.js" (fetchCustomerInfo) *

    } catch (error){
        console.log('Error updating customer info:', error)
    }

}

// =============***< (GET ALL) REGISTERED CLASSES >***=======================================
function* fetchCustomerClass() {

    try {
        console.log('In fetchCustomerClass, about to axios.get all the customers registered classes');
        const customerClassResponse = yield axios.get(`/api/customer`); // * Goes to SERVER "customer.router"
        console.log('Getting all registered classes:', customerClassResponse.data);
        yield put({ type: 'SET_MY_CLASSES', payload: customerClassResponse.data }); // * Goes to REDUCER "userClass.reducer.js"
    } catch (error) {
        console.log('Error trying to fetchCustomerClass in sagas!', error);
    }
}

// =============***< (POST) ADD CUSTOMER CLASS RESERVATION >***=======================================
function* addReservation(action){
    try {
        console.log('The action.payload for adding a new class reservation is:', action.payload);
        yield axios.post(`/api/customer/reserve-class/${action.payload.id}`, action.payload); // * Goes to SERVER "customer.router"
        yield put({ type: 'FETCH_CUSTOMER_CLASS' }); // * Goes to THIS SAGA "customer.saga.js" (fetchCustomerSaga)
    } catch (error) {
        console.log('Error adding a new class reservation', error);
    }    
}

// =============***< (DELETE) REMOVE CUSTOMER CLASS RESERVATION >***=======================================
function* removeReservation(action){
    try {
        // console.log('The action.payload in removing a class reservation is:', action.payload)
        yield axios.delete(`/api/customer/delete/${action.payload.id}`, ); // * Goes to SERVER "customer.router"
        yield put({ type: 'FETCH_CUSTOMER_CLASS' }); // * Goes to THIS SAGA "customer.saga.js" (fetchCustomerSaga)
    } catch (error) {
        console.log('Error removing a class reservation', error);
    }   
}


// =============*< WATCHER SAGA >*=======================================
function* customerSaga() {
  yield takeLatest('FETCH_CUSTOMER_CLASS', fetchCustomerClass);
  yield takeLatest('FETCH_CUSTOMER_INFO', fetchCustomerInfo);
  yield takeLatest('ADD_RESERVATION', addReservation);
  yield takeLatest('REMOVE_RESERVATION', removeReservation);
  yield takeLatest('UPDATE_CUSTOMER_INFO', updateCustomerInfo);
}

export default customerSaga;