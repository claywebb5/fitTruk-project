const attendeesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ATTENDEES':
        return action.payload;
      case 'CHECK_USER_IN':
                
        // const users = action.payload.attendees
        const userId = action.payload.userId
        
        // loop over array of attendees sent in payload
        for (let i = 0; i < action.payload.attendees.length; i++) {
          // initialized variable to make writing if logic more readable
          let user = action.payload.attendees[i]

          // finds user inside action.payload.attendees array by comparing the user id from array with userId sent in payload
          if(userId === user.id){
            // this sets the boolean value of the users checked in to the opposite of what it just was
            // this is what allow the value to toggle back and forth on the frontend
            user.checked_in = !user.checked_in;
          }
          
        }
        // updates local reduce state with the new boolean values that were set above
        return action.payload.attendees
      default:
        return state;
    }
  };

  export default attendeesReducer;