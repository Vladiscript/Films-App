import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'favorites', component: FilmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
