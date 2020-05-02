import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POLITECNICOComponent } from './politecnico/politecnico.component';

const routes: Routes = [
  { path: 'home', component: POLITECNICOComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
