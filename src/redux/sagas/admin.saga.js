import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// ** POST 
// ** ADMIN ONLY
// ** Will send a request to the admin router to create a new class and add it to the database


// =============***< (POST) CREATE NEW CLASS>***========================
function* createClass (action){
    try {
        console.log('In createClass saga creating a new class, action.payload is:', action.payload);
        axios.post('/api/admin', action.payload);
        yield put({type: 'FETCH_CLASSES'});
    } catch {
        console.log('Error trying to create a new class in admin saga!');
    }    
}




function* adminSaga(){
    yield takeLatest('CREATE_CLASS', createClass);
}

export default adminSaga;
