import React from 'react';
import { Image, Link } from '..';

export default {
  title: 'Link',
  component: Link
};

export const link = () => <Link link="/" text="Link" />;

export const linkWithChildren = () => (
  <Link link="/" text="Link">
    <Image image="https://placekitten.com/200/300" />
  </Link>
);
