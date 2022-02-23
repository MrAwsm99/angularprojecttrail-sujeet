import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeeheader',
  templateUrl: './coffeeheader.component.html',
  styleUrls: ['./coffeeheader.component.css']
})
export class CoffeeheaderComponent implements OnInit {

  logo = ".././assets/images/logo1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
