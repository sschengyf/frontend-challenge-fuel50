import { Story, Meta } from '@storybook/angular/types-6-0';
import { RoundCounterComponent } from './round-counter.component';
import * as notes from './round-counter.notes.md';

export default {
  title: 'Components/RoundCounter',
  component: RoundCounterComponent,
  parameters: {
    notes
  }
} as Meta;

const Template: Story<RoundCounterComponent> = (args: RoundCounterComponent) => ({
  component: RoundCounterComponent,
  props: args,
});

export const Red = Template.bind({});
Red.args = {
  variant: 'red',
  figure: 184,
  upOrDown: 'down',
  changeDiff: 30,
  label: 'Cats video watched',
};

export const Green = Template.bind({});
Green.args = {
  variant: 'green',
  figure: 1841,
  upOrDown: 'up',
  changeDiff: 30,
  label: 'Runnings in this month',
};
