import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import { DatetimeService } from './datetime.service';
import { UserinformationService } from './userinformation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'my-first-app';
  // imgUrl = ".././assets/images/p1.jpg";
  
  // fname="";

  // count = 0;
  // counterval(){
  //   this.fname = "James";
  //   return this.count++;
  // }
  // gnumber=0;
  // evenodd(){
  //   return this.gnumber%2==0;
  // }

  // numbArrays=[10,20,30,40]
  // strArrays=["John","Bruce","Tony"]

  // strLengths=["Bruce","Gotham","Avenger","Scarlet","Jonathan"]

  // itemsent=["mobile","Laptop"];

  // cart=0;
  // addcart(){
  //   return this.cart++;


    item=10;

    newArrays=[10,15,20,25,30,35,40,45,50];

    classfeature(){
      return 'red';
    }

    flag=false;
    enable(){
      this.flag=true;
    }
    disable(){
      this.flag=false;
    }


    value="Hello";
    button(){
      this.value;
    }

    // data=
    //   [
    //     {
    //       "id": 1,
    //       "name": "Leanne Graham",
    //       "username": "Bret",
    //       "email": "Sincere@april.biz",
    //       "address": {
    //         "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //           "lat": "-37.3159",
    //           "lng": "81.1496"
    //         }
    //       },
    //       "phone": "1-770-736-8031 x56442",
    //       "website": "hildegard.org",
    //       "company": {
    //         "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    //       }
    //     },
    //     {
    //       "id": 2,
    //       "name": "Ervin Howell",
    //       "username": "Antonette",
    //       "email": "Shanna@melissa.tv",
    //       "address": {
    //         "street": "Victor Plains",
    //         "suite": "Suite 879",
    //         "city": "Wisokyburgh",
    //         "zipcode": "90566-7771",
    //         "geo": {
    //           "lat": "-43.9509",
    //           "lng": "-34.4618"
    //         }
    //       },
    //       "phone": "010-692-6593 x09125",
    //       "website": "anastasia.net",
    //       "company": {
    //         "name": "Deckow-Crist",
    //         "catchPhrase": "Proactive didactic contingency",
    //         "bs": "synergize scalable supply-chains"
    //       }
    //     },
    //     {
    //       "id": 3,
    //       "name": "Clementine Bauch",
    //       "username": "Samantha",
    //       "email": "Nathan@yesenia.net",
    //       "address": {
    //         "street": "Douglas Extension",
    //         "suite": "Suite 847",
    //         "city": "McKenziehaven",
    //         "zipcode": "59590-4157",
    //         "geo": {
    //           "lat": "-68.6102",
    //           "lng": "-47.0653"
    //         }
    //       },
    //       "phone": "1-463-123-4447",
    //       "website": "ramiro.info",
    //       "company": {
    //         "name": "Romaguera-Jacobson",
    //         "catchPhrase": "Face to face bifurcated interface",
    //         "bs": "e-enable strategic applications"
    //       }
    //     },
    //     {
    //       "id": 4,
    //       "name": "Patricia Lebsack",
    //       "username": "Karianne",
    //       "email": "Julianne.OConner@kory.org",
    //       "address": {
    //         "street": "Hoeger Mall",
    //         "suite": "Apt. 692",
    //         "city": "South Elvis",
    //         "zipcode": "53919-4257",
    //         "geo": {
    //           "lat": "29.4572",
    //           "lng": "-164.2990"
    //         }
    //       },
    //       "phone": "493-170-9623 x156",
    //       "website": "kale.biz",
    //       "company": {
    //         "name": "Robel-Corkery",
    //         "catchPhrase": "Multi-tiered zero tolerance productivity",
    //         "bs": "transition cutting-edge web services"
    //       }
    //     },
    //     {
    //       "id": 5,
    //       "name": "Chelsey Dietrich",
    //       "username": "Kamren",
    //       "email": "Lucio_Hettinger@annie.ca",
    //       "address": {
    //         "street": "Skiles Walks",
    //         "suite": "Suite 351",
    //         "city": "Roscoeview",
    //         "zipcode": "33263",
    //         "geo": {
    //           "lat": "-31.8129",
    //           "lng": "62.5342"
    //         }
    //       },
    //       "phone": "(254)954-1289",
    //       "website": "demarco.info",
    //       "company": {
    //         "name": "Keebler LLC",
    //         "catchPhrase": "User-centric fault-tolerant solution",
    //         "bs": "revolutionize end-to-end systems"
    //       }
    //     },
    //     {
    //       "id": 6,
    //       "name": "Mrs. Dennis Schulist",
    //       "username": "Leopoldo_Corkery",
    //       "email": "Karley_Dach@jasper.info",
    //       "address": {
    //         "street": "Norberto Crossing",
    //         "suite": "Apt. 950",
    //         "city": "South Christy",
    //         "zipcode": "23505-1337",
    //         "geo": {
    //           "lat": "-71.4197",
    //           "lng": "71.7478"
    //         }
    //       },
    //       "phone": "1-477-935-8478 x6430",
    //       "website": "ola.org",
    //       "company": {
    //         "name": "Considine-Lockman",
    //         "catchPhrase": "Synchronised bottom-line interface",
    //         "bs": "e-enable innovative applications"
    //       }
    //     },
    //     {
    //       "id": 7,
    //       "name": "Kurtis Weissnat",
    //       "username": "Elwyn.Skiles",
    //       "email": "Telly.Hoeger@billy.biz",
    //       "address": {
    //         "street": "Rex Trail",
    //         "suite": "Suite 280",
    //         "city": "Howemouth",
    //         "zipcode": "58804-1099",
    //         "geo": {
    //           "lat": "24.8918",
    //           "lng": "21.8984"
    //         }
    //       },
    //       "phone": "210.067.6132",
    //       "website": "elvis.io",
    //       "company": {
    //         "name": "Johns Group",
    //         "catchPhrase": "Configurable multimedia task-force",
    //         "bs": "generate enterprise e-tailers"
    //       }
    //     },
    //     {
    //       "id": 8,
    //       "name": "Nicholas Runolfsdottir V",
    //       "username": "Maxime_Nienow",
    //       "email": "Sherwood@rosamond.me",
    //       "address": {
    //         "street": "Ellsworth Summit",
    //         "suite": "Suite 729",
    //         "city": "Aliyaview",
    //         "zipcode": "45169",
    //         "geo": {
    //           "lat": "-14.3990",
    //           "lng": "-120.7677"
    //         }
    //       },
    //       "phone": "586.493.6943 x140",
    //       "website": "jacynthe.com",
    //       "company": {
    //         "name": "Abernathy Group",
    //         "catchPhrase": "Implemented secondary concept",
    //         "bs": "e-enable extensible e-tailers"
    //       }
    //     },
    //     {
    //       "id": 9,
    //       "name": "Glenna Reichert",
    //       "username": "Delphine",
    //       "email": "Chaim_McDermott@dana.io",
    //       "address": {
    //         "street": "Dayna Park",
    //         "suite": "Suite 449",
    //         "city": "Bartholomebury",
    //         "zipcode": "76495-3109",
    //         "geo": {
    //           "lat": "24.6463",
    //           "lng": "-168.8889"
    //         }
    //       },
    //       "phone": "(775)976-6794 x41206",
    //       "website": "conrad.com",
    //       "company": {
    //         "name": "Yost and Sons",
    //         "catchPhrase": "Switchable contextually-based project",
    //         "bs": "aggregate real-time technologies"
    //       }
    //     },
    //     {
    //       "id": 10,
    //       "name": "Clementina DuBuque",
    //       "username": "Moriah.Stanton",
    //       "email": "Rey.Padberg@karina.biz",
    //       "address": {
    //         "street": "Kattie Turnpike",
    //         "suite": "Suite 198",
    //         "city": "Lebsackbury",
    //         "zipcode": "31428-2261",
    //         "geo": {
    //           "lat": "-38.2386",
    //           "lng": "57.2232"
    //         }
    //       },
    //       "phone": "024-648-3804",
    //       "website": "ambrose.net",
    //       "company": {
    //         "name": "Hoeger LLC",
    //         "catchPhrase": "Centralized empowering task-force",
    //         "bs": "target end-to-end models"
    //       }
    //     }
    //   ]
    //   removeItem(){
    //   }
      

      total=0;
      details:any=[];
      price=0;
      quantity=0;

      itemsInCart = [
    {"id": 1, "name": "Watch", "price": 4000, "quantity": 50}
      ]

      addDetails(details:any){
        this.itemsInCart.push(details);

    }
    
    constructor(private dt:DatetimeService, public udata:UserinformationService, public d:UserinformationService, public form:UserinformationService){}

    getdate= this.dt.today;

    userinfo = this.udata.data;


    user={
      "email":'',
      "password":'',
    };


    // onSubmitofform(user:any){

    //   console.log(this.user)
    // }
    recdata=""
    onSubmitofform(user:any){
      this.recdata=user;
      this.form.onSubmitofform(this.recdata)
    }
    // parentdata=""
    // send(value:any){
    //   this.parentdata=value;
    //   return this.d.form(this.parentdata)

    //   }

    arr:any[]=[];
    temp:any;
    k:any;
     cal(value:any){
       for(this.k=1;this.k<=10;this.k++){
         this.temp=(value*this.k);
         this.arr[this.k]=value+"*"+this.k+"="+this.temp;
       }
     }

     fy=0;
