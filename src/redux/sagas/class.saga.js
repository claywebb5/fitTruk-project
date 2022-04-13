import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET 
// will send a request to the classes router to retrieve all available classes
// =============***< (GET) ALL CLASSES >***=======================================
function* fetchClasses (){

}

// GET 
// will send a request to the classes router to search tne classes by name
// =============***< (GET) ALL CLASSES BASED ON SEARCH >***========================
function* searchClasses (){

}

// GET
// will send a request to the classes router to grab a specific classes details
// =============***< (GET) CLASS DETAILS >***======================================
function* fetchDetails (){

}


function* classSaga() {
    yield takeLatest('FETCH_CLASSES', fetchClasses);
    yield takeLatest('SEARCH_CLASSES', searchClasses);
    yield takeLatest('FETCH_CLASS_DETAILS', fetchDetails);
  }
  
  export default classSaga;