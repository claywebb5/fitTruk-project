import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import allClasses from './allClasses.reducer';
import attendees from './attendees.reducer';
import userClass from './userClass.reducer';
import availableTrainers from './availableTrainers.reducer';
import customerInfo from './customerInfo.reducer';

// -------- Class detail/editing information -----------
import classDetails from './classDetails.reducer';
import activeClass from './classDetails.reducer';
import selectedTrainer from './classDetails.reducer';


const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  allClasses, // contains all avaliable classes info
  classDetails, // contains details for a specific class
  attendees, //contains everyone registered in the class
  userClass, // contains specific classes for both trainers and customers 
  availableTrainers, // contains the list of trainers that an administrator has available to assign to a class.
  activeClass, // This contains the data of a class that's actively being edited or created.
  selectedTrainer, // This contains the data of a class that's actively being edited or created.
  customerInfo, // contains details about user like name, address etc
  
  
});

export default rootReducer;
