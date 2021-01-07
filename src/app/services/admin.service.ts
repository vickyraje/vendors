import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, retry, catchError } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class AdminService {
  API_URL = 'http://lgadmin.viewooh.com/admin/api'; 
  /*API_URL1 = 'http://viewooh.com/app/';*/
  API_URL1 = 'http://vyuktech.com/api/'; 
  isLoggedIn = false; token:any;
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,) { }

  // Error handling
	errorHandl(error) {
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
		  errorMessage = error.error.message;
		} else {
		  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
  }

  login(email, password) {
    return this.http.post(this.API_URL1 + 'orders.php',
      {'type':'VendorLogin',username:email,password:password}
    ).pipe( retry(0),catchError(this.errorHandl) );
  }
  //Order List
  orderList(){
    var user = localStorage.getItem('vendor_id');
    return this.http.post(this.API_URL1 + 'orders.php',{type:'Vendor','vendor':user}).pipe( retry(0),catchError(this.errorHandl) );
  }

  //Order Details
  orderDetails(id){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'OrderDetailss',salesId:id}).pipe( retry(0),catchError(this.errorHandl) );
  }

  saveVendor(details){
    return this.http.post(this.API_URL + '/admin/updateVendor',details).pipe( retry(0),catchError(this.errorHandl) );
  }

  vendorApprove(id){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'VendorApprove',id:id}).pipe( retry(0),catchError(this.errorHandl));
  }

  vendorReady(id){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'VendorReady',id:id}).pipe( retry(0),catchError(this.errorHandl));
  }

  productList(id){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'Vproducts',vendor:id}).pipe( retry(0),catchError(this.errorHandl));
  }

  pdfGenerate(fileName){
    return this.http.post(this.API_URL1 + 'print.php',{type:'pdfGenerate',fileName:fileName}).pipe(catchError(this.errorHandl) );
  }

  productPriceUpdate(id,pname,amount,vendor){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'productPriceUpdate',id:id,pname:pname,amount:amount,vendor:vendor}).pipe(catchError(this.errorHandl) );
  }

  vendorHelp(title,description,vendor){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'vendorHelp',title:title,description:description,vendor:vendor}).pipe(catchError(this.errorHandl) );
  }

  vendorHelpList(vendor){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'vendorHelpList',vendor:vendor}).pipe(catchError(this.errorHandl) );
  }

  weightUpdate(vendor){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'weightUpdate',details:vendor}).pipe(catchError(this.errorHandl) );
  }

  getOrderData(search){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'getOrderData',search:search}).pipe( retry(0),catchError(this.errorHandl) );
  }

  marketList(){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'dailyMarket'}).pipe( retry(0),catchError(this.errorHandl) ); 
  }

  productsuggestion(form,vendor){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'productSuggestion',details:form,vendor:vendor}).pipe( retry(0),catchError(this.errorHandl)); 
  }

  generateOtp(otp,vid){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'generateOtp',otp:otp,vendor:vid}).pipe( retry(0),catchError(this.errorHandl));
  }

  fetchOtp(vid){
    return this.http.post(this.API_URL1 + 'orders.php',{type:'fetchOtp',vendor:vid}).pipe( retry(0),catchError(this.errorHandl));
  }

  b2bProductList(){
    return this.http.post(this.API_URL1 + 'index.php',{type:'List'}).pipe( retry(0),catchError(this.errorHandl));
  }

  b2bProductSearchList(search){
    return this.http.post(this.API_URL1 + 'index.php',{type:'Search',search:search}).pipe( retry(0),catchError(this.errorHandl) );
  }

  b2bProductImageList(id){
    return this.http.post(this.API_URL1 + 'index.php',{type:'Image',id:id}).pipe( retry(0),catchError(this.errorHandl));
  }

  b2bSubmit(form,total,b2bProductLists){
    return this.http.post(this.API_URL1 + 'index.php',{type:'b2bSubmit',details:form,total:total,b2bProductLists:b2bProductLists}).pipe( retry(0),catchError(this.errorHandl));
  }

}
