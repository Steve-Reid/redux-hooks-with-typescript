import * as React from 'react';
import { useSelector } from 'react-redux';

import * as MyTypes from 'MyTypes';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const balance = useSelector(
    (state: MyTypes.ReducerState) => state.account.balance
  );
  console.log('balance', balance);
  return (
    <div>
      <h1>Balance: {balance}</h1>
    </div>
  );
};