fm=0;
fd=0;
ty=0;
tm=0;
td=0;
ansy=0;
ansm=0;
ansd=0;
ans=0;
money=0;
cost(from:any,to:any)
{
  this.fy=parseInt(from[0]+from[1]+from[2]+from[3]);
  this.fm=parseInt(from[5]+from[6]);
  this.fd=parseInt(from[8]+from[9])
  this.ty=parseInt(to[0]+to[1]+[2]+to[3]);
  this.tm=parseInt(to[5]+to[6]);
  this.td=parseInt(to[8]+to[9])

if(this.td>this.fd)
{
  this.ansd=this.td-this.fd;
}
  else if(this.td<this.fd){
    this.tm--;
    this.td=this.td+30;
    this.ansd=this.td-this.fd;
  }
  if(this.tm>this.fd)
  {
    this.ansm=this.tm-this.fm;
  }
  else if(this.tm<this.fm){
    this.ty--;
    this.tm=this.tm+12;
    this.ansm=this.tm-this.fm;
  }
  if(this.ty>this.fy)
  {
    this.ansy=this.ty-this.fy;
  }
this.ans=this.ansy*365+this.ansm*30+this.ansd;
this.money=this.ans*400;
console.log(this.ansd)
console.log(this.ansy);
console.log(this.ansm);
console.log(this.ans);
console.log(this.money);
}

    }

    