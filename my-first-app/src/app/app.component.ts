import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  imgUrl = ".././assets/images/p1.jpg";
  
  fname="";

  count = 0;
  counterval(){
    this.fname = "James";
    return this.count++;
  }
  gnumber=0;
  evenodd(){
    return this.gnumber%2==0;
  }

  numbArrays=[10,20,30,40]
  strArrays=["John","Bruce","Tony"]

  strLengths=["Bruce","Gotham","Avenger","Scarlet","Jonathan"]

  itemsent=["mobile","Laptop"];

  cart=0;
  addcart(){
    return this.cart++;
  }
}
