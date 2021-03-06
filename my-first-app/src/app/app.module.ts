import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { DatetimeService } from './datetime.service'
import { UserinformationService } from './userinformation.service';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component'

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
    ProductComponent,
    ReactiveFormsExampleComponent,
    ReactiveAddressFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatetimeService, UserinformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }