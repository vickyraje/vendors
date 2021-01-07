import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.page.html',
  styleUrls: ['./suggestion.page.scss'],
})
export class SuggestionPage implements OnInit {
  vid:any; form:any='';
  constructor(private admin: AdminService) { }
  suggestions:any;
  ngOnInit() {
    this.suggestions = [{'id':1,'name':"Product 1","date":"2020-08-23 23:10:03",'content':"Good Product",'rating':5},{'id':3,'name':"Product 3","date":"2020-08-23 23:13:45",'rating':3,'content':"Good Products"}]
  }

  productsuggestion(form){
    this.vid = localStorage.getItem('vendor_id');
    this.admin.productsuggestion(form.form.value,this.vid).subscribe(
      res =>{
        form.reset();
        Swal.fire('Submit Successfully');
      },err => console.log(err)
    );
  }

}
