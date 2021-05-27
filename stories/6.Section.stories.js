import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import Section from '../src/components/Section';

export default {
  title: 'Section',
  component: Section,
  decorators: [withKnobs]
};

export const section = () => <Section>This is a section</Section>;
