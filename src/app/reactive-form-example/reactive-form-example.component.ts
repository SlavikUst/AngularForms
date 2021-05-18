import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

const bookFormValidation = (form: FormGroup) => {
  if (form.get('author')?.value && !form.get('bookName').value && form.get('bookName').disabled) {
    const titleControl = form.get('bookName');

    titleControl.enable();
    titleControl.updateValueAndValidity();
  }

  if (!form.get('author')?.value && !form.get('bookName').disabled) {
    const titleControl = form.get('bookName');

    titleControl.disable();
    titleControl.reset();
  }
};


class BooksFormConfig {
  public author;
  public bookName;

  constructor() {
    this.author = ['', [Validators.required]];
    this.bookName = [{ value: '', disabled: true }, [Validators.required]];
  }
}

@Component({
  selector: 'reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit {
  @Input()
  public rootForm: FormGroup;

  public booksForm: FormArray;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.booksForm = this.fb.array([
      this.createFormGroup()
    ]);

    this.rootForm.addControl('bookForm', this.booksForm);
  }

  public addBook(): void {
    this.booksForm.push(this.createFormGroup());
  }

  private createFormGroup(): FormGroup {
    return this.fb.group(
      new BooksFormConfig(),
      {
        validators: bookFormValidation,
      }
    )
  }
}
