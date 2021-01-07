import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data:any;
  constructor(private http: HttpClient,
    private navCtrl: NavController,private admin: AdminService) { }

  ngOnInit() {
    var user = localStorage.getItem('vendor_id');
    if(localStorage.getItem('vendor_id') === null){
      this.navCtrl.navigateRoot('/login');
    } else {
      this.navCtrl.navigateRoot('/dashboard');
    }
  }

  login(form: NgForm) {
    if(form.value.email==''){ Swal.fire('Username Mandatory'); 
    } else if(form.value.password==''){ Swal.fire('Password Mandatory'); }
    else {
      this.admin.login(form.value.email, form.value.password).subscribe(
        data => {
          this.data = data;
          if(this.data.status=='Success'){
            localStorage.setItem('vendor_id',this.data.Response);
            localStorage.setItem('shop_name',this.data.shop_name);
            this.navCtrl.navigateRoot('/dashboard');
          } else {
            Swal.fire('Enter valid username & password');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
