import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Image } from '../image';
import { DogService } from '../dog.service';
import { Breed } from '../breed';

@Component({
  selector: 'app-doggo-gallery',
  templateUrl: './doggo-gallery.component.html',
  styleUrls: ['./doggo-gallery.component.css']
})
export class DoggoGalleryComponent implements OnInit {
  images$: Observable<Image[]>;
  breed: Breed;

  constructor(
    private route: ActivatedRoute,
    private service: DogService
  ) { }

  ngOnInit(): void {
    this.images$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getImages(10, +params.get('id')))
    );
  }
}
