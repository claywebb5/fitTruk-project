import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



// POST 
// ADMIN ONLY
// will send a request to the admin router to create a new class and add it to the database
function* createClasses (){

}

// PUT 
// SUPER ADMIN ONLY
// will send a request to the admin router to change a users access level, acting in a way like a promotion
function* updateAccess (){

}


function* trainerSaga(){
    yield takeLatest('CREATE_CLASS', createClasses);
    yield takeLatest('UPDATE_USER_ACCESS', updateAccess);
}