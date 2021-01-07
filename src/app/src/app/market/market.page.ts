import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides; b2bProductImages : Object[] = []; b2bProductName: any; productDetails:boolean = false; sliderOne: any; data1:any; b2bProductLists: any = []; private itemCart = []; cartCount: any;
  slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, pager: true, loop: true, spaceBetween: 20, pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  } };
  constructor(private admin: AdminService) {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        { id: 995 },
        { id: 925 },
        { id: 940 },
        { id: 943 },
        { id: 944 }
      ]
    };
  }

  addToCart(item){
    let added = false;
    for (let p of this.itemCart) {
      if (p.id === item.id) {
        p.id = item.id; p.qty +=1;
        added = true;
        break;
      } 
    }
    if (!added) {
      this.itemCart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(this.itemCart));
  }

  ngOnInit() {
    localStorage.getItem('cart');
    this.b2bProductList(); 
  }

  b2bProductList(){
    this.admin.b2bProductList().subscribe(
      res =>{
        this.data1 = res;
        if(this.data1.status=='Success'){
          this.b2bProductLists = this.data1.details;
        } 
      },err => console.log(err)
    );
  }

  onInput(event){
    let search = event.target.value;
    if (search && search.trim() != '') {
      this.admin.b2bProductSearchList(search).subscribe((res) => {
        this.data1 = res;
        this.b2bProductLists = this.data1.details;
      }, (err) => {
         console.log(err);
      });
    } else {
      this.b2bProductList();
    }
  }

  openProductDetail(id){ 
    this.admin.b2bProductImageList(id).subscribe((res) => {
      this.data1 = res; 
      this.b2bProductImages = this.data1.details;
      this.b2bProductName = this.data1.pname;
    }, (err) => {
       console.log(err);
    });
    this.productDetails=true;
  }

  closeProductDetail(){
    this.productDetails=false;
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
  
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}