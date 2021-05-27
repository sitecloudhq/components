import React from 'react';

import { withKnobs, color, select, number, text } from '@storybook/addon-knobs';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const button = () => <Button value={text('value', 'Button')} />;
