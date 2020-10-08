
 
export const INCR = '[Counter] 1'
export const DESC = '[Counter] 2'

export class incremAction{
    type:string = INCR
    payload:number;
    constructor(payload:number){
     this.payload=payload;
    }
  }
  
  export class descrAction{
    type:string=DESC 
    payload:number;
    constructor(payload:number){
     this.payload=payload;
    }
  }