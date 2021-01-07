import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.page.html',
  styleUrls: ['./logistics.page.scss'],
})
export class LogisticsPage implements OnInit {

  constructor() { }
  logistics:any;
  ngOnInit() {
    this.logistics = [{"cname":'ABC Company',"address":'Plot No : 5, Thiruppalai, Madurai - 625014',"mobile":'9911991199',"incharge":"Incharge","inmobile":"9911991177"}];
  }

}
