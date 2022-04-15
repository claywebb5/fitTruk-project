// const availableTrainersReducer = (state = [], action) => { // Enable this line when test data is no longer needed

//----------- Delete everything between these two lines when test data is no longer needed -------------------------------------------
const availableTrainersReducer = (
  state = [
{
      trainer_user_id: 1,
      name: "Kim",
      profile_image: "https://www.yogaparkside.org/wp-content/uploads/2021/08/Jessica_D_Asana-e1629237846697.jpg",
  },{
      trainer_user_id: 2,
      name: "Mark",
      profile_image: "https://www.yogabaron.com/wp-content/uploads/2018/12/Yoga-teacher-at-front-of-yoga-class-dec9.jpg",
  },{
      trainer_user_id: 3,
      name: "Sarah",
      profile_image: "https://www.insideedition.com/sites/default/files/styles/video_1920x1080/public/images/2021-03/031821_yoga_teacher_web_0.jpg?h=d1cb525d",
  }], action) => {
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