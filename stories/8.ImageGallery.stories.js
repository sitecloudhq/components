import React from 'react';

import { withKnobs, color, number } from '@storybook/addon-knobs';
import { ImageGallery } from '../src';

export default {
  title: 'Image gallery'
};

export const image_gallery = () => (
  <>
    <div style={{ height: '100vh' }}>Scroll down</div>
    <ImageGallery
      padding={{ top: 0, left: 0, bottom: 0, right: 0 }}
      gap="15px"
      gallery="irregular"
      width="100%"
      images={{
        sources: [
          'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg',
          'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzE1Mzk0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg',
          'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg',
          'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg',
          'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg',
          'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg',
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
        ]
      }}
    />
  </>
);
