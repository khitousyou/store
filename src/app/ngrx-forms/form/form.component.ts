import { Component, OnInit,VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState, MyFormValue} from'../form/reducer'
import {appSelectors} from'../form/selectors'
import { FormGroupState } from 'ngrx-forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  ngOnInit(): void {
  }
  name = 'Angular ' + VERSION.major;
  title$ = this.store.select(appSelectors.getTitle);
  myForm$ = this.store.select(appSelectors.getMyForm);
  FormsValue$ = this.store.select(appSelectors.ValueMyForm);
  

  constructor(private store: Store<AppState>) {
    
  }

  onSubmit() {
    console.log('onSubmit');
    console.log('myForms',this.FormsValue$)
  }

  onReset() {
    console.log('onReset');
  }
  
}

