import React from 'react';
import { Row, Column } from '..';

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
