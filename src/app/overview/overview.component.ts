import { Component, OnInit } from '@angular/core';
import { OverviewService, Activity } from '../core/services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private overview: OverviewService) {}

  ngOnInit(): void {
    this.overview.getUserOverview().subscribe(data => (this.activities = data.activities));
  }
}
