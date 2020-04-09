import types from './types.js';
import {combineReducers} from 'redux';

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_QUESTIONS: return action.payload;

  }
  return state;
};

const reducer = combineReducers({
  questions: questionsReducer
});

export default reducer;
