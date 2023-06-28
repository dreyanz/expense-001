import { Component, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ExpenseStorageService } from '../services/expense-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navCtrl: NavController, 
    public expenseService : ExpenseStorageService,
    private changeRef: ChangeDetectorRef,
    private app: ApplicationRef) {}

  getExpenses(){

    this.expenseService.getCurrentExpense().then((data) => {
      //this.expenses = data.reverse();

      //console.log(`expenses is ${this.expenses.length}`);

    })
  }

  ngOnInit(){
    this.getExpenses();
  }

  ionViewWillEnter(){
    console.log('it enter')
    this.getExpenses();   
  }

  ionViewDidEnter(){
    console.log('did enter');
  }

  goToExpensePage(){
    this.navCtrl.navigateForward('/add-expense');
  }

}
