import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAttendance(){
    
}

function* updateDetails (){
    // PUT
    // TRAINER/ADMIN ONLY
    // will send a request to the classes router to update the details of a specific class 

}

function* updateAttendance(){

}

function* trainerSaga(){
    yield takeLatest('FETCH_ATTENDANCE', fetchAttendance);
    yield takeLatest('UPDATE_CLASS_DETAILS', updateDetails);
    yield takeLatest('UPDATE_ATTENDANCE', updateAttendance);
}