import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductComponent } from './components/product/product.component';
import {SelectComponent} from "../shared/components/select/select.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent
    ],
    exports: [
        //ProductComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterLink
  ]
})
export class ProductsModule { }
