import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as MyTypes from 'MyTypes';
import { actionTypes } from '../actions/actions';

interface DepositPageProps {}

export const DepositPage: React.FC<DepositPageProps> = () => {
  const balance = useSelector(
    (state: MyTypes.ReducerState) => state.account.balance
  );
  const dispatch = useDispatch();

  const handleDeposit = (): void => {
    dispatch({ type: actionTypes.DEPOSIT, payload: 10 });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};
