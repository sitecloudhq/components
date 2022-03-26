import React from 'react';
import { Embed } from '..';

export default {
  title: 'Embed',
  component: Embed
};

export const embed = () => (
  <Embed
    source='https://docs.google.com/forms/d/e/1FAIpQLSfUTq8MhjMFssNeb-KXED4j1JQBNqpSCCZtLGN5y1ITbciiRA/viewform?embedded=true"'
    width="100%"
    height="680px"
  />
);
