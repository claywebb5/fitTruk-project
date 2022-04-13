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
        const Response = yield axios.get('/api/..');
        // console.log('get all:', stepsResponse.data);  **customerClass
        // yield put({ type: 'SET_ALL_STEPS', payload: stepsResponse.data });

    } catch {
        console.log('Error trying to fetch in sagas');
    }
}

// =============***< (GET ALL) CUSTOMER INFO >***=======================================
function* fetchCustomerInfo(){
    console.log('In , about to axios.');
    const Response = yield axios.get('/api/..');


}

// =============***< (POST) ADD CLASS RESERVATION >***=======================================
function* addReservation(){
    try {
        console.log('action.payload is:', action.payload)
        yield axios.post('/api/tasks', action.payload);
        yield put({ type: 'FETCH_TASKS' });
    } catch (error) {
        console.log('error posting a new task', error);
    }    
}

// =============***< (DELETE) REMOVE CLASS RESERVATION >***=======================================
function* removeReservation(){
    try {
        console.log('action.payload in delete is:', action.payload)
        yield axios.delete(`/api/tasks/delete/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_TASKS' });
    } catch (error) {
        console.log('error deleting a task', error);
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