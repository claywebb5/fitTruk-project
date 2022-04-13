import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



// POST 
// ADMIN ONLY
// will send a request to the admin router to create a new class and add it to the database
// =============***< (POST) CREATE NEW CLASS>***========================
function* createClass (){

}

// PUT 
// SUPER ADMIN ONLY
// will send a request to the admin router to change a users access level, acting in a way like a promotion
// =============***< (PUT) UPDATE USER ACCESS LEVEL >***================
function* updateAccess (){

}


function* adminSaga(){
    yield takeLatest('CREATE_CLASS', createClass);
    yield takeLatest('UPDATE_USER_ACCESS', updateAccess);
}

export default adminSaga;
