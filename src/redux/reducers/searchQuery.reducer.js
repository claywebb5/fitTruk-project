import { combineReducers } from "redux";

const searchTerm= (state = '', action) => {

if (action.type === 'SET_SEARCH_TERM') {
return action.payload;
}

if (action.type === 'RESET_SEARCH_TERM') {
  state = '';
return state;
}

// If action.type is anything else, it'll just return the last value of state.
return state;
}


const searchByTrainer = (state = '', action) => {

if (action.type === 'SET_SEARCH_TRAINER') {
return action.payload
}

if (action.type === 'RESET_SEARCH_TRAINER') {
  state = '';
return state;
}

// If action.type is anything else, it'll just return the last value of state.
return state;
}




export default combineReducers({
  searchTerm,
  searchByTrainer
});