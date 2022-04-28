const myClassesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MY_CLASSES':
      return action.payload;


    default:
      return state;
  }
};

export default myClassesReducer;