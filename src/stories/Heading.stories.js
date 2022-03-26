import React from 'react';
import { Button } from '@storybook/react/demo';
import { Heading } from '..';

export default {
  title: 'Heading',
  component: Heading
};

export const heading = () => <Heading text="This is a header" />;
