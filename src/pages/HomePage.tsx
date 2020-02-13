import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as MyTypes from 'MyTypes';
import { loanActionTypes } from '../actions/actions';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const balance = useSelector(
    (state: MyTypes.ReducerState) => state.account.balance
  );
  const loan = useSelector((state: MyTypes.ReducerState) => state.loan.loan);
  const dispatch = useDispatch();

  const handleLoan = (): void => {
    dispatch({ type: loanActionTypes.APPLY });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <h1>{loan ? 'Loan Pending' : 'Need a Loan?'}</h1>
      {!loan && (
        <button className="btn-style" onClick={handleLoan}>
          Apply Now!
        </button>
      )}
    </div>
  );
};
