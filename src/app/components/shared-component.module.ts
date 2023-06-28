import { NgModule } from "@angular/core";
import { ExpenseItemComponent } from "./expense-item/expense-item.component";
import { IonicModule } from "@ionic/angular";
import { ExpenseButtonComponent } from "./expense-button/expense-button.component";
@NgModule({
    declarations: [ExpenseItemComponent, ExpenseButtonComponent],
    exports: [ExpenseItemComponent, ExpenseButtonComponent],
    imports: [IonicModule]
})
export class SharedModule {  }