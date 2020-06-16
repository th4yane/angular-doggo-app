import { Component, OnInit, Input } from '@angular/core';
import { Breed } from '../breed';

@Component({
  selector: 'app-doggo-breed',
  templateUrl: './doggo-breed.component.html',
  styleUrls: ['./doggo-breed.component.css']
})
export class DoggoBreedComponent implements OnInit {

  @Input() breed: Breed;
  @Input() seeMore: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
