import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

 
   userForm:FormGroup;
   Tabemails:Array<String>;

  constructor(private fb:FormBuilder) { 
    this.userForm = new FormGroup({
      // name:   new FormControl('',[Validators.required,Validators.maxLength(7)]),
      // prenom: new FormControl('',Validators.required),
      // age:    new FormControl(''),
      // email:  new FormControl('',Validators.email) 
      //pour regrouper dnas un Object 
      //(/^(0)(1|2|3|4|5|8|9)[0-9]*$/)
      user: fb.group(
        {
          name:   new FormControl('',[Validators.required,Validators.maxLength(7)]),
          prenom: new FormControl('',Validators.required),
          age:    new FormControl('',[Validators.required,
                                      //Validators.minLength(4),
                                      Validators.pattern(/^(0)(0|1|2|3|4|5|6|7|8|9)[0-9]*$/)]),
          email:  new FormControl('',[Validators.email,this.myValid.bind(this)]) 
        }
      )
    });
  }

  ngOnInit(): void {
    this.Tabemails=["A@gmail.com","B@gmail.com"];
  }

  onSubmit(){
    console.log(this.userForm.value);
  }
  
  get name(){
    return this.userForm.get('user.name');
  }

  get email(){
    return this.userForm.get('user.email');
  }

  get age(){
    return this.userForm.get('user.age');
  }
  
  //creation un validateur
  alo;
 myValid(controls:FormControl):any{
  // if(this.Tabemails.find((ema:string) => ema === controls.value)){
  //   return {
  //     existe:true
  //   }
  // }
  // return null;
 }
}
