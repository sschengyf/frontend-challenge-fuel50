import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';

export interface Activity {
  name: string;
  figure: number;
  diff: number;
  upOrDown: 'up' | 'down';
  variant: 'red' | 'green';
}

@Injectable({
  providedIn: ServicesModule,
})
export class OverviewService {
  constructor(private http: HttpClient) {}

  getUserOverview() {
    return this.http.get<{ activities: Activity[] }>('assets/mocks/overview.json');
  }
}
