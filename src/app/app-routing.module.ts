import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POLITECNICOComponent } from './politecnico/politecnico.component';
import { CharacterComponent } from './character/character.component';
import { MoviesComponent } from './movies/movies.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { starshipsComponent } from './starships/starships.component';
import { speciesComponent } from './species/species.component';
import { vehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: 'home', component: POLITECNICOComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'movies', component: MoviesComponent  },
  { path: 'pelis', component:PeliculasComponent},
  { path: 'person', component:PersonajesComponent},
  { path: 'planet', component:PlanetasComponent},
  { path: 'starships', component:starshipsComponent},
  { path: 'species', component:speciesComponent},
  { path: 'vehicles', component:vehiclesComponent}


  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
