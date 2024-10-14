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
      options: ['default', 'small'],
    },
    tableColor: {
      control: {
        type: 'select'
      },
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
  },
  args: {
    size: 'default',
    tableColor: 'default'
  }
};

export const Table = (args) => createTable(args);
