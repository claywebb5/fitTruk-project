import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET 
// will send a request to the classes router to retrieve all available classes
function* fetchClasses (){

}

// GET 
// will send a request to the classes router to search tne classes by name
function* searchClasses (){

}

// GET
// will send a request to the classes router to grab a specific classes details
function* fetchDetails (){

}

// POST 
// ADMIN ONLY
// will send a request to the classes router to create a new class and add it to the database
function* createClasses (){

}

function* classSaga() {
    yield takeLatest('FETCH_CLASSES', fetchClasses);
    yield takeLatest('SEARCH_CLASSES', searchClasses);
    yield takeLatest('FETCH_CLASS_DETAILS', fetchDetails);
  }
  
  export default classSaga;