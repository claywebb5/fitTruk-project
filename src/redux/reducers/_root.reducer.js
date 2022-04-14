import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import classDetailsReducer from './classDetails.reducer';
import allClassesReducer from './allClasses.Reducer';
import attendeesReducer from './attendeesReducer';
import userClassReducer from './userClassReducer';
import customerInfo from './customerInfo.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  allClassesReducer, // contains all avaliable classes info
  classDetailsReducer, // contains details for a specific class
  customerInfo, // contains details about user like name, address etc
  attendeesReducer, //contains everyone registered in the class
  userClassReducer, // contains specific classes for both trainers and customers 
  
  
});

export default rootReducer;
