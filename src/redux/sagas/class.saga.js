import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// =============***< (GET) ALL CLASSES >***=======================================
function* fetchClasses() {
    // Will send a request to the classes router to retrieve all available classes
    try {
        const classes = yield axios.get(`/api/class/`); // * Goes to SERVER "class.router"
        yield put({ type: 'SET_ALL_CLASSES', payload: classes.data }); // * Goes to REDUCER "allClasses.reducer.js"
    } catch (error) {
    }
}

// =============***< (GET) CLASS DETAILS >***======================================
function* fetchDetails(action) {
    // Will send a request to the classes router to grab a specific classes details
    try {
        const classDetails = yield axios.get(`/api/class/details/${action.payload}/`); // * Goes to SERVER "class.router"
        yield put({ type: 'SET_CLASS_DETAILS', payload: classDetails.data }); // * Goes to REDUCER "classDetails.reducer.js"
    } catch (error) {
    }
}
function* classSize(action) {
    // Will send a request to the class router to retrieve size of class
    try {
        const size = yield axios.get(`/api/class/class-size/${action.payload}`); // * Goes to SERVER "class.router"
        yield put({ type: 'SET_CLASS_SIZE', payload: size.data }); // * Goes to REDUCER 
    } catch (error) {
    }
}

// =============***< (GET) ALL TRAINERS >***=======================================
function* fetchTrainers() {
    // Will send a request to the admin router to retrieve all available trainers
    try {
        const availableTrainerList = yield axios.get(`/api/admin/available-trainers`); // * Goes to SERVER "class.router"
        yield put({ type: 'SET_AVAILABLE_TRAINERS', payload: availableTrainerList.data }); // * Goes to REDUCER "availableTrainers.reducer.js"
    } catch (error) {
    }
}



function* classSaga() {
    yield takeLatest('FETCH_CLASSES', fetchClasses);
    yield takeLatest('FETCH_CLASS_DETAILS', fetchDetails);
    yield takeLatest('FETCH_CLASS_SIZE', classSize);
    yield takeLatest('FETCH_AVAILABLE_TRAINERS', fetchTrainers);
}

export default classSaga;