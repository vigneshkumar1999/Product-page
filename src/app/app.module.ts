
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './state/app/app.reducer';
import{HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component'
import { EffectsModule } from '@ngrx/effects';
import { productEffect } from './state/product/product.effect';
import { productsReducer } from './state/product/product.reducer';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({appState: loginReducer ,productState:productsReducer}),
    EffectsModule.forRoot([productEffect]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
