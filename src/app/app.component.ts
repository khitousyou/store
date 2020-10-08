import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from './Store/myStore';
import { incremAction, descrAction } from './Store/Counter.action.';
import {appselectorkhitous} from'../app/Store/selecor'

// import { StoreInterface } from './Store/myStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'FormsReactive';
  user;
  alo = this.store.select(appselectorkhitous.selector_khitous)
  constructor(private store:Store<StoreInterface>){
     store.subscribe(data=> this.user = data.counter.n);
     //store.select(selector).subscribe(data=>console.log('selector',data))
     console.log('selectore',this.alo);
  }
     


      A(){
        this.store.dispatch( new incremAction(2))
      }
      B(){
        this.store.dispatch(new descrAction(2))
      }


     
}
