import { Action, combineReducers } from '@ngrx/store';
import { createFormGroupState, FormGroupState, AddArrayControlAction, updateArray, validate } from 'ngrx-forms';
import { required, greaterThan } from 'ngrx-forms/validation';

export interface Contact {
  name: string;
  email: string;
  employed: boolean;
  salary: number;
}

export interface FormValue {
  contacts: Contact[]
}

export interface DynamicFormState {
  formValue: FormGroupState<FormValue>;
}

export const FORM_ID = 'my-awesome-dynamic-form';

export const INITIAL_FORM_STATE = createFormGroupState<FormValue>(FORM_ID, {
  contacts: [{
    name: 'Sumit Arora',
    email: 'sumit@mail.com',
    employed: true,
    salary: 5000
  }]
});

export const INITIAL_STATE = {
  formValue: INITIAL_FORM_STATE,
}

// export const formReducer = createFormGroupReducerWithUpdate<FormValue>({
//   contacts: (control: any, form: any) => {
//     if(control.controls.length > 0) {
//       if (control.controls[0].value.employed) {
//       control.controls[0].controls.salary = validate(required, control.controls[0].controls.salary);
//       } else {
//               control.controls[0].controls.salary = validate([], control.controls[0].controls.salary);
//       }

//     } 
//     return control;
//   }
// });


// export function dynamicFormReducer(state: DynamicFormState = INITIAL_STATE, action: Action) {
//   const myForm = formReducer(state.formValue, action);
//   if (myForm !== state.formValue) {
//     state = { ...state, ...{ formValue: myForm } };
//     console.log(myForm.errors, action);
//   }

//   switch(action.type) {
//     default:
//       return state;      
//   }
// }