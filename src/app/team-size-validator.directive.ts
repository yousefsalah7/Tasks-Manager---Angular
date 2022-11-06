import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appTeamSizeValidator]',
  providers:[
    {provide:NG_VALIDATORS,useExisting:TeamSizeValidatorDirective,multi:true}
  ]
})
export class TeamSizeValidatorDirective implements Validator
{

  constructor() { }

  @Input("appTeamSizeValidator") nn : any;

  validate(control: AbstractControl): ValidationErrors | null {
    let CurrentValue =control.value;
    let isValid =CurrentValue %this.nn ==0;

    if (isValid) {
      return null;

    }
    else{
      return {
        devisible: {valid:false}
      };
    }

  }

}
