import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import Container from '../src/components/Container';

export default {
  title: 'Container',
  component: Container,
  decorators: [withKnobs]
};

export const container = () => <Container>Flexbox container</Container>;
