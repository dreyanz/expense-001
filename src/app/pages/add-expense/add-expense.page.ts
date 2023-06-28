import { Component, OnInit } from '@angular/core';
import { ExpenseStorageService } from 'src/app/services/expense-storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {

  inputText = "";

  constructor(private storage : ExpenseStorageService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async addExpense(){
    await this.storage.addExpense({"amount" : this.inputText});
    this.inputText = "";
    this.goBack();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
