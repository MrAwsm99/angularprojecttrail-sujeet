import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() itemrecieved:any;

  counters = ["0"];
  cou = 0;
  incrementcounter(newItem:string){
    this.cou++;
    this.counters.push(newItem);

  }
}
