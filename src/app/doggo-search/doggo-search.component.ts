import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { Breed } from '../breed';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doggo-search',
  templateUrl: './doggo-search.component.html',
  styleUrls: ['./doggo-search.component.css']
})
export class DoggoSearchComponent {
  breed: Breed;
  searching = false;
  searchFailed = false;

  constructor(private service: DogService, private router: Router) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.service.searchBreed(term).pipe(
          tap(() => this.searchFailed = false))
      ),
      tap(() => this.searching = false)
    )

  formatter = (item: Breed) => (item.name);

  gotoGallery(): void {
    if (this.breed != null) {
      this.router.navigate([`/gallery/${this.breed.id}`]);
    }
    
  }
}
