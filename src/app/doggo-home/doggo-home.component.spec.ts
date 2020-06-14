import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoHomeComponent } from './doggo-home.component';

describe('DoggoHomeComponent', () => {
  let component: DoggoHomeComponent;
  let fixture: ComponentFixture<DoggoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
