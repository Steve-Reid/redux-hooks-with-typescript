import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as MyTypes from 'MyTypes';
import { accountActionTypes } from '../actions/actions';

interface WithdrawPageProps {}

export const WithdrawPage: React.FC<WithdrawPageProps> = () => {
  const balance = useSelector(
    (state: MyTypes.ReducerState) => state.account.balance
  );
  const dispatch = useDispatch();

  const handleWithdraw = (): void => {
    dispatch({ type: accountActionTypes.WITHDRAW, payload: 10 });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <button className="btn-style" onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
};
