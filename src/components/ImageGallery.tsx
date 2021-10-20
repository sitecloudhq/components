import React from 'react';
import styled, { css } from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const gridGallery = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 51vw;

  ${Image}:nth-child(1n) {
    grid-column: 1;
  }
  ${Image}:nth-child(2n) {
    grid-column: 2;
  }
  ${styleProps({
    gap: 'grid-gap'
  })};
`;

const irregularGallery = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 10vw;
  ${Image}:nth-child(odd) {
    grid-row: span 4;
  }
  ${Image}:nth-child(even) {
    grid-row: span 3;
  }
  ${styleProps({
    gap: 'grid-gap'
  })};
`;

const Container = styled.div`
  ${(props: any) => props.styled}
  ${(props: any) =>
    props.gallery == 'irregular' ? irregularGallery : gridGallery};
  ${styleProps({
    width: 'width',
    height: 'height',
    padding: 'padding',
    margin: 'margin'
  })}
`;

const ImageGallery: Component<{ images: { sources: string[] } }> = ({
  images,
  ...props
}) => (
  <Container {...props}>
    {images?.sources?.map((src) => (
      <Image src={src} />
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
  gap: {
    type: PropTypes.UnitValue,
    default: '10px',
    editor: {
      type: EditorTypes.UnitValue,
      options: [PropTypes.UnitValue.px]
    }
  },
  gallery: {
    type: PropTypes.Array,
    default: ['grid', 'irregular'],
    editor: EditorTypes.Combo
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
