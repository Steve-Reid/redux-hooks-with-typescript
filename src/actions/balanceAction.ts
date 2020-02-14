import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { accountActions } from '../actions/actions';

export const asyncDeposit = (
  amount: number
): ThunkAction<void, RootState, unknown, Action<string>> => (
  dispatch
): void => {
  dispatch(accountActions.loading());
  setTimeout(() => {
    dispatch(accountActions.deposit(amount));
  }, 3000);
};
