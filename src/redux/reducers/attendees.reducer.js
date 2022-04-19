const attendeesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ATTENDEES':
        return action.payload;
      case 'CHECK_USER_IN':
        console.log('this dispatch should be triggered');
        
      default:
        return state;
    }
  };

  export default attendeesReducer;