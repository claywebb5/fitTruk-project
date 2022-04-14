import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// =============***< (GET) ALL CLASSES >***=======================================
function* fetchClasses (){
    // GET 
    // will send a request to the classes router to retrieve all available classes
    console.log('in fetchClasses, this is the disatch I recieved');
    
    try {
        // ** WHERE IN THE ROUTES/SERVER FILES WILL THE ROUTE FOR FETCHING ALL CLASSES BE???
        const classes = yield axios.get(`/api/class/`);
        console.log('these are classes', classes);
        
        yield put({ type: 'SET_ALL_CLASSES', payload: classes.data });
    } catch (error) {
        console.log('Error fetching All Classes', error);
    } 
    

}
// =============***< (GET) ALL CLASSES BASED ON SEARCH >***========================
function* searchClasses (action){
    // GET 
    // will send a request to the classes router to search tne classes by name
    console.log('here is the dispatch info:', action.type, action.payload);
    
}

// =============***< (GET) CLASS DETAILS >***======================================
function* fetchDetails (){
    // GET
    // will send a request to the classes router to grab a specific classes details

}


function* classSaga() {
    yield takeLatest('FETCH_CLASSES', fetchClasses);
    yield takeLatest('SEARCH_CLASSES', searchClasses);
    yield takeLatest('FETCH_CLASS_DETAILS', fetchDetails);
  }
  
  export default classSaga;