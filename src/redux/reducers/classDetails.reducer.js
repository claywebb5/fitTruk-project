const classDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CLASS_DETAILS':
        return action.payload;
        
    
      default:
        return state;
    }
  };

  export default classDetailsReducer;