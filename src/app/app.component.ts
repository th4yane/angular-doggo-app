import { Component, OnInit} from '@angular/core';
import { Image } from './image';

import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-doggo-app';

  public images: Image[];

  constructor(private dogApiService: DogService){}

  ngOnInit(): void {
    this.dogApiService.getImages(2).subscribe(images => this.images = images);
  }
}
