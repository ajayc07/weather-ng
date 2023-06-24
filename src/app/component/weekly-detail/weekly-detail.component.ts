import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-detail',
  templateUrl: './weekly-detail.component.html',
  styleUrls: ['./weekly-detail.component.scss']
})
export class WeeklyDetailComponent implements OnInit, OnChanges {

  @Input() weeklyForeCastData: Array<any> = [];

  public nextFourDayForecast: Array<any> = [];

  ngOnChanges(changes: SimpleChanges) {
    this.nextFourDayForecast = [];
    this.setWeeklyData();
  }

  ngOnInit(): void {
    this.nextFourDayForecast = [];
  }


  public setWeeklyData(): void {
    for (let index = 1; index < 6; index++) {
      this.nextFourDayForecast.push(
        this.weeklyForeCastData?.find(data => data?.day === index)
      )
    }
  }

}
