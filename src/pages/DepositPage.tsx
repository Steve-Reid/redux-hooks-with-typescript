import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as MyTypes from 'MyTypes';
import { accountActionTypes } from '../actions/actions';

interface DepositPageProps {}

export const DepositPage: React.FC<DepositPageProps> = () => {
  const balance = useSelector(
    (state: MyTypes.ReducerState) => state.account.balance
  );
  const dispatch = useDispatch();

  const handleDeposit = (): void => {
    dispatch({ type: accountActionTypes.DEPOSIT, payload: 10 });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <button className="btn-style" onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  );
};
