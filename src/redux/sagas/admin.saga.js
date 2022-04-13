import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// =============***< (POST) CREATE NEW CLASS>***========================
function* createClass (){
    
    // POST 
    // ADMIN ONLY
    // will send a request to the admin router to create a new class and add it to the database

}




function* adminSaga(){
    yield takeLatest('CREATE_CLASS', createClass);
}

export default adminSaga;
