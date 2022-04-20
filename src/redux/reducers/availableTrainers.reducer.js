const availableTrainersReducer = (state = [], action) => {

if (action.type === 'SET_AVAILABLE_TRAINERS') {
return action.payload;
}

// If action.type is anything else, it'll just return the last value of state.
return state;
}
export default availableTrainersReducer;