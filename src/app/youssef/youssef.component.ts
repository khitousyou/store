import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { MyFormValue, AppState } from '../ngrx-forms/form/reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-youssef',
  templateUrl: './youssef.component.html',
  styleUrls: ['./youssef.component.css']
})
export class YoussefComponent implements OnInit {

  formState$: Observable<FormGroupState<MyFormValue>>;

  constructor(private store: Store<AppState>) {
    this.formState$ = store.select(s => s.myForm);
  }

  ngOnInit(): void {
  }

}
