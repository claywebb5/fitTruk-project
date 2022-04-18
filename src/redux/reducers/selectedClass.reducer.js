import { combineReducers } from 'redux';

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

    case 'SET_CLASS_DETAILS':
      return action.payload;

    case 'EDIT_CLASS_DETAILS': //
      let propertyName = action.payload.propertyName; // The property name is dynamically inserted into the object
      let key = action.payload.key; // The key to the property is stored inside the payload.key object
      return {
        ...state,
        [propertyName]: key
      };

    default:
      return state; // This will return the state of the reducer if no type is given.
  }
};

// This reducer holds the data of the class you are actively editing or creating




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




export default combineReducers({
  classDetails,
  selectedTrainer
});