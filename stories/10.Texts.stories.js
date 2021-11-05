import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import { Row, Column, Image, Header, Heading, Text, Button } from '../src';

export default {
  title: 'Text'
};

const value =
  'Proactively envisioned multimedia based expertise and cross-media growth strategies.<br/><br/>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.';

export const text1 = () => (
  <Text
    lineHeight="130%"
    font={{ family: 'Open Sans', style: 'normal', weight: 300, size: '20px' }}
    color="#1A1A1A"
    padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
    backgroundColor="#DDDDDD"
    value={value}
  />
);

export const text2 = () => (
  <Text
    lineHeight="130%"
    font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '20px' }}
    color="#1A1A1A"
    padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
    value={value}
  />
);

export const text3 = () => (
  <Text
    lineHeight="130%"
    font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '20px' }}
    color="#1A1A1A"
    padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
    borderColor="#D0D0D0"
    borderWidth="1px"
    value={value}
  />
);
