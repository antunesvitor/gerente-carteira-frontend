import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgApexchartsModule } from "ng-apexcharts";

import { AppComponent } from './app.component';
import { GraficoPatrimonioComponent } from './grafico-patrimonio/grafico-patrimonio.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoPatrimonioComponent 
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
