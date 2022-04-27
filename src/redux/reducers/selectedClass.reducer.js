import { combineReducers } from 'redux';

// This reducer holds the data of the class you are actively editing or creating
const classDetails = (
  state = {
    trainer_user_id: '',
    trainer_first_name: '',
    trainer_last_name: '',
    trainer_pronouns: '',
    trainer_image: '',
    date: '',
    classname: '',
    start_time: '',
    end_time: '',
    abrv_start_time: '',
    abrv_end_time: '',
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

    case 'RESET_CLASS_DETAILS': // This resets a class's details to an empty state.
      return {
        trainer_user_id: '',
        trainer_first_name: '',
        trainer_last_name: '',
        trainer_pronouns: '',
        trainer_image: '',
        date: '',
        classname: '',
        start_time: '',
        end_time: '',
        abrv_start_time: '',
        abrv_end_time: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        description: '',
        class_size: 0,
      };

    case 'SET_SELECTED_TRAINER':
      const { trainer_user_id, trainer_image, trainer_first_name, trainer_last_name, trainer_pronouns } = action.payload;
      return {
        ...state,
        trainer_user_id: trainer_user_id,
        trainer_image: trainer_image,
        trainer_first_name: trainer_first_name,
        trainer_last_name: trainer_last_name,
        trainer_pronouns: trainer_pronouns
      };

    case 'RESET_SELECTED_TRAINER':
      return {
        ...state,
        trainer_user_id: '',
        trainer_image: '',
        trainer_first_name: '',
        trainer_last_name: '',
        trainer_pronouns: '',
      };

    default:
      return state; // This will return the state of the reducer if no type is given.
  }
};



const classSize = (state = '', action) => {

  if (action.type === 'SET_CLASS_SIZE') {
    return action.payload;
  }
  return state;
};




export default combineReducers({
  classSize,
  classDetails,
});