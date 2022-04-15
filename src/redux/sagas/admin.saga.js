import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// ** ADMIN ONLY

// =============***< (POST) CREATE NEW CLASS>***========================
// ** Will send a request to the admin router to create a new class and add it to the database
function* createClass (action){
    try {
        console.log('In createClass saga creating a new class, action.payload is:', action.payload);
        axios.post('/api/admin', action.payload); // * Goes to SERVER "admin.router"
        yield put({type: 'FETCH_CLASSES'}); // * Goes to SAGAS "class.saga"
    } catch {
        console.log('Error trying to create a new class in admin saga!');
    }    
}




function* adminSaga(){
    yield takeLatest('CREATE_CLASS', createClass);
}

export default adminSaga;
