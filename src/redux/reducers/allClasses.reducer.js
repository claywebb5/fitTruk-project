const allClassesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALL_CLASSES':
        return action.payload;
        
    
      default:
        return state;
    }
  };

  export default allClassesReducer;
