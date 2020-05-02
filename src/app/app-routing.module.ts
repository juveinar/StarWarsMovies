import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POLITECNICOComponent } from './politecnico/politecnico.component';
import { CharacterComponent } from './character/character.component';
import { MoviesComponent } from './movies/movies.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetasComponent } from './planetas/planetas.component';


const routes: Routes = [
  { path: 'home', component: POLITECNICOComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'movies', component: MoviesComponent  },
  {path: 'pelis', component:PeliculasComponent},
    {path: 'person', component:PersonajesComponent},  
  {path: 'planet', component:PlanetasComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
