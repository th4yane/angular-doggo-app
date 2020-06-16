import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoggoHomeComponent } from './doggo-home/doggo-home.component';
import { DoggoGalleryComponent } from './doggo-gallery/doggo-gallery.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DoggoHomeComponent },
  { path: 'gallery/:id', component: DoggoGalleryComponent},
  { path: 'gallery', component: DoggoGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
