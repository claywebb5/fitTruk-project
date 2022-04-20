const attendeesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ATTENDEES':
        return action.payload;
      case 'CHECK_USER_IN':
        console.log('this is triggered');
        
        // const users = action.payload.attendees
        const userId = action.payload.userId
        
        for (let i = 0; i < action.payload.attendees.length; i++) {
          // console.log(users[i],'this should just be an ID',  userId);
          let user = action.payload.attendees[i]
          if(userId === user.id){
            console.log('Im matching IDs!');
            user.checked_in = !user.checked_in;
          }
          
        }
        return action.payload.attendees
      default:
        return state;
    }
  };

  export default attendeesReducer;