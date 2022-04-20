// const availableTrainersReducer = (state = [], action) => { // Enable this line when test data is no longer needed

//----------- Delete everything between these two lines when test data is no longer needed -------------------------------------------
const availableTrainersReducer = (state = [], action) => {
//----------^^^^^^ Delete everything between these two lines when test data is no longer needed ^^^^^^^^^^^^---------------------------

if (action.type === 'SET_AVAILABLE_TRAINERS') {
return action.payload;
}
else if (action.type === 'RESET_AVAILABLE_TRAINERS') {
return action.payload;
}
// If action.type is anything else, it'll just return the last value of state.
return state;
}
export default availableTrainersReducer;