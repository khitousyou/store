import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const getApp = createFeatureSelector('app');
export const getTitle = createSelector(getApp, (state: AppState) => state.title);
export const getMyForm = createSelector(getApp, (state: AppState) => state.myForm);
export const ValueMyForm = createSelector(getApp, (state: AppState) => state.myForm.controls.company);

export const appSelectors = {
  getApp,
  getTitle,
  getMyForm,
  ValueMyForm
};

