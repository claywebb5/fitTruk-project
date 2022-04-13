import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET
// TRAINER/ADMIN ONLY
// will send a request to the trainer router to get all users signed up for a class
// =============***< (GET) ALL ATTENDEES FOR A CLASS >***==============================
function* fetchAttendance(){
    
}

// PUT
// TRAINER/ADMIN ONLY
// will send a request to the trainer router to update the details of a specific class
// =============***< (PUT) UPDATE CLASS DETAILS >***===================================
function* updateDetails (){

}

// PUT
// TRAINER/ADMIN ONLY
// will send a request to the trainer router to update attendance with those who arrived for the class
// =============***< (PUT) UPDATE CLASS ATTENDANCE >***=======================================
function* updateAttendance(){

}

function* trainerSaga(){
    yield takeLatest('FETCH_ATTENDANCE', fetchAttendance);
    yield takeLatest('UPDATE_CLASS_DETAILS', updateDetails);
    yield takeLatest('UPDATE_ATTENDANCE', updateAttendance);
}

export default trainerSaga;
