import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailComponent } from './weather-detail.component';
import { CommunicationService } from 'src/app/services/communication.service';
import { WeatherService } from 'src/app/services/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;

  let communicationService: CommunicationService;
  let weatherService: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDetailComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
