import { createTable } from './Table';
import { sizes, tableColors, trTableColors } from '../stories/Table.const';

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
    trTableColor: {
      control: {
        type: 'select'
      },
      options: trTableColors,
    },
  },
  args: {
    size: 'default',
    tableColor: 'default',
    trTableColor: 'default',
  }
};

export const Table = (args) => createTable(args);
