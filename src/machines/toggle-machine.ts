import { createMachine } from 'xstate';

export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      // targetを省略しない記述方法
      on: { click : { target: 'Active' } }
    },
    Active: {
      // targetを省略した記述方法
      on: { click: 'Inactive' },
    },
  },
});