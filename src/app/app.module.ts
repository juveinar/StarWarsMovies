import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { POLITECNICOComponent } from './politecnico/politecnico.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpClientModule} from '@angular/common/http';
import { CharacterComponent } from './character/character.component';
import { MoviesComponent } from './movies/movies.component';
import { MenuComponent } from './menu/menu.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { starshipsComponent } from './starships/starships.component';
import { speciesComponent } from './species/species.component';


@NgModule({
  declarations: [
    AppComponent,
    POLITECNICOComponent,
    MenuComponent,
    PeliculasComponent,
    PersonajesComponent,
    PlanetasComponent,
    starshipsComponent,
    speciesComponent,


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
