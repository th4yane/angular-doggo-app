import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from './error.interceptor';
import { DoggoHomeComponent } from './doggo-home/doggo-home.component';
import { DoggoBreedComponent } from './doggo-breed/doggo-breed.component';
import { DoggoGalleryComponent } from './doggo-gallery/doggo-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    DoggoHomeComponent,
    DoggoBreedComponent,
    DoggoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
