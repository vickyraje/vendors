import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {
  status:boolean = false; prices:any = []; pricess:any = []; name:any; price:any; vid:any; pid:any;
  constructor(private admin: AdminService) { }
  ngOnInit() {
    this.productList();
  }

  productList(){
    this.vid = localStorage.getItem('vendor_id');
    this.admin.productList(this.vid).subscribe(
      res =>{
        this.pricess = res;
        this.prices = this.pricess.details;
      },err => console.log(err)
    );
  }

  update(event){
    this.vid = localStorage.getItem('vendor_id');
    this.admin.productPriceUpdate(event.form.value.pid,event.form.value.pname,event.form.value.price,this.vid).subscribe(
      res =>{
        this.productList();
      },err => console.log(err)
    );
    this.closePopup();
  }

  openPopup(name,price,pid){ 
    this.name = name; this.price = price; this.pid = pid;
    this.status = true;
  }

  closePopup(){
    this.status = false;
  }

}
