import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import { SelectComponent } from './components/select/select.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
    declarations: [
        HeaderComponent,
        SpinnerComponent,
        SelectComponent,
        FooterComponent
    ],
    exports: [
      HeaderComponent,
      SpinnerComponent,
      SelectComponent,
      FooterComponent,
      FormsModule
    ],
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
