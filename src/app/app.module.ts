import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {SliderModule} from "primeng/slider";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {MenubarModule} from "primeng/menubar";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { ConverterCardComponent } from './components/converter-card/converter-card.component';
import {CardModule} from "primeng/card";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ListboxModule} from "primeng/listbox";
import { CurrencyItemComponent } from './components/currency-item/currency-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterCardComponent,
    CurrencyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SliderModule,
    FormsModule,
    InputNumberModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    ListboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
