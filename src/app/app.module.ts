import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { POLITECNICOComponent } from './politecnico/politecnico.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    POLITECNICOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
