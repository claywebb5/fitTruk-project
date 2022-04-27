import {put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// =============***< (GET ALL) CUSTOMER INFO >***=======================================
function* fetchCustomerInfo(){
    try {
        const customerInfoResponse = yield axios.get('/api/user'); // Goes to SERVER "user.router"
        yield put({ type: 'SET_USER_INFO', payload: customerInfoResponse.data }); // * Goes to REDUCER "customerInfo.reducer.js"
    } catch {
    }
}

// =============***< (PUT) UPDATE CUSTOMER INFO >***=======================================
function* updateCustomerInfo(action){
    try {
        yield axios.put(`/api/customer/pronouns/${action.payload.id}`, action.payload); // * Goes to SERVER "customer.router" *
        yield put({type: 'FETCH_USER'}); // * Goes to THIS SAGA "customer.saga.js" (fetchCustomerInfo) *

    } catch (error){
    }

}

// =============***< (GET ALL) REGISTERED CLASSES >***=======================================
function* fetchCustomerClass() {

    try {
        const customerClassResponse = yield axios.get(`/api/customer`); // * Goes to SERVER "customer.router"
        yield put({ type: 'SET_MY_CLASSES', payload: customerClassResponse.data }); // * Goes to REDUCER "myClasses.reducer.js"
    } catch (error) {
    }
}

// =============***< (POST) ADD CUSTOMER CLASS RESERVATION >***=======================================
function* addReservation(action){
    try {
        yield axios.post(`/api/customer/reserve-class/${action.payload.id}`, action.payload); // * Goes to SERVER "customer.router"
        yield put({ type: 'FETCH_CUSTOMER_CLASS' }); // * Goes to THIS SAGA "customer.saga.js" (fetchCustomerSaga)
        yield put({ type: 'FETCH_CLASS_DETAILS', payload: action.payload.id }); // * Goes to THIS SAGA "class.saga.js" (fetchDetails)
    } catch (error) {
    }    
}

// =============***< (DELETE) REMOVE CUSTOMER CLASS RESERVATION >***=======================================
function* removeReservation(action){
    try {
        yield axios.delete(`/api/customer/delete/${action.payload.id}`, ); // * Goes to SERVER "customer.router"
        yield put({ type: 'FETCH_CLASS_DETAILS', payload: action.payload.id }); // * Goes to THIS SAGA "class.saga.js" (fetchDetails)
        yield put({ type: 'FETCH_CUSTOMER_CLASS' }); // * Goes to THIS SAGA "customer.saga.js" (fetchCustomerSaga)
    } catch (error) {
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