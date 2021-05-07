import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'template-form-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormsExampleComponent implements AfterViewInit {
  @Input()
  public rootForm: FormGroup;

  public formData: { [key: string]: any } = {};

  @ViewChild('templateForm')
  public templateForm: NgForm;

  public ngAfterViewInit(): void {
    this.rootForm.addControl('contactInfo', this.templateForm.form);

    this.templateForm.form.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.templateForm.form.valueChanges.pipe(debounceTime(250)).subscribe((value) => {
      console.log(value);
    });
  }

  public setData(): void {
    this.templateForm.form.patchValue({
      name: 'John',
      lastName: 'Smith',
    });
  }
}
