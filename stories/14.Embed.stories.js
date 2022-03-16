import React from 'react';
import { withKnobs, color, select, number, text } from '@storybook/addon-knobs';
import { Embed } from '../src';

export default {
  title: 'Embed',
  component: Embed,
  decorators: [withKnobs]
};

export const embed = () => (
  <Embed
    source={text(
      'source',
      'https://docs.google.com/forms/d/e/1FAIpQLSfUTq8MhjMFssNeb-KXED4j1JQBNqpSCCZtLGN5y1ITbciiRA/viewform?embedded=true"'
    )}
    width="100%"
    height="680px"
  />
);
