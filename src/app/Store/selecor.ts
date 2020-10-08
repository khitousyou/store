import { createFeatureSelector, createSelector } from '@ngrx/store'
import {Counter} from'../Store/Couner.Reducer'

//fitcher selector
const counterFS = createFeatureSelector<Counter>('counter')
//fitcher name = counter

export const selector_khitous = createSelector(counterFS,value => value.n+100)

export const appselectorkhitous ={
    selector_khitous
}