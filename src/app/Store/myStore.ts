import {Counter, CounterReducer} from'../Store/Couner.Reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface StoreInterface{
    counter:Counter
}


 export interface CustomAction{
    type:string,
    payload:any
}


export const reducer:ActionReducerMap<StoreInterface> = {counter:CounterReducer} 