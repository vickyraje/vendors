import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  constructor(private admin: AdminService) { }
  walllets:any;data1:any;orders: any = [];empty:any; total_suma:any=0; totalnoorder:any=0; status:boolean=false;
  ngOnInit() {
    this.orderList();
    this.walllets = [{"id":11111,"bill":'INV-001',"amount":'₹ 100',"action":'bg-red','date':'2020-09-13 12:00:54','demurrage':'₹ 0'},{"id":11112,"bill":'INV-002',"amount":'₹ 200',"action":'bg-green','date':'2020-09-13 14:00:14','demurrage':'₹ 0'},{"id":11113,"bill":'INV-003',"amount":'₹ 1000',"action":'bg-blue','date':'2020-09-13 15:00:54','demurrage':'₹ 0'}];
  }

  totalDebit(inVoiceItems) {
    this.total_suma = 0;
    inVoiceItems.forEach(e => {
      this.totalnoorder +=1;
      this.total_suma += +e.total_fare 
    });
  }

  orderList(){
    this.admin.orderList().subscribe(
      res =>{
        this.data1 = res;
        if(this.data1.status=='Success'){
          this.walllets = this.data1.details;
          this.totalDebit(this.walllets);
        } else {
          this.empty = this.data1.details;
        }
      },err => console.log(err)
    );
  }

  showIds(){
    this.status=true;
  }

  closePopup(){
    this.status=false;
  }

}
