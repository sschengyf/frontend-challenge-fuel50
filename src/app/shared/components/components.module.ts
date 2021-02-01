import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundCounterComponent } from './round-counter/round-counter.component';

@NgModule({
  declarations: [RoundCounterComponent],
  imports: [CommonModule],
  exports: [RoundCounterComponent],
})
export class ComponentsModule {}
