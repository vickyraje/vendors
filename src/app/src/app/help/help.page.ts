import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  newHelp:boolean=false; helpss:any=[]; helps:any=[]; events:any; vid:any;
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.helpList();
  }

  addNew(){
    this.newHelp = true;
  }

  helpList(){
    this.vid = localStorage.getItem('vendor_id');
    this.admin.vendorHelpList(this.vid).subscribe(
      res =>{
        this.helpss = res; this.helps = this.helpss.details;
      },err => console.log(err)
    );
  }

  helpSubmit(event){ 
    this.events = event.form.value;this.vid = localStorage.getItem('vendor_id');
    this.admin.vendorHelp(this.events.title,this.events.description,this.vid).subscribe(
      res =>{
      },err => console.log(err)
    );
    this.newHelp = false;
  }

  addNewClose(){
    this.newHelp = false;
  }

}
