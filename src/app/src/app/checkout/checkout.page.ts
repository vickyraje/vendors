import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/services/admin.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  b2bProductLists : any = []; cartSum: any; data: any;
  constructor(private admin: AdminService,private navCtrl: NavController) { }

  ngOnInit() {
    this.b2bProductLists = JSON.parse(localStorage.getItem('cart'));
    this.cartTotal(this.b2bProductLists);
  }

  saveOrder(form: NgForm){
    if(form.value.name==''){ Swal.fire('Name Mandatory'); 
    } else if(form.value.mobile==''){ Swal.fire('Mobile No Mandatory'); 
    } else if(form.value.email==''){ Swal.fire('Email Mandatory'); 
    } else if(form.value.address==''){ Swal.fire('Address Mandatory'); 
    } else if(form.value.city==''){ Swal.fire('City Mandatory'); 
    } else if(form.value.pincode==''){ Swal.fire('Pincode Mandatory'); 
    } else if(form.value.pincode.length!=6){ Swal.fire('Pincode must be 6 digits'); 
    } else { 
      this.admin.b2bSubmit(form.value,this.cartSum,this.b2bProductLists).subscribe(
        data => {
          this.data = data;  console.log(this.data);
          if(this.data.status=='Success'){
            this.navCtrl.navigateRoot(['/market', { link: this.data.paymentLink }]);
          } 
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  cartTotal(inVoiceItems) {
    this.cartSum = 0; 
    inVoiceItems.forEach(e => {
      this.cartSum += e.qty*e.price; 
    });
  }

}
