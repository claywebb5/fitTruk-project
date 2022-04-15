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

  export default activeClassReducer;