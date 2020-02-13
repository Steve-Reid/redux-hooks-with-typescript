import * as MyTypes from 'MyTypes';
import { accountActionTypes } from '../actions/actions';

interface AccountModel {
  balance: number;
}

export const initialState: AccountModel = {
  balance: 0,
};

export const accountReducer = (
  state: AccountModel = initialState,
  action: MyTypes.RootAction
): AccountModel => {
  switch (action.type) {
    case accountActionTypes.DEPOSIT:
      return { balance: state.balance + action.payload };
    case accountActionTypes.WITHDRAW:
      return { balance: state.balance - action.payload };

    default:
      return state;
  }
};
