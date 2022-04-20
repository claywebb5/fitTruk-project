import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// =============***< (GET) ALL ATTENDEES FOR A CLASS >***==============================
function* fetchAttendance(action){
    // TRAINER/ADMIN ONLY
    // Will send a request to the trainer router to get all users signed up for a class
    
    try {
        const attendance = yield axios.get(`/api/trainer/attendance/${action.payload}`) // * Goes to SERVER "trainer.router"
        yield put({ type: 'SET_ATTENDEES', payload: attendance.data }); // * Goes to REDUCERS "attendees.reducer"
    } catch {
        console.log('Get all attendees error');
    }
}

// =============***< (PUT) UPDATE CLASS DETAILS >***===================================
function* updateDetails (){
    // TRAINER/ADMIN ONLY
    // Will send a request to the trainer router to update the details of a specific class
    try{
        yield axios.put(`/api/trainer/edit-class/${action.payload.id}`, action.payload); // * Goes to SERVER "trainer.router"
        yield put({type: 'SET_CLASS_DETAILS'}) // * Goes to REDUCERS "classDetails.reducer"
    } catch (error){
        console.log('Error editing class details', error);
    }
}

// =============***< (PUT) UPDATE CLASS ATTENDANCE >***=======================================
function* updateAttendance(action){
    // TRAINER/ADMIN ONLY
    // Will send a request to the trainer router to update attendance with those who arrived for the class
    console.log(action.payload);
    
    try{
        yield axios.put(`/api/trainer/check-in/${action.payload.id}`, action.payload.attendees); // * Goes to SERVER "trainer.router"
        yield put({type: 'FETCH_ATTENDANCE', payload: action.payload.id }) // * Goes to THIS SAGA "trainer.saga" (fetchAttendance)
    } catch (error){
        console.log('Error updating checked in status', error);
    }
}

function* trainerSaga(){
    yield takeLatest('FETCH_ATTENDANCE', fetchAttendance);
    yield takeLatest('UPDATE_CLASS_DETAILS', updateDetails);
    yield takeLatest('UPDATE_ATTENDANCE', updateAttendance);
}

export default trainerSaga;
