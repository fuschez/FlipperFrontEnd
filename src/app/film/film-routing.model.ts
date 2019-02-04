import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { FilmComponent } from './film.component';

const routes: Routes = [
  {
    path: '',
    component: FilmComponent,
    data: {
      title: 'Film' 
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  //ciao
})
export class FilmRoutingModule {}