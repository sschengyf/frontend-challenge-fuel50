import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-counter',
  templateUrl: './round-counter.component.html',
  styleUrls: ['./round-counter.component.scss'],
})
export class RoundCounterComponent implements OnInit {
  @Input() variant: 'red' | 'green' = 'red';
  @Input() figure: number = 0;
  @Input() upOrDown: 'up' | 'down' = 'up';
  @Input() changeDiff: number = 0;
  @Input() label: string = '';
  readonly iconMapping = {
    up: 'arrow_upward',
    down: 'arrow_downward',
  };

  constructor() {}

  ngOnInit(): void {}
}
