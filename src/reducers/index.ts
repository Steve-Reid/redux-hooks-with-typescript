import { combineReducers } from 'redux';
import { accountReducer } from './accountReducer';
import { loanReducer } from './loanReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  loan: loanReducer,
});

export default rootReducer;
