import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

const forbiddenNameValidator = (value: string, forbiddenName: string) => {
  return value?.toLowerCase() === forbiddenName?.toLowerCase() ? { name: 'Invalid Name' } : null;
};

@Directive({
  selector: '[appNameValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NameValidationDirective, multi: true}]
})
export class NameValidationDirective implements Validator {
  @Input('appNameValidation') forbiddenName: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(control?.value, this.forbiddenName) : null;
  }
}
