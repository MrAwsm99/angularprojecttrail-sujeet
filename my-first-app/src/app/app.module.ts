import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { CoffeeheaderComponent } from './coffeeheader/coffeeheader.component';
import { CoffeecarouselComponent } from './coffeecarousel/coffeecarousel.component';
import { CoffeefooterComponent } from './coffeefooter/coffeefooter.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MycompComponent,
    CoffeeheaderComponent,
    CoffeecarouselComponent,
    CoffeefooterComponent,
    TwowaydatabindingComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
