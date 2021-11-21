import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';
import FadeIn from './FadeIn';

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
  grid-auto-rows: ${(props: any) =>
    props.height ? `minmax(auto, ${props.height})` : '3vw'};

  ${Image}:nth-child(odd) {
    grid-row: span 3;
  }
  ${Image}:nth-child(even) {
    grid-row: span 2;
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
    padding: 'padding',
    margin: 'margin'
  })}
`;

const FullScreenOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: ${(props: any) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-duration: 0.2s;
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FullScreenImage = styled.img`
  width: 90vw;
  height: 90vh;
  object-fit: cover;
`;

const ImageGallery: Component<{ images: { sources: string[] } }> = ({
  images,
  ...props
}) => {
  const [openImage, setOpenImage] = useState<string | undefined>(undefined);
  return (
    <FadeIn>
      <Container {...props}>
        {images?.sources?.map((src, idx) => (
          <Image
            key={`img-${idx}`}
            src={src}
            onClick={() => setOpenImage(src)}
          />
        ))}
      </Container>
      <FullScreenOverlay
        onClick={() => setOpenImage(undefined)}
        visible={!!openImage}
      >
        <FullScreenImage src={openImage} />
      </FullScreenOverlay>
    </FadeIn>
  );
};

ImageGallery.paddable = true;
ImageGallery.canReceive = [];
ImageGallery.props = {
  images: {
    type: PropTypes.Array,
    default: [],
    editor: EditorTypes.ImageGallery
  },
  gap: {
    type: PropTypes.Length,
    default: '10px',
    editor: {
      type: EditorTypes.Length,
      options: [PropTypes.Length.px]
    }
  },
  gallery: {
    type: PropTypes.Array,
    default: ['grid', 'irregular'],
    editor: {
      type: EditorTypes.Combo,
      title: 'Gallery Type'
    }
  },
  width: {
    type: PropTypes.Length,
    default: 'auto',
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh,
        PropTypes.Length.auto
      ]
    }
  },
  height: {
    type: PropTypes.Length,
    default: 'auto',
    editor: {
      type: EditorTypes.Length,
      title: 'Row Height',
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh,
        PropTypes.Length.auto
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
