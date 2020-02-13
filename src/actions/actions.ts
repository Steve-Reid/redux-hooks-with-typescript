import { action } from 'typesafe-actions';

// use typescript enum rather than action constants
export enum accountActionTypes {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
}

export enum loanActionTypes {
  APPLY = 'APPLY',
}

export const accountActions = {
  deposit: (amount: number) => action(accountActionTypes.DEPOSIT, amount),
  withdraw: (amount: number) => action(accountActionTypes.WITHDRAW, amount),
};

export const loanActions = {
  deposit: () => action(loanActionTypes.APPLY),
};
