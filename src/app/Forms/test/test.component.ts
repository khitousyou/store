import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User{
  name:string;
  prenom:string;
  age:number;
  email:string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  tab:Array<string>;
  data:User;

  constructor() { }

  @ViewChild('khitous') form:NgForm
  ngOnInit(): void {
    this.tab = [' ','25','22','20']
  }

  onClick(){
   this.data = {
     name:this.form.value.user.name,
     prenom:this.form.value.user.prenom,
     age:this.form.value.user.age,
     email:this.form.value.email
   };
  }

  
  ngForm(){
    this.form.form.patchValue({
      user:{name:"abbaoui"}
    })
  //  this.form.setValue({
  //   email:{email:"A@gmail.com"},
  //   user:{name:"aloq",age:"12",prenom:"alo2"}
   
  //  })
  
  }

  RestForm(){
    this.form.reset();
  }
}
