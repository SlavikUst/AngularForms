import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {BooksFormConfig} from './reactive-form-example.config';
import {bookFormValidation} from './reactive-form-example.validators';

@Component({
  selector: 'reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  public addBook(): void {
    this.booksForm.push(this.fb.group(
      new BooksFormConfig(),
      {
        validators: bookFormValidation,
      }
    ));
  }
}
