import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.css']
})
export class ReactiveFormsExampleComponent implements OnInit {

  myForm:any;
  constructor(private fb:FormBuilder) { }
  
  
  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name : new FormControl(''),
    //   email : new FormControl(''),
    //   message : new FormControl('')
    // });

    this.myForm = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      message:['',[Validators.required, Validators.minLength]]
    })
  }

  onSubmit(form : FormGroup){
  console.log('valid?', form.valid);
  console.log('Name', form.value.name);
  console.log('Email', form.value.email);
  console.log('Message', form.value.message);
  }
}
