import React from 'react';

import { withKnobs, color, select, number, text } from '@storybook/addon-knobs';
import Link from '../src/components/Link';

export default {
  title: 'Link',
  component: Link,
  decorators: [withKnobs]
};

export const link = () => (
  <Link to={text('to', '/')} value={text('value', 'Link')} />
);
