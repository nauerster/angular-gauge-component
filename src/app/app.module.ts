import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GaugeComponent } from './gauge/gauge.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GaugeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
