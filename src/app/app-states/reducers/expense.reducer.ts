import * as fromExpense from "../action/expense.action";
import { Expense } from "src/app/interfaces/expense.interface";


export interface ExpenseState {
    data: Expense[];
}
export const initialState : ExpenseState  = {
    data: []
};

export function reducer(
    state = initialState,
    action: fromExpense.ActionUnion
): ExpenseState {
    switch (action.type) {
        case fromExpense.ActionTypes.LoadExpenses: {
          return {
            ...state,
            data: action.payload.expenses
          }
        }

        case fromExpense.ActionTypes.CreateExpense: {

          //tod add it to local storage

          return {
            ...state,
            data: [...state.data, action.payload.expense].reverse(),
          };
        }
        case fromExpense.ActionTypes.DeleteExpense: {
          return {
            ...state,
            data: [...state.data, action.payload.expense],
          };
        }
        default: {
          return state;
        }
      }
}

export const getExpenses = (state : ExpenseState) => state.data;
export const getExpenseById = (state : ExpenseState, props: { expenseId : string }) => 
  state.data.find((expense) => { expense.expenseId === props.expenseId });