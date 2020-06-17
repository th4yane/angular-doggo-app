import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoSearchComponent } from './doggo-search.component';

describe('DoggoSearchComponent', () => {
  let component: DoggoSearchComponent;
  let fixture: ComponentFixture<DoggoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
