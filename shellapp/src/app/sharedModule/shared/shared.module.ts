import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

//this module is used for styling libraries 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class SharedModule { }
