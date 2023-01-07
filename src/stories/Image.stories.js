import React from 'react';
import { Image } from '..';

export default {
  title: 'Image',
  component: Image
};

export const image = () => <Image image="https://placekitten.com/200/300" />;

export const imageWithShadow = () => (
  <Image
    image="https://placekitten.com/200/300"
    shadowColor="black"
    shadowHorizontal="10px"
    shadowVertical="10px"
    shadowBlur="10px"
    shadowSpread="2px"
  />
);
