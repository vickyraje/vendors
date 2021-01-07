import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  b2bProductLists : any = [];
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.cartLists();
  }

  cartLists(){
    this.b2bProductLists = JSON.parse(localStorage.getItem('cart'));
  }

  addCartValue(items){
    for (let p of this.b2bProductLists) {
      if (p.id === items.id) {
        p.qty +=1;
        localStorage.setItem('cart', JSON.stringify(this.b2bProductLists));
        break;
      } 
    }
    this.cartLists();
  }

  minusCartValue(items){
    for (let p of this.b2bProductLists) {
      if (p.id === items.id) {
        p.qty -=1;
        if(p.qty==0){
          Swal.fire('Product Qty must be 1');
          break;
        }
        localStorage.setItem('cart', JSON.stringify(this.b2bProductLists));
        break;
      } 
    }
    this.cartLists();
  }

  removeCart(items){
    for (let p of this.b2bProductLists) {
      if (p.id === items.id) {
        this.b2bProductLists.pop(items);
        localStorage.setItem('cart', JSON.stringify(this.b2bProductLists));
        break;
      } 
    }
    this.cartLists();
  }

}
