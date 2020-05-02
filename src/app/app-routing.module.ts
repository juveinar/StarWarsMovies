import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POLITECNICOComponent } from './politecnico/politecnico.component';
import { CharacterComponent } from './character/character.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'home', component: POLITECNICOComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'movies', component: MoviesComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
