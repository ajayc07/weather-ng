import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCitiesComponent } from './favourite-cities.component';

describe('FavouriteCitiesComponent', () => {
  let component: FavouriteCitiesComponent;
  let fixture: ComponentFixture<FavouriteCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteCitiesComponent]
    });
    fixture = TestBed.createComponent(FavouriteCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
