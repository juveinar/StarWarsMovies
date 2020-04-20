import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { PoliComponent } from './poli/poli.component';
=======
>>>>>>> 577e1963cc2f0a30ca96b9b950d2b28e05991186

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    PoliComponent
=======
    HomeComponent
>>>>>>> 577e1963cc2f0a30ca96b9b950d2b28e05991186
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
