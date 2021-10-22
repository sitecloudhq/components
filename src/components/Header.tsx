import React from 'react';
import styled, { css } from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Image = styled.img`
  object-fit: cover;
  flex: 0 0 100%;
  width: 100%;
`;

const animation = (
  slides: number,
  slideSpeed: number,
  transitionSpeed: number
) => {
  const slidePct = 100 / (slides - 1);
  const secPct = slidePct / (transitionSpeed + slideSpeed);
  const transPct = transitionSpeed * secPct;
  return css`
    ${Array.from(Array(slides).keys())
      .map((_, slide) => {
        if (slide == 0) {
          return `0% { left: 0%; }`;
        } else {
          const currentSlidePct = (slide / (slides - 1)) * 100;
          return `${currentSlidePct - transPct}% { left: -${
            (slide - 1) * 100
          }%;  }
                  ${currentSlidePct}% { left: -${slide * 100}%;  }`;
        }
      })
      .join('')}
  `;
};

const SlideShow = styled.div<{
  slides: number;
  slideSpeed: number;
  transitionSpeed: number;
}>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -2;
  animation: ${(props) =>
    `slideshow ${
      props.slides * (props.slideSpeed + props.transitionSpeed)
    }s linear infinite`};
  ${(props: any) =>
    props?.slides > 1
      ? `@keyframes slideshow { ${animation(
          props.slides + 1,
          props.slideSpeed,
          props.transitionSpeed
        )}}`
      : null};
`;

const Container = styled.header`
  ${(props: any) => props.styled}
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${styleProps({
    width: 'width',
    height: 'height',
    padding: 'padding',
    margin: 'margin'
  })}
`;

const DEFAULT_SLIDE_SPEED = 5;
const DEFAULT_TRANSITION_SPEED = 2;

const Header: Component<{
  images: { sources: string[] };
  slideSpeed: number;
  transitionSpeed: number;
}> = ({
  children,
  images,
  slideSpeed = DEFAULT_SLIDE_SPEED,
  transitionSpeed = DEFAULT_TRANSITION_SPEED,
  ...props
}) => (
  <Container {...props}>
    <SlideShow
      slides={images?.sources?.length}
      slideSpeed={slideSpeed}
      transitionSpeed={transitionSpeed}
    >
      {images?.sources?.map((src) => (
        <Image src={src} />
      ))}
      {images?.sources?.length > 1 ? <Image src={images.sources[0]} /> : null}
    </SlideShow>
    {children}
  </Container>
);

Header.paddable = true;
Header.canReceive = [];
Header.props = {
  images: {
    type: PropTypes.Array,
    default: [],
    editor: EditorTypes.ImageGallery
  },
  slideSpeed: {
    type: PropTypes.Number,
    default: DEFAULT_SLIDE_SPEED,
    editor: EditorTypes.Slider
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

Header.icon = <Icon size="1.4rem" />;

export default Header;
