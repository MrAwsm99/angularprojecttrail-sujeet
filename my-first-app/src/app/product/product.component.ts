import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {"id": 1, "name": "Watch", "price": 4000, "quantity": 50},
    {"id": 2, "name": "Mobile", "price": 10000, "quantity": 30},
    {"id": 3, "name": "Speaker", "price": 1500, "quantity": 115},
    {"id": 4, "name": "TV", "price": 20000, "quantity": 34},
    {"id": 5, "name": "Earphones", "price": 500, "quantity": 55} 
   ]
   count=0;
   Add(){
     this.count++;
   }


details:any=[];
@Output() newItemEvent = new EventEmitter<any>();
addItem(product: any){
  this.newItemEvent.emit(product);
}
}