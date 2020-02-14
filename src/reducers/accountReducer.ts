import * as MyTypes from 'MyTypes';
import { accountActionTypes } from '../actions/actions';

interface AccountModel {
  balance: number;
  loading: boolean;
}

export const initialState: AccountModel = {
  balance: 0,
  loading: false,
};

export const accountReducer = (
  state: AccountModel = initialState,
  action: MyTypes.RootAction
): AccountModel => {
  switch (action.type) {
    case accountActionTypes.DEPOSIT:
      return { balance: state.balance + action.payload, loading: false };
    case accountActionTypes.WITHDRAW:
      return { balance: state.balance - action.payload, loading: false };
    case accountActionTypes.LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
