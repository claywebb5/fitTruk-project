const attendeesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ATTENDEES':
        return action.payload;
      case 'CHECK_USER_IN':
        console.log('this dispatch should be triggered');
        
        const users = action.payload.attendees
        const userId = action.payload.userId
        
        for (let i = 0; i < users.length; i++) {
          console.log(users[i],'this should just be an ID',  userId);
          
          
        }
        
      default:
        return state;
    }
  };

  export default attendeesReducer;