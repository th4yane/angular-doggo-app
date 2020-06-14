import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoBreedComponent } from './doggo-breed.component';

describe('DoggoBreedComponent', () => {
  let component: DoggoBreedComponent;
  let fixture: ComponentFixture<DoggoBreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoBreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
