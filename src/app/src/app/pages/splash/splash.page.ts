import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  setIns:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.setIns = setInterval(() => {
      this.redirect(); 
    }, 6000);
  }

  redirect(){
    clearInterval(this.setIns);
    this.router.navigateByUrl('/login');
  }

}
