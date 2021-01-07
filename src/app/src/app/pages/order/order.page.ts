import { Component, ViewChild, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

const MINIUES = 1000 * 60;
const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  timerData:any = []; remainingSeconds:any; packingup:boolean = false; otp:any; total_suma:any=0; totalnoorder:any=0;
  public anArray:any=[]; data:boolean=false; noofBunble:any=0; otpEnable:any=0;
  totalSeconds: any=1800; hhmmss:any; intervalId = 0; seconds:any; SalesId:any; details:any; dataSource: any[]; empty:any; orders: any = []; status:boolean = false; data1:any; salesId:any; orderDetails:any[]; displayedColumns: string[] = ['sno', 'name', 'price', 'unit', 'qty', 'total']; ready:boolean=false; bun:any; bunbleqty:any=0; pdfName:any; vid:any; otps:any; fetch:any;
  constructor(private admin: AdminService) { /*this.seconds = this.totalSeconds; this.hhmmss = this.timercalls(this.totalSeconds);*/ } //₹

  ngOnInit() {
    this.orderList(); this.start(this.seconds); this.fetchOtp();
  }

  allOrderPackup(){
    this.otp = Math.floor(1000 + Math.random() * 9000);
    this.vid = localStorage.getItem('vendor_id');
    this.admin.generateOtp(this.otp,this.vid).subscribe(
      res => {
        this.fetch = res;
        if(this.fetch.status=='Failure'){ this.otp = this.fetch.success; }
        this.packingup=true;
      },err => console.log(err)
    );
  }

  fetchOtp(){
    this.vid = localStorage.getItem('vendor_id');
    this.admin.fetchOtp(this.vid).subscribe(
      res => {
        this.otps=res; this.otp = this.otps.otp;
      },err => console.log(err)
    );
  }

  allOrderPackupClose(){
    this.packingup=false;
  }

  allOrderPackupSubmit(){
    this.packingup=false;
  }

  shareMobile(fileName){
    this.admin.pdfGenerate(fileName).subscribe(
      res => {
        this.pdfName = res;
        if(this.pdfName.status == 'Success'){
          var API_URL1 = 'https://viewooh.com/app/pdf/'+this.pdfName.name; 
          window.open(API_URL1);
        }
      },err => console.log(err)
    );
  }
  goTo(){
    console.log('this.anArray',this.anArray);
    this.data=true;
  }
  Add(count){
    this.anArray=[];
    for(let i=1; i <= count; i++){ 
      this.anArray.push({ 'value' : i});
    }
  }

  /*secondPassed(row) {
    var seconds = this.timerData[row].remaining; console.log(seconds);
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        this.remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown' + row).innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(this.timerData[row].timerId);
        document.getElementById('countdown' + row).innerHTML = "Buzz Buzz";
    } else {
        seconds--;
    }
    this.timerData[row].remaining = seconds;
  }

  timer(row, min) {
    this.timerData[row] = {
      remaining: min,
      timerId: setInterval(function () { this.secondPassed(row); }, 1000)
    };
  } */

  timer(row, min) {}

  ionViewDidEnter(){
    this.orders;
  }

  onInput(event){
    let search = event.target.value;
    if (search && search.trim() != '') {
      this.admin.getOrderData(search).subscribe((res) => {
        this.data1 = res;
        this.orders = this.data1.details;
      }, (err) => {
         console.log(err);
      });
    } else {
      this.orderList();
    }
  }

  doRefresh(event){
    this.admin.orderList().subscribe(
      res =>{
        this.data1 = res;
        if(this.data1.status=='Success'){
          this.orders = this.data1.details;
        } else {
          this.empty = this.data1.details;
        }
        if (event)
          event.target.complete();
      },err => {console.log(err)
        if (event)
          event.target.complete();  
      }
    );
  }

  start(seconds) { 
    this.seconds = seconds; this.hhmmss = this.timercalls(seconds); 
    this.countDown();  
  }

  clearTimer() { 
    clearInterval(this.intervalId);
  }

  private countDown() { 
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1; 
      this.hhmmss = this.timercalls(this.seconds);
      if (this.seconds === 0) {
        this.clearTimer();
      } else {
        this.hhmmss = this.timercalls(this.seconds);
      } 
    }, 1000);
  }

  timercalls(totalSeconds){
	  var hours   = Math.floor(totalSeconds / 3600);
	  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
	  var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
	  seconds = Math.round(seconds * 100) / 100;
		var result =(minutes < 10 ? "0" + minutes : minutes);
		result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
	  return result;
  }

  orderList(){
    this.admin.orderList().subscribe(
      res =>{
        this.data1 = res;
        if(this.data1.status=='Success'){
          this.orders = this.data1.details;
        } else {
          this.empty = this.data1.details;
        }
      },err => console.log(err)
    );
  }

  venApprove(SalesIds){
    this.admin.vendorApprove(SalesIds).subscribe(
      res =>{
        this.data1 = res;
      },err => console.log(err)
    );
    this.orderList();
  }

  openPopup(id){ 
    this.admin.orderDetails(id).subscribe(
      res =>{
        this.details = res;
        this.orderDetails = this.details.details; 
        this.dataSource = this.orderDetails;
        this.totalDebit(this.orderDetails);
      },err => console.log(err)
    );
    this.salesId = id;
    this.status = true;
  }

  totalDebit(inVoiceItems) {
    this.total_suma = 0; this.totalnoorder = 0; 
    inVoiceItems.forEach(e => {
      this.totalnoorder +=e.qty;
      this.total_suma += +e.total 
    });
  }

  closePopup(){
    this.status = false;
  }

  openReadyPopup(id){ 
    this.admin.orderDetails(id).subscribe(
      res =>{
        this.details = res;
        this.orderDetails = this.details.details; 
      },err => console.log(err)
    );
    this.salesId = id;
    this.ready = true;
  }

  closeReadyPopup(){
    this.ready = false;
  }

  weightUpdate(form){
    this.admin.weightUpdate(form.form.value).subscribe(
      res =>{
        this.data1 = res;
      },err => console.log(err)
    );
    this.closeReadyPopup();
    this.orderList();
  }

  bundleno(value){ 
    var t =  Number(value)/Number(20);
    this.noofBunble = Math.round(t);
    this.Add(this.noofBunble);
    this.bunbleqty=1;
  }

  otpCheck(){
    this.otpEnable=1;
  }

}