import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import { Row, Column } from '../src';

export default {
  title: 'Flexbox'
};

export const flexbox = () => (
  <Row>
    <Column size={6}>Column A</Column>
    <Column size={3}>Column B</Column>
    <Column>Column C</Column>
  </Row>
);
