import * as React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { DepositPage } from './pages/DepositPage';
import { WithdrawPage } from './pages/WithdrawPage';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/deposit">
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/withdraw">
                Withdraw
              </NavLink>
            </li>
          </ul>
          <Route path="/" exact component={HomePage} />
          <Route path="/deposit" exact component={DepositPage} />
          <Route path="/withdraw" exact component={WithdrawPage} />
        </header>
      </div>
    </BrowserRouter>
  );
};
