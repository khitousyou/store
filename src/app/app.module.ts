import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from'@ngrx/store'
import { reducer} from '../app/Store/myStore';
import { TestComponent } from './Forms/test/test.component'
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { ReactiveComponent } from './Forms/reactive/reactive.component';
import { FormComponent } from './ngrx-forms/form/form.component';
import { appReducer } from './ngrx-forms/form/reducer';
import { NgrxFormsModule } from 'ngrx-forms';
import { DynamiqueComponent } from './forms/dynamique/dynamique.component';
import { YoussefComponent } from './youssef/youssef.component';
//import { NgrxFormsModule } from 'ngrx-forms';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReactiveComponent,
    FormComponent,
    DynamiqueComponent,
    YoussefComponent,
    //NgrxFormsModule,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer),
    FormsModule,
    NgrxFormsModule,
    //StoreModule.forRoot({app: appReducer}),
    //StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
