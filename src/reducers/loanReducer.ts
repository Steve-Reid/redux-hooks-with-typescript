import * as MyTypes from 'MyTypes';
import { loanActionTypes } from '../actions/actions';

interface LoanModel {
  loan: boolean;
}

export const initialState: LoanModel = {
  loan: false,
};

export const loanReducer = (
  state: LoanModel = initialState,
  action: MyTypes.RootAction
): LoanModel => {
  switch (action.type) {
    case loanActionTypes.APPLY:
      return { loan: true };

    default:
      return state;
  }
};
