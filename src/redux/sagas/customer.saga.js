import {put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// ** This saga file will listen for the following actions:
    // *[x] Getting all the customers personal info (Personal Info/Profile)
    // *[] Update customers personal info (Personal Info/Profile)
    // *[x] Getting all the customers registered classes (My Classes)
    // *[] Adding a new class to their reservations (My/All Classes/Class Details)
    // *[] Removing a class from their reservations (My Classes/Class Details)



// =============***< (GET ALL) CUSTOMER INFO >***=======================================
function* fetchCustomerInfo(){
    try {
        console.log('In fetchCustomerInfo, about to axios.get all the customer personal info');
        const customerInfoResponse = yield axios.get('/api/customer');  
        console.log('Getting all customer info:', customerInfoResponse.data);
        yield put({ type: 'SET_USER_INFO', payload: customerInfoResponse.data });
    } catch {
        console.log('Error trying to fetchCustomerInfo in sagas!');
    }
}

// =============***< (PUT) UPDATE CUSTOMER INFO >***=======================================
function* updateCustomerInfo(action){
    try {
        console.log('In updateCustomerInfo the action.payload is:', action.payload);
        yield axios.put(`/api/customer/update/${action.payload.id}`, action.payload);
        yield put({type: 'SET_USER_INFO'});
    } catch (error){
        console.log('Error updating customer info:', error)
    }

}

// =============***< (GET ALL) REGISTERED CLASSES >***=======================================
function* fetchCustomerClass() {
    try {
        console.log('In fetchCustomerClass, about to axios.get all the customers registered classes');
        const customerClassResponse = yield axios.get('/api/customer');
        console.log('Getting all registered classes:', customerClassResponse.data);
        yield put({ type: 'SET_MY_CLASSES', payload: customerClassResponse.data });
    } catch {
        console.log('Error trying to fetchCustomerClass in sagas!');
    }
}

// =============***< (POST) ADD CUSTOMER CLASS RESERVATION >***=======================================
function* addReservation(action){
    try {
        console.log('The action.payload for adding a new class reservation is:', action.payload)
        
        // ** WHERE IN THE ROUTES/SERVER FILES WILL THE ROUTE FOR ADDING A CLASS RESERVATION BE???
        yield axios.post('/api/..', action.payload);
        
        yield put({ type: 'FETCH_CUSTOMER_CLASS' });
    } catch (error) {
        console.log('Error adding a new class reservation', error);
    }    
}

// =============***< (DELETE) REMOVE CUSTOMER CLASS RESERVATION >***=======================================
function* removeReservation(action){
    try {
        console.log('The action.payload in removing a class reservation is:', action.payload)
        
        // ** WHERE IN THE ROUTES/SERVER FILES WILL THE ROUTE FOR DELETING A CLASS RESERVATION BE???
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
  yield takeLatest('UPDATE_CUSTOMER_INFO', updateCustomerInfo);
}

export default customerSaga; // ** NOT EXPORTED INTO ROOT SAGA YET **