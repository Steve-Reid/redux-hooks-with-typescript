import { action } from 'typesafe-actions';

// use typescript enum rather than action constants
export enum actionTypes {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
}

export const accountActions = {
  deposit: (amount: number) => action(actionTypes.DEPOSIT, amount),
  withdraw: (amount: number) => action(actionTypes.WITHDRAW, amount),
};
