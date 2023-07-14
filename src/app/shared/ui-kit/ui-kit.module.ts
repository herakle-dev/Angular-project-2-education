import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
const components=[
  FormsModule,
   ReactiveFormsModule,
   MatSelectModule,
   MatInputModule,
   MatFormFieldModule,
   MatButtonModule,
   HttpClientModule,
   MatProgressBarModule,
   MatDividerModule,
   MatCardModule

]

@NgModule(
  {
  declarations: [],
  imports: [
    CommonModule,
  ...components
  ],
  exports: [
    ...components
  ],
})
export class UiKitModule {

}
