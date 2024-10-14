import { createTable } from './Table';
import { sizes, tableColors } from '../stories/Table.const';

export default {
  title: 'Example/Table',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: sizes,
    },
    tableColor: {
      control: {
        type: 'select'
      },
      options: tableColors,
    },
  },
  args: {
    size: 'default',
    tableColor: 'default'
  }
};

export const Table = (args) => createTable(args);
