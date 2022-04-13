import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchClasses (){

}

function* searchClasses (){

}

function* fetchDetails (){

}

function* updateDetails (){

}

function* createClasses (){

}

function* classSaga() {
    yield takeLatest('FETCH_CLASSES', fetchClasses);
    yield takeLatest('SEARCH_CLASSES', searchClasses);
    yield takeLatest('FETCH_CLASS_DETAILS', fetchDetails);
    yield takeLatest('UPDATE_CLASS_DETAILS', updateDetails);
    yield takeLatest('CREATE_CLASS', createClasses);
  }
  
  export default classSaga;