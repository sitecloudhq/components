import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import Main from '../src/components/Main';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
};

export const main = () => (
  <Main
    backgroundColor={color(
      'backgroundColor',
      Main.props.aspect.backgroundColor.defaultValue
    )}
    width={number('width', 100, { min: 0, max: 99 })}
    height={number('height', 100, { min: 0, max: 99 })}
  >
    Main section
  </Main>
);
