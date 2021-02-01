import { Component, OnInit } from '@angular/core';

interface Activity {
  name: string;
  figure: number;
  diff: number;
  upOrDown: 'up' | 'down';
  variant: 'red' | 'green';
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  readonly activities: Activity[] = [
    {
      name: 'Cat video watched',
      figure: 1001,
      diff: 80,
      upOrDown: 'down',
      variant: 'red'
    },
    {
      name: 'Slices of pizza',
      figure: 5,
      diff: 2,
      upOrDown: 'up',
      variant: 'green'
    },
    {
      name: 'Favorite songs beginning with the letter A',
      figure: 1324,
      diff: 23,
      upOrDown: 'up',
      variant: 'green'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
