import { switchMap, startWith, delay } from 'rxjs/operators';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';

import { Image } from '../image';
import { DogService } from '../dog.service';
import { Breed } from '../breed';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-doggo-gallery',
  templateUrl: './doggo-gallery.component.html',
  styleUrls: ['./doggo-gallery.component.css']
})
export class DoggoGalleryComponent implements OnInit {
  images$: Observable<Image[]>;
  breed$: Observable<Breed>;

  constructor(
    private route: ActivatedRoute,
    private service: DogService
  ) { }

  ngOnInit(): void {
    this.images$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        if (id != null) {
          this.breed$ = this.service.getBreed(id);
          return this.service.getImages(10, id);
        } else {
          return this.service.getImages(10, id);
        }
      })
    );

  }

}
