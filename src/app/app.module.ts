import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {AllProductsComponent} from "./products/components/all-products/all-products.component";
import {ProductsDetailsComponent} from "./products/components/products-details/products-details.component";
import {CardComponent} from "./cards/components/card/card.component";
import {ProductsModule} from "./products/products.module";
import { InscriptionComponent } from './inscr/components/inscription/inscription.component';
import {CardsModule} from "./cards/cards.module";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {LoginComponent} from "./inscr/components/login/login.component";




const routes: Routes = [
  {path: "products", component:AllProductsComponent},
  {path: "details/:id", component:ProductsDetailsComponent},
  {path: "cart", component:CardComponent},
  {path:"SignUp", component:InscriptionComponent},
  {path:"SignIn", component:LoginComponent},
  {path: "**", redirectTo:"products", pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    CardsModule,
    SharedModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBoLJF4OzhsMcwN9UA7L5luopTgyJ3Zc48",
      authDomain: "ecommerce-b2256.firebaseapp.com",
      projectId: "ecommerce-b2256",
      storageBucket: "ecommerce-b2256.appspot.com",
      messagingSenderId: "572668641097",
      appId: "1:572668641097:web:bc6955a7b4924a5e19e498",
      measurementId: "G-QCS1GQKY65"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
