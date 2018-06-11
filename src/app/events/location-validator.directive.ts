import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateLocationDirective, multi: true}]
})

export class ValidateLocationDirective implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let countryControl = formGroup.controls['country'];
    let cityControl = formGroup.controls['city'];

    // formGroup.root - is a form selector
    // to access onlineUrl controls
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    // if 3 fields exists and has a value OR onlineUrl exists and has a value -> valid
    if ((addressControl && addressControl.value
      && countryControl && countryControl.value
      && cityControl && cityControl.value)
    || (onlineUrlControl && onlineUrlControl.value))
    {
      return null
    }else{
      return { validateLocation: false }
    }
  }
}
