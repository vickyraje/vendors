import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymentLink: any;
  constructor(private route: ActivatedRoute, private webview: WebView) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.paymentLink = params["paymentLink"];
    });
    console.log(this.paymentLink);
    this.webview.convertFileSrc(this.paymentLink);
  }

}
