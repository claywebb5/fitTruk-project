import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// =============***< (GET) ALL CLASSES >***=======================================
function* fetchClasses (){
    // Will send a request to the classes router to retrieve all available classes
    console.log('in fetchClasses, this is the dispatch I received');
    try {
        const classes = yield axios.get(`/api/class/`); // * Goes to SERVER "class.router"
        console.log('these are classes', classes);
        yield put({ type: 'SET_ALL_CLASSES', payload: classes.data }); // * Goes to REDUCER "allClasses.reducer.js"
    } catch (error) {
        console.log('Error fetching All Classes', error);
    } 
}


// =============***< (GET) ALL CLASSES BASED ON SEARCH >***========================
function* searchClasses (action){
    // Will send a request to the classes router to search the classes by name
    console.log('here is the dispatch info:', action.type, action.payload);
    // ----------------***< WAITING FOR BACK END ROUTE TO TEST >***-----------------------
    // try {
    //     // ** WHERE IN THE ROUTES/SERVER FILES WILL THE ROUTE FOR FETCHING ALL CLASSES BE???
    //     const classes = yield axios.get(`/api/class/${action.payload}`); // * Goes to SERVER "class.router"
    //     console.log('these are classes', classes);
    //     yield put({ type: 'SET_ALL_CLASSES', payload: classes.data }); // * Goes to REDUCER "allClasses.reducer.js"
    // } catch (error) {
    //     console.log('Error searching All Classes', error);
    // } 
}

// =============***< (GET) CLASS DETAILS >***======================================
function* fetchDetails (action){
    // Will send a request to the classes router to grab a specific classes details
    console.log('here is the dispatch info:', action.type, action.payload);
    try {
        const classDetails = yield axios.get(`/api/class/details/${action.payload}`); // * Goes to SERVER "class.router"
        console.log('these are the class details', classDetails.data);
        yield put({ type: 'SET_CLASS_DETAILS', payload: classDetails.data }); // * Goes to REDUCER "classDetails.reducer.js"
    } catch (error) {
        console.log('Error fetching Class Details', error);
    } 
}


function* classSaga() {
    yield takeLatest('FETCH_CLASSES', fetchClasses);
    yield takeLatest('SEARCH_CLASSES', searchClasses); // Currently commented out
    yield takeLatest('FETCH_CLASS_DETAILS', fetchDetails);
}
  
export default classSaga;