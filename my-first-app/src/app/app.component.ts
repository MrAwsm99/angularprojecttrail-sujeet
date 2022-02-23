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

}
