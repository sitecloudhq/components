import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import { Row, Column, Image, Header, Heading, Text, Button } from '../src';

export default {
  title: 'Header'
};

export const header1 = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="left"
    backgroundColor="#DDDDDD"
    roundCorners="10px"
    width={['40%', '50%', '60%', '100%']}
  >
    <Heading
      font={[
        {
          family: 'Open Sans',
          style: 'normal',
          weight: 400,
          size: '42px'
        },
        {
          family: 'Open Sans',
          style: 'normal',
          weight: 400,
          size: '42px'
        },
        {
          family: 'Open Sans',
          style: 'normal',
          weight: 400,
          size: '22px'
        },
        {
          family: 'Open Sans',
          style: 'normal',
          weight: 400,
          size: '22px'
        }
      ]}
      margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
      color="#1A1A1A"
      value="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="#1A1A1A"
      value="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      value="Call to Action"
    />
  </Header>
);

export const header2 = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="center"
    backgroundColor="#DDDDDD"
    roundCorners="10px"
  >
    <Heading
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '42px' }}
      margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
      color="#1A1A1A"
      value="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="#1A1A1A"
      value="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      value="Call to Action"
    />
  </Header>
);

export const header3 = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="right"
    backgroundColor="#DDDDDD"
    roundCorners="10px"
  >
    <Heading
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '42px' }}
      margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
      color="#1A1A1A"
      value="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="#1A1A1A"
      value="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      value="Call to Action"
    />
  </Header>
);

export const header4 = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="left"
    backgroundColor="#DDDDDD"
    roundCorners="10px"
  >
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '34px' }}
      color="#1A1A1A"
      value="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      value="Call to Action"
    />
  </Header>
);

export const header5 = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="left"
    backgroundColor="#DDDDDD"
    roundCorners="10px"
    images={{
      sources: [
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
      ]
    }}
  >
    <Heading
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '42px' }}
      margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
      color="white"
      value="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="white"
      value="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      value="Call to Action"
    />
  </Header>
);

export const header6 = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="left"
    backgroundColor="#DDDDDD"
    roundCorners="10px"
    images={{
      sources: [
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
      ]
    }}
  >
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '34px' }}
      color="white"
      value="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      value="Call to Action"
    />
  </Header>
);

export const header7 = () => (
  <Header
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="left"
    width="100%"
  >
    <Row horizontal="center">
      <Column size={4}>
        <Image
          style={{ minHeight: '100%' }}
          image="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg"
        />
      </Column>
      <Column size={4} justifyContent="space around">
        <Text
          font={{
            family: 'Open Sans',
            style: 'normal',
            weight: 400,
            size: '34px'
          }}
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          color="black"
          value="Proactively envisioned multimedia based expertise and cross-media growth strategies."
        />
        <Button
          padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
          color="white"
          backgroundColor="#433F3F"
          value="Call to Action"
        />
      </Column>
    </Row>
  </Header>
);

export const header_with_slideshow = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    slideSpeed={5}
    transitionSpeed={1}
    alignment="left"
    images={{
      sources: [
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg',
        'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzE1Mzk0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
      ]
    }}
  >
    <Heading
      margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
      color="white"
      value="This is a header"
    />
    <Text color="white" value="This is a paragraph" />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      value="Call to Action"
    />
  </Header>
);
