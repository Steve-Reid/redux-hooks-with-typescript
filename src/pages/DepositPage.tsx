import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as MyTypes from 'MyTypes';
import * as balanceActions from '../actions/balanceAction';

interface DepositPageProps {}

export const DepositPage: React.FC<DepositPageProps> = () => {
  const balance = useSelector(
    (state: MyTypes.ReducerState) => state.account.balance
  );
  const loading = useSelector(
    (state: MyTypes.ReducerState) => state.account.loading
  );
  const dispatch = useDispatch();

  const handleDeposit = (): void => {
    dispatch(balanceActions.asyncDeposit(10));
  };

  return (
    <div>
      <h1>Balance: {loading ? <span className="loader" /> : balance}</h1>
      <button className="btn-style" onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  );
};
