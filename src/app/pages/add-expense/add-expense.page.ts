import { Component, OnInit } from '@angular/core';
import { ExpenseStorageService } from 'src/app/services/expense-storage.service';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {

  inputText = "";
  src = "";

  constructor(private storage : ExpenseStorageService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async addExpense(){
    await this.storage.addExpense({"amount" : this.inputText, "src" : this.src});
    this.inputText = "";
    this.goBack();
  }

  goBack() {
    this.navCtrl.pop();
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
    return imageUrl;
  };

  capture() {
    this.takePicture().then((data) => {
      console.log(`base64 ${data}`);
      this.src = data ? data : "";
    });
  }

}
