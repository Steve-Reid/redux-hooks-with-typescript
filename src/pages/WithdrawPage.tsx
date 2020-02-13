import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as MyTypes from 'MyTypes';
import { actionTypes } from '../actions/actions';

interface WithdrawPageProps {}

export const WithdrawPage: React.FC<WithdrawPageProps> = () => {
  const balance = useSelector(
    (state: MyTypes.ReducerState) => state.account.balance
  );
  const dispatch = useDispatch();

  const handleWithdraw = (): void => {
    dispatch({ type: actionTypes.WITHDRAW, payload: 10 });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};
