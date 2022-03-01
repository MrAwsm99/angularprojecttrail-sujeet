import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {


  myForm:any;
  constructor(private fb:FormBuilder) {
    
   }

  ngOnInit(): void {


    this.myForm = this.fb.group({
      fname:['', Validators.required],
      lname:['', Validators.required],
      age:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(2)]],
      mobile:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      address:['',[Validators.required, Validators.min(10)]]
     
    })
  }


  day1:any;
  day2:any;
  diff:any;
  diff_days:any;
  onSubmit(form : FormGroup){
  console.log('valid?', form.valid);
  console.log('FirstName :', form.value.fname);
  console.log('LastName :', form.value.lname);
  console.log('Age :', form.value.age);
  console.log('Email :', form.value.email);
  console.log('Address :', form.value.address);
  console.log('From', form.value.from);
  console.log('To', form.value.to);
  this.day1=new Date(form.value.from);
  this.day2= new Date(form.value.to);
  this.diff=this.day2.getTime() - this.day1.getTime();
  this.diff_days=this.diff / (1000 * 3600 * 24);
  console.log(this.diff_days.getTime());
  }

  
}
