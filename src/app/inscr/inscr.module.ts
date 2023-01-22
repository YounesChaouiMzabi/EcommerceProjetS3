import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule

  ]
})
export class InscrModule { }
