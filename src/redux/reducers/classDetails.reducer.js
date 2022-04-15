import { combineReducers } from 'redux';

const classDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CLASS_DETAILS':
        return action.payload;
        
    
      default:
        return state;
    }
  };

  // This reducer holds the data of the class you are actively editing or creating
  const activeClassReducer = ( 
    state = {
          trainer_user_id: '',
          date: '',
          classname: '',
          start_time: '',
          end_time: '',
          location: '',
          description: '',
          class_size: 0,
      }, action) => {
  
        
        if(action.type === 'SET_ACTIVE_CLASS_DETAILS'){
          console.log('activeClass: Action.payload is:', action.payload.data);
  
          let propertyName = action.payload.propertyName
          return {...state,
            [propertyName]: action.payload.data
          };
        }
          return state; // This will return the state of the reducer if no type is given.
    };
  
    const selectedTrainerReducer = (
      state = {
        trainer_user_id: '',
        profile_image: '',
        name: ''
      }, action) => {

        if(action.type === 'SET_ACTIVE_CLASS_TRAINER'){
          const {trainer_user_id, profile_image, name} = action.payload;
          return {
            trainer_user_id: trainer_user_id,
            profile_image: profile_image,
            name: name
          }
        }

        return state;
    };
  



  export default combineReducers({
    classDetailsReducer,
    activeClassReducer,
    selectedTrainerReducer
  });