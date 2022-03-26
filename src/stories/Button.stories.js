import React from 'react';
import { Button } from '..';

export default {
  title: 'Button',
  component: Button
};

export const button = () => (
  <Button text="Press me" borderColor="black" borderWidth="1px" />
);
