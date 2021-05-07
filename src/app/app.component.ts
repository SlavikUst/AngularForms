import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  public  formData: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      id: [null, []],
    });
  }
}
