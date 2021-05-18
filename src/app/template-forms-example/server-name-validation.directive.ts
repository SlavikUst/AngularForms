import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {from, Observable, pipe} from 'rxjs';
import {take} from 'rxjs/operators';

const forbiddenNameValidator = (value: string, forbiddenName: string) => {
  return from(fetch('./favicon.ico').then((res) => ({ name: 'testAsync' }))).pipe(take(1));
};

@Directive({
  selector: '[appServerNameValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ServerNameValidationDirective, multi: true}]
})
export class ServerNameValidationDirective implements AsyncValidator {
  @Input('appServerNameValidation') forbiddenName: string;

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    return this.forbiddenName ? forbiddenNameValidator(control?.value, this.forbiddenName) : null;
  }
}
