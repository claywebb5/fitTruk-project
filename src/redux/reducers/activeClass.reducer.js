const activeClassReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_CLASS_DETAILS': // This sets all the class details with data retrieved from the database
        return action.payload;

      case 'SET_ACTIVE_CLASS_TRAINER_ID': // This changes the trainer ID only!
        return {...state,
          trainer_user_id: action.payload
        };
      case 'SET_ACTIVE_CLASS_DATE': // This changes the class date only!
        return {...state,
          date: action.payload
        };
      case 'SET_ACTIVE_CLASS_NAME': // This changes the class name only!
        return {...state,
          classname: action.payload
        };
      case 'SET_ACTIVE_CLASS_START_TIME': // This changes the start time only!
        return {...state,
          start_time: action.payload
        };
      case 'SET_ACTIVE_CLASS_END_TIME': // This changes the end time only!
        return {...state,
          end_time: action.payload
        };
      case 'SET_ACTIVE_CLASS_LOCATION': // This changes the class location only!
        return {...state,
          location: action.payload
        };
      case 'SET_ACTIVE_CLASS_DESCRIPTION': // This changes the class description only!
        return {...state,
          description: action.payload
        };
      case 'SET_ACTIVE_CLASS_SIZE': // This changes the class size only!
        return {...state,
          class_size: action.payload
        };
      default:
        return state; // This will return the state of the reducer if no type is given.
    }
  };

  export default activeClassReducer;