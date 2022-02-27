import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
 
})
export class CartComponent implements OnInit {
  imgprod = ".././assets/images/jeans1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  count = 0;
  counterval(){
    return this.count++;
  }

  @Output() newItemEvent = new EventEmitter();

  addNewItem(){
  this.newItemEvent.emit();
  }
}
