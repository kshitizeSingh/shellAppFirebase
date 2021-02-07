import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

//this module is used for styling libraries 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
