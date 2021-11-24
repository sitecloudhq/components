import React from 'react';
import styled, { css } from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';
import { Component } from '../Component';
import { EditorTypes, PropTypes } from '../types';
import { styleProps } from '../utils';

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

const Container = styled.header<{ width?: string | string[] }>`
  ${(props: any) => props.styled}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${styleProps({
    width: 'width',
    height: 'min-height',
    padding: 'padding',
    margin: 'margin',
    backgroundColor: 'background-color',
    roundCorners: 'border-radius'
  })}
`;

const Content = styled.div<{
  alignment?: string | string[];
  width?: string | string[];
}>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align ${(props) => (props.alignment ? props.alignment : 'left')};
  align-items: ${(props) =>
    props.alignment === 'left'
      ? 'flex-start'
      : props.alignment === 'right'
      ? 'flex-end'
      : 'center'};
  ${styleProps({
    width: 'max-width'
  })};
`;

const DEFAULT_SLIDE_SPEED = 5;
const DEFAULT_TRANSITION_SPEED = 2;

const Header: Component<{
  images: { sources: string[] };
  slideSpeed: number;
  transitionSpeed: number;
  alignment: string;
  contentWidth?: string | string[];
  width?: string | string[];
}> = ({
  children,
  images,
  slideSpeed = DEFAULT_SLIDE_SPEED,
  transitionSpeed = DEFAULT_TRANSITION_SPEED,
  alignment,
  width = '100%',
  contentWidth = '50%',
  ...props
}) => (
  <Container width={width} {...props}>
    {images && (
      <SlideShow
        slides={images?.sources?.length}
        slideSpeed={slideSpeed}
        transitionSpeed={transitionSpeed}
      >
        {images?.sources?.map((src, idx) => (
          <Image src={src} key={src + idx} />
        ))}
        {images?.sources?.length > 1 ? <Image src={images.sources[0]} /> : null}
      </SlideShow>
    )}
    <Content width={contentWidth} alignment={alignment}>
      {children}
    </Content>
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
    type: PropTypes.Length,
    default: '50%',
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
  contentWidth: {
    type: PropTypes.Length,
    default: '50%',
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
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    },
    editor: EditorTypes.Rect
  },
  margin: {
    type: PropTypes.Rect,
    default: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    },
    editor: EditorTypes.Rect
  },
  alignment: {
    type: PropTypes.Array,
    default: ['center', 'left', 'right'],
    editor: EditorTypes.Combo
  },
  aspect: {
    roundCorners: {
      type: PropTypes.Length,
      default: '0px',
      editor: EditorTypes.Slider
    },
    backgroundColor: {
      type: PropTypes.Color,
      default: 'black',
      editor: EditorTypes.Color,
      required: false,
      enabled: false
    }
  }
};

Header.icon = <Icon size="1.4rem" />;

export default Header;
