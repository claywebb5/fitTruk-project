import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchClasses (){
    // GET 
    // will send a request to the classes router to retrieve all available classes

}

function* searchClasses (){
    // GET 
    // will send a request to the classes router to search tne classes by name

}

function* fetchDetails (){
    // GET
    // will send a request to the classes router to grab a specific classes details

}

function* updateDetails (){
    // PUT
    // TRAINER/ADMIN ONLY
    // will send a request to the classes router to update the details of a specific class 

}

function* createClasses (){
    // POST 
    // ADMIN ONLY
    // will send a request to the classes router to create a new class and add it to the database

}

function* classSaga() {
    yield takeLatest('FETCH_CLASSES', fetchClasses);
    yield takeLatest('SEARCH_CLASSES', searchClasses);
    yield takeLatest('FETCH_CLASS_DETAILS', fetchDetails);
    yield takeLatest('UPDATE_CLASS_DETAILS', updateDetails);
    yield takeLatest('CREATE_CLASS', createClasses);
  }
  
  export default classSaga;