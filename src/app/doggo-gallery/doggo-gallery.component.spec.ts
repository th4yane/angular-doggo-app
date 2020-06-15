import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoGalleryComponent } from './doggo-gallery.component';

describe('DoggoGalleryComponent', () => {
  let component: DoggoGalleryComponent;
  let fixture: ComponentFixture<DoggoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
