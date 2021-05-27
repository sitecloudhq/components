import React from 'react';

import { withKnobs, select, number, text } from '@storybook/addon-knobs';
import Image from '../src/components/Image';

export default {
  title: 'Image',
  component: Image,
  decorators: [withKnobs]
};

export const image = () => (
  <Image image={text('url', 'https://placekitten.com/200/300')} />
);
