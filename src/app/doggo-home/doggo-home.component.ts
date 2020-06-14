import { Component, OnInit } from '@angular/core';

import {Image} from '../image';

import { DogService } from '../dog.service';

@Component({
  selector: 'app-doggo-home',
  templateUrl: './doggo-home.component.html',
  styleUrls: ['./doggo-home.component.css']
})
export class DoggoHomeComponent implements OnInit {

  public image: Image;

  constructor(private dogApiService: DogService){}

  ngOnInit(): void {
    this.dogApiService.getImages(1).subscribe(images => this.image = images[0]);
  }
}
