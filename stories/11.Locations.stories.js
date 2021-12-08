import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import { Location, Text } from '../src';

export default {
  title: 'Location'
};

export const location1 = () => (
  <Location
    width="50vw"
    height="50vh"
    padding={{ top: 50, left: 20, bottom: 50, right: 20 }}
    borderWidth="1px"
    borderColor="#DDDDDD"
    location="Eiffel Tower, Paris France"
  >
    <Text
      width="100%"
      lineHeight="130%"
      textAlign="left"
      margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
      font={{ family: 'Open Sans', style: 'normal', weight: 600, size: '20px' }}
      color="#1A1A1A"
      value="Kitchen Restaurant Inc."
    />
    <Text
      width="100%"
      lineHeight="130%"
      margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
      font={{ family: 'Open Sans', style: 'normal', weight: 300, size: '20px' }}
      color="#1A1A1A"
      value="(555) - 122222"
    />

    <Text
      width="100%"
      lineHeight="130%"
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '20px' }}
      color="#1A1A1A"
      value="New Line St 23 - San Francisco"
    />
  </Location>
);

export const location2 = () => (
  <Location
    width="90%"
    height="50vw"
    padding={{ top: 50, left: 20, bottom: 50, right: 20 }}
    backgroundColor="#DDDDDD"
    location="Eiffel Tower, Paris France"
  >
    <Text
      width="100%"
      lineHeight="130%"
      textAlign="left"
      margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
      font={{ family: 'Open Sans', style: 'normal', weight: 600, size: '20px' }}
      color="#1A1A1A"
      value="Kitchen Restaurant Inc."
    />
    <Text
      width="100%"
      lineHeight="130%"
      margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
      font={{ family: 'Open Sans', style: 'normal', weight: 300, size: '20px' }}
      color="#1A1A1A"
      value="(555) - 122222"
    />

    <Text
      width="100%"
      lineHeight="130%"
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '20px' }}
      color="#1A1A1A"
      value="New Line St 23 - San Francisco"
    />
  </Location>
);
