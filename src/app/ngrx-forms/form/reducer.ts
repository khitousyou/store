import { createReducer, Action, combineReducers } from '@ngrx/store';
import { FormGroupState, createFormGroupState, onNgrxForms, updateGroup, validate, formGroupReducer } from 'ngrx-forms';
import { required, greaterThanOrEqualTo, lessThan } from 'ngrx-forms/validation';

export interface MyFormValue {
  name: string;
  company: string;
}

export interface App {
  title: string;
  myForm: FormGroupState<MyFormValue>;
}

export interface AppState {
  readonly title: string;
  readonly myForm: FormGroupState<MyFormValue>;
}

const FORM_ID = 'test-form';

const initialFormState = createFormGroupState<MyFormValue>(FORM_ID, {
  name: '',
  company: ''
});

const validateMyForm = updateGroup<MyFormValue>({
  name: validate(required),
  company: validate(required)
});

const initialState: AppState = {
  title: 'App',
  myForm: initialFormState
}

const reducer = createReducer(
  initialState,
  onNgrxForms(),
);

export const validateAndUpdateForm = updateGroup<MyFormValue>({
  name: validate(required),
  company: validate(required)
});

const reducers = combineReducers<AppState, any>({
  myForm(s = initialFormState, a: Action) {
    return validateAndUpdateForm(formGroupReducer(s, a));
  },
  title(s = 'App', a: Action) {
    return s;
  }
});

export function appReducer(state: AppState | undefined, action: Action): AppState {
  return reducer(state, action);
}