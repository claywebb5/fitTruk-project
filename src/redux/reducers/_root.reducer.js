import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import classDetails from './classDetails.reducer';
import allClasses from './allClasses.reducer';
import PersonalinfoReducer from './Personalinfo.reducer';
import attendees from './attendees.reducer';
import userClass from './userClass.reducer';
import availableTrainers from './availableTrainers.reducer';
import activeClass from './activeClass.reducer';
import customerInfo from './customerInfo.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  allClasses, // contains all avaliable classes info
  classDetails, // contains details for a specific class
  PersonalinfoReducer, // contains details about user like name, address etc
  attendees, //contains everyone registered in the class
  userClass, // contains specific classes for both trainers and customers 
  availableTrainers, // contains the list of trainers that an administrator has available to assign to a class.
  activeClass, // This contains the data of a class that's actively being edited or created.
  customerInfo, // contains details about user like name, address etc

  
});

export default rootReducer;
