import React from 'react';
import styled from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.div`
  ${(props: any) => props.styled}
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  ${styleProps({
    width: 'width',
    height: 'height',
    padding: 'padding',
    margin: 'margin'
  })}
`;

const Image = styled.img`
  margin: 10px;
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

const ImageGallery: Component<{ images: string[] }> = ({
  images,
  ...props
}) => (
  <Container {...props}>
    {images.map((image) => (
      <Image src={image} />
    ))}
  </Container>
);

ImageGallery.paddable = true;
ImageGallery.canReceive = [];
ImageGallery.props = {
  images: {
    type: PropTypes.Array,
    default: [],
    editor: EditorTypes.ImageGallery
  },
  width: {
    type: PropTypes.UnitValue,
    default: 'auto',
    editor: {
      type: EditorTypes.UnitValue,
      options: [
        PropTypes.UnitValue.px,
        PropTypes.UnitValue.percentage,
        PropTypes.UnitValue.auto
      ]
    }
  },
  height: {
    type: PropTypes.UnitValue,
    default: 'auto',
    editor: {
      type: EditorTypes.UnitValue,
      options: [
        PropTypes.UnitValue.px,
        PropTypes.UnitValue.percentage,
        PropTypes.UnitValue.auto
      ]
    }
  },
  padding: {
    type: PropTypes.Rect,
    default: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    editor: EditorTypes.Rect
  },
  margin: {
    type: PropTypes.Rect,
    default: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    editor: EditorTypes.Rect
  }
};

ImageGallery.icon = <Icon size="1.4rem" />;

export default ImageGallery;
