import { action } from '@storybook/addon-actions';
import { CallStates } from '@storybook/instrumenter';
import { Subnav } from './Subnav';

export default {
  title: 'Addons/Interactions/Subnav',
  component: Subnav,
  args: {
    controls: {
      start: action('start'),
      back: action('back'),
      goto: action('goto'),
      dev: action('dev'),
      end: action('end'),
      rerun: action('rerun'),
    },
    controlStates: {
      debugger: true,
      start: true,
      back: true,
      goto: true,
      dev: false,
      end: false,
    },
    storyFileName: 'Subnav.stories.tsx',
    hasNext: true,
    hasPrevious: true,
  },
};

export const Pass = {
  args: {
    status: CallStates.DONE,
  },
};

export const Fail = {
  args: {
    status: CallStates.ERROR,
  },
};

export const Runs = {
  args: {
    status: CallStates.WAITING,
  },
};

export const AtStart = {
  args: {
    status: CallStates.WAITING,
    controlStates: {
      debugger: true,
      start: false,
      back: false,
      goto: true,
      dev: true,
      end: true,
    },
  },
};

export const Midway = {
  args: {
    status: CallStates.WAITING,
    controlStates: {
      debugger: true,
      start: true,
      back: true,
      goto: true,
      dev: true,
      end: true,
    },
  },
};

export const Locked = {
  args: {
    status: CallStates.ACTIVE,
    controlStates: {
      debugger: true,
      start: false,
      back: false,
      goto: false,
      dev: false,
      end: false,
    },
  },
};
