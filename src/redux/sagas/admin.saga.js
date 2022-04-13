import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



// POST 
// ADMIN ONLY
// will send a request to the admin router to create a new class and add it to the database
function* createClasses (){

}

function* trainerSaga(){
    yield takeLatest('CREATE_CLASS', createClasses);
}