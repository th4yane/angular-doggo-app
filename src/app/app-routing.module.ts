import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoggoHomeComponent } from './doggo-home/doggo-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DoggoHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
