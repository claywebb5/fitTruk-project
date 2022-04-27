import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import allClasses from './allClasses.reducer';
import attendees from './attendees.reducer';
import myClasses from './myClasses.reducer';
import availableTrainers from './availableTrainers.reducer';
import customerInfo from './customerInfo.reducer';
import searchQuery from './searchQuery.reducer';

// -------- Class detail/editing information -----------
import selectedClass from './selectedClass.reducer';

const rootReducer = combineReducers({
  
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  allClasses, // contains all avaliable classes info
  attendees, //contains everyone registered in the class
  myClasses, // contains specific classes for both trainers and customers 
  availableTrainers, // contains the list of trainers that an administrator has available to assign to a class.
  customerInfo, // contains details about user like name, address etc
  selectedClass, // contains details for a specific class
  searchQuery, // Contains all the data for search queries when searching or filtering for a certain class

});

export default rootReducer;
