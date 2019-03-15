import { combineReducers } from 'redux';
import clickButton from '../actions/actions';

const initialState = {
    newValue: 'I\'m using redux!'
  };

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case clickButton.type:
        return {
          ...state, // PRESERVE THE OTHER STATES EQUAL
          newValue: action.newValue // UPDATE THE NEW ONE
        };
      default:
        return state;
    }
  };

export const Reducers = combineReducers({
  testState: testReducer
});