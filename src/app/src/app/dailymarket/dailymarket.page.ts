import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dailymarket',
  templateUrl: './dailymarket.page.html',
  styleUrls: ['./dailymarket.page.scss'],
})
export class DailymarketPage implements OnInit {
  marketss:any=[]; markets:any=[];
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.marketList();
  }

  marketList(){
    this.admin.marketList().subscribe(
      res =>{
        this.marketss = res; this.markets = this.marketss.details; 
      },err => console.log(err)
    );
  }

}
