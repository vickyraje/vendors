import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    localStorage.removeItem("vendor_id");
    localStorage.removeItem("shop_name");
    this.navCtrl.navigateRoot('/login');
  }

}
