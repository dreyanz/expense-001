import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { Expense } from '../interfaces/expense.interface';
import { Store } from "@ngrx/store";

import * as ExpenseAction from "../../app/app-states/action/expense.action";

import { getAllExpenses, getExpenseById, AppState } from '../app-states/reducers';

@Injectable({
  providedIn: 'root'
})
export class ExpenseStorageService {

  public expenses : Observable<Expense[]>;

  constructor(private storage: Storage, private store : Store<AppState>) { 
   this.createStorage(); 
   this.expenses = this.store.select(getAllExpenses);
  }

  async createStorage(){
    await this.storage.create();
  }

  async addExpense(expense: any){
    const expenseId = uuid.v4();
    const date = moment().format('YYYY-MM-DD hh:mm A');
    let expenseValue : Expense = {
      expenseId : expenseId,
      amount : expense.amount,
      date : date
    };

    this.store.dispatch(new ExpenseAction.CreateExpense({ expense : expenseValue }));

    /*const currentDate = moment().format('YYYY-MM-DD');
    const date = moment().format('YYYY-MM-DD hh:mm A');
    const expenseId = uuid.v4();

    expense = {
      ...expense,
      expenseId,
      date
    }
    
    var array: any[] = [];

    var expenses = await this.getExpense(currentDate);

    if(expenses && expenses.length > 0) {
      array = [
        ...expenses
      ]
    }

    array.push(expense)

    const result = await this.storage.set(currentDate, array);*/

    //console.log(`result ${JSON.stringify(result)}`);

  }

  async getExpense(key: string){
    return await this.storage.get(key);
  }

  async getCurrentExpense() {
    const currentDate = moment().format('YYYY-MM-DD');
    return await this.getExpense(currentDate);
  }

}
