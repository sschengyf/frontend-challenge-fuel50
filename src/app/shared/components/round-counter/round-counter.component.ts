import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-counter',
  templateUrl: './round-counter.component.html',
  styleUrls: ['./round-counter.component.scss'],
})
export class RoundCounterComponent implements OnInit {
  @Input() variant: 'red' | 'green' | undefined;
  @Input() figure: number | undefined;
  @Input() upOrDown: 'up' | 'down' | undefined;
  @Input() changeDiff: number | undefined;
  @Input() label: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
