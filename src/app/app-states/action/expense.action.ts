import { Action } from "@ngrx/store";
import { Expense } from "src/app/interfaces/expense.interface";

export enum ActionTypes {
    CreateExpense = "[Expense Service] create expense",
    DeleteExpense = "[Delete Expense] delete expense"
}

export class CreateExpense implements Action {
    readonly type = ActionTypes.CreateExpense;

    constructor(public payload: { expense: Expense }) {}
    
}

export class DeleteExpense implements Action {
    readonly type = ActionTypes.DeleteExpense;

    constructor(public payload: { expense: Expense }) {}
}

export type ActionUnion = CreateExpense | DeleteExpense;
