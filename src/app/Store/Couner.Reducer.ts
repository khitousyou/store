import {CustomAction} from'../Store/myStore'
import {INCR,DESC} from'../Store/Counter.action.'
import { createFeatureSelector, createSelector } from '@ngrx/store'

let state = {
    n:100
}

export interface Counter{
    n:number;
}

export function CounterReducer(_state =  state , action:CustomAction){
    switch(action.type){
        case INCR:
            return {
                n:_state.n + action.payload
            }
            case DESC:
                return{
                    n:_state.n - action.payload 
                }
                default :
                return _state
    }
}


const counterFS = createFeatureSelector<Counter>('counter')

export const selector = createSelector(counterFS,value => value.n)