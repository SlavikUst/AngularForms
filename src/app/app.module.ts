import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemoComponent } from './memo/memo.component';
import { FormsExampleComponent } from './template-forms-example/forms-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent,
    FormsExampleComponent,
    ReactiveFormExampleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
