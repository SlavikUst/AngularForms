import {FormGroup, Validators} from '@angular/forms';

export const bookFormValidation = (form: FormGroup) => {
  if (form.get('author')?.value && !form.get('bookName').value && form.get('bookName').disabled) {
    const titleControl = form.get('bookName');

    titleControl.setValidators([Validators.required]);
    titleControl.enable();
    titleControl.updateValueAndValidity();
  }

  if (!form.get('author')?.value && !form.get('bookName').disabled) {
    const titleControl = form.get('bookName');

    titleControl.disable();
    titleControl.reset();
  }
};
