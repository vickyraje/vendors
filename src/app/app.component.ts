import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0; 
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home',
      image: '../assets/Dashboard.png'
    },
    {
      title: 'Product Pricing',
      url: '/pricing',
      icon: 'pricetag',
      image: '../assets/Pricing.png'
    },
    {
      title: 'Today’s order ',
      url: '/order',
      icon: 'calendar',
      image: '../assets/1924873.png'
    },
    {
      title: 'Wallet Transaction',
      url: '/wallet',
      icon: 'wallet',
      image: '../assets/Pay.png'
    },
    {
      title: 'Daily Market',
      url: '/dailymarket',
      icon: 'chatbox',
      image: '../assets/3050137.png'
    },
    {
      title: 'Lemongrocer Market',
      url: '/market',
      icon: 'chatbox',
      image: '../assets/3050137.png'
    },
    /*{
      title: 'Logistics Details',
      url: '/logistics',
      icon: 'heart',
      image: '../assets/Logistics.png'
    },*/
    {
      title: 'Help',
      url: '/help',
      icon: 'chatbox',
      image: '../assets/error.png'
    },
    {
      title: 'Product Suggestion',
      url: '/suggestion',
      icon: 'chatbox',
      image: '../assets/Suggestion.png'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out',
      image: '../assets/Logout.png'
    }
  ];
  shopname:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.shopname = localStorage.getItem('shop_name');
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
