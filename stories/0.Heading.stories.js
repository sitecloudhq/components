import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import Heading from '../src/components/Heading';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs]
};

export const heading = () => <Heading text="This is a header" />;
