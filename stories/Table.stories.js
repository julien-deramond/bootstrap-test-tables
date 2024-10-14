import { createTable } from './Table';

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
      options: ['small', 'default'],
    },
  },
  args: {
    size: 'default',
  }
};

export const Table = (args) => createTable(args);
