import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// =============***< (GET) ALL ATTENDEES FOR A CLASS >***==============================
function* fetchAttendance(){
    // GET
    // TRAINER/ADMIN ONLY
    // will send a request to the trainer router to get all users signed up for a class
    try {
        const attendance = yield axios.get(`/api/trainer/attendance/${action.payload}`)
        yield put({ type: 'SET_ATTENDEES', payload: attendance.data });
    } catch {
        console.log('Get all attendees error');
    }
}

// =============***< (PUT) UPDATE CLASS DETAILS >***===================================
function* updateDetails (){
    // PUT
    // TRAINER/ADMIN ONLY
    // will send a request to the trainer router to update the details of a specific class
    try{
        
        yield axios.put(`/api/trainer/edit-class/${action.payload.id}`, action.payload);
        yield put({type: 'SET_CLASS_DETAILS'}) //
    }catch (error){
        console.log('Error editing class details', error);
    }
}

// =============***< (PUT) UPDATE CLASS ATTENDANCE >***=======================================
function* updateAttendance(){
    // PUT
    // TRAINER/ADMIN ONLY
    // will send a request to the trainer router to update attendance with those who arrived for the class
    try{
        
        yield axios.put(`/api/check-in/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_ATTENDANCE'}) //
    }catch (error){
        console.log('Error updating checked in status', error);
    }
}

function* trainerSaga(){
    yield takeLatest('FETCH_ATTENDANCE', fetchAttendance);
    yield takeLatest('UPDATE_CLASS_DETAILS', updateDetails);
    yield takeLatest('UPDATE_ATTENDANCE', updateAttendance);
}

export default trainerSaga;
