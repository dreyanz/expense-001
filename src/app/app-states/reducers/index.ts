import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from 'src/environments/environment';
  import * as fromExpense from './expense.reducer';
  export interface AppState {
    data: fromExpense.ExpenseState;
  }
  export const reducers: ActionReducerMap<AppState, any> = {
    data: fromExpense.reducer,
  };
  export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? []
    : [];


export const getExpenseState = (state: AppState) => state.data;
export const getAllExpenses = createSelector(getExpenseState, fromExpense.getExpenses);
export const getExpenseById = createSelector(getExpenseState, fromExpense.getExpenseById);