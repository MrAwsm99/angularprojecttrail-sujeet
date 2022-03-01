import { Component, Input, OnInit } from '@angular/core';
import { UserinformationService } from '../userinformation.service';
import { DatetimeService } from './../datetime.service' 

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  constructor(private dt:DatetimeService, public co:UserinformationService, public form:UserinformationService) { }
  getdate=this.dt.today;

  
  ngOnInit(): void {
  }
  @Input() recived:any;
}
