import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatrimonioModule } from './patrimonio/patrimonio.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    PatrimonioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
