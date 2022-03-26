import React from 'react';
import { Row, Column, Image, Header, Heading, Text, Button } from '..';

export default {
  title: 'Header'
};

export const header1 = () => (
  <Header
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    alignment="left"
    backgroundColor="#DDDDDD"
    width="100%"
    contentWidth={['50%', '50%', '90%', '90%']}
  >
    <Heading
      font={{
        family: 'Open Sans',
        style: 'normal',
        weight: 400,
        size: '42px'
      }}
      margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
      color="#1A1A1A"
      text="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="#1A1A1A"
      text="Proactively envisioned multimedia based expertise and cross-media growth strategies.Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      text="Call to Action"
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
      text="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="#1A1A1A"
      text="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      text="Call to Action"
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
      text="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="#1A1A1A"
      text="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      text="Call to Action"
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
      text="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      text="Call to Action"
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
      text="Main headline"
    />
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      color="white"
      text="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      text="Call to Action"
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
        'https://cdn.sitecloud.net/pixabay.com/get/g3aedb404da648918f5a3e0a870882fb0f01296152e0c2a543277dd4247709364942e7d59977ab8efd3a32bd7684e6fdbf47edf24aaa5e006edbf0695b944fa41_1280.jpg'
      ]
    }}
  >
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '34px' }}
      color="white"
      text="Proactively envisioned multimedia based expertise and cross-media growth strategies."
    />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      backgroundColor="white"
      text="Call to Action"
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
          text="Proactively envisioned multimedia based expertise and cross-media growth strategies."
        />
        <Button
          padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
          color="white"
          backgroundColor="#433F3F"
          text="Call to Action"
        />
      </Column>
    </Row>
  </Header>
);

export const header_with_slideshow = () => (
  <Header
    width="100%"
    contentWidth="50%"
    height="40vw"
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    slideSpeed={5}
    transitionSpeed={1}
    alignment="left"
    images={{
      sources: [
        'https://cdn.sitecloud.net/pixabay.com/get/g3aedb404da648918f5a3e0a870882fb0f01296152e0c2a543277dd4247709364942e7d59977ab8efd3a32bd7684e6fdbf47edf24aaa5e006edbf0695b944fa41_1280.jpg',
        'https://cdn.sitecloud.net/pixabay.com/get/g795f0614121a04756a479d4b1186f3f82a24c415fc5ef340620650d155286c4967d10d11672e090992f70d3a086847df64b77ebeb14f7ec04e475e16195ee757_1280.jpg',
        'https://cdn.sitecloud.net/pixabay.com/get/g8c23c2c7ac37f4749ce41695ff73e0d2017838de9c058b254c899de560bbcd34774ac5e1435a5b9c32defdc25320852d3fbd5e3083217b6e7955ec6bd7e0d2d0_1280.jpg'
      ]
    }}
  >
    <Heading
      margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
      color="white"
      text="This is a header"
    />
    <Text color="white" text="This is a paragraph" />
    <Button
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      text="Call to Action"
    />
  </Header>
);
