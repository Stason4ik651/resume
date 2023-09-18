import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-analog-watch',
  templateUrl: './analog-watch.component.html',
  styleUrls: ['./analog-watch.component.css'],
})
export class AnalogWatchComponent implements OnInit, OnDestroy {
  constructor(public readonly dateService: DateService) {}

  ngOnInit() {
    this.dateService.startClock();
  }

  ngOnDestroy(): void {
    this.dateService.stopClock();
  }
}
