import { combineReducers } from 'redux';

// This reducer holds the data of the class you are actively editing or creating

const classDetails = (
  state = {
    trainer_user_id: '',
    date: '',
    classname: '',
    start_time: '',
    end_time: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    description: '',
    class_size: 0,
  }, action) => {

  switch (action.type) {

    case 'SET_CLASS_DETAILS': // When opening up a class to edit, a saga will retrieve
    return action.payload;    // the class information and it'll be stored here.
    
    
    case 'EDIT_CLASS_DETAILS': // This handles any individual edits to a class' individual details.
    let propertyName = action.payload.propertyName; // The property name is dynamically inserted into the object
    let key = action.payload.key; // The key to the property is stored inside the payload.key object
    return {
      ...state,
      [propertyName]: key
    };
    
    case 'RESET_CLASS_DETAILS': // When opening up a class to edit, a saga will retrieve
    return {
      trainer_user_id: '',
      date: '',
      classname: '',
      start_time: '',
      end_time: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      description: '',
      class_size: 0,
    };

    default:
      return state; // This will return the state of the reducer if no type is given.
  }
};



// This reducer stores the ID, profile image, and name of the trainer that has been
// selected for a class during editing/class creation.
const selectedTrainer = (
  state = {
    trainer_user_id: '',
    profile_image: '',
    name: ''
  }, action) => {

  if (action.type === 'SET_ACTIVE_CLASS_TRAINER') {
    const { trainer_user_id, profile_image, name } = action.payload;
    return {
      ...state,
      trainer_user_id: trainer_user_id,
      profile_image: profile_image,
      name: name
    };
  }

  return state;
};

const classSize = (
  state = {
    class_size: '',
    
  }, action) => {

  if (action.type === 'SET_CLASS_SIZE') {
    const class_size = action.payload;
    return {
      ...state,
      class_size: class_size,
      
    };
  }

  return state;
};




export default combineReducers({
  classSize,
  classDetails,
  selectedTrainer
});