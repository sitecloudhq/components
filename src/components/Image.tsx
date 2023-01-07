import React from 'react';
import styled from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.img`
  ${(props: any) => props.styled}
  object-fit: ${(props: any) => (props.resize ? props.resize : 'cover')};

  ${({ borderWidth, borderColor }: any) =>
    borderWidth || borderColor ? `border-style: solid` : null};

  box-shadow: ${({
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowBlur,
    shadowSpread
  }: any) =>
    shadowColor
      ? `${shadowHorizontal} ${shadowVertical} ${shadowBlur} ${shadowSpread} ${shadowColor}`
      : 'none'};

  ${styleProps({
    opacity: 'opacity',
    roundCorners: 'border-radius',
    width: 'width',
    height: 'height',
    padding: 'padding',
    margin: 'margin',
    borderWidth: 'border-width',
    borderColor: 'border-color'
  })}
`;

const DEFAULT_IMAGE = '/default-image.png';

const Image: Component<{ image: string }> = ({ image, ...props }) => (
  <Container {...props} src={image || DEFAULT_IMAGE} />
);

Image.paddable = true;
Image.canReceive = [];
Image.props = {
  image: {
    type: PropTypes.String,
    default: DEFAULT_IMAGE,
    editor: EditorTypes.Image
  },
  resize: {
    type: PropTypes.Array,
    default: ['contain', 'cover'],
    editor: EditorTypes.Combo
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
  aspect: {
    opacity: {
      type: PropTypes.Length,
      default: '100%',
      editor: EditorTypes.Slider
    },
    roundCorners: {
      type: PropTypes.Length,
      default: '0px',
      editor: EditorTypes.Slider
    },
    border: {
      borderColor: {
        type: PropTypes.Color,
        default: 'black',
        editor: {
          type: EditorTypes.Color,
          title: 'Border',
          root: true
        },
        required: false,
        enabled: false
      },
      borderWidth: {
        type: PropTypes.Length,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Border Width'
        }
      }
    },
    shadow: {
      shadowColor: {
        type: PropTypes.Color,
        default: 'black',
        editor: {
          type: EditorTypes.Color,
          title: 'Shadow',
          root: true
        },
        required: false,
        enabled: false
      },
      shadowHorizontal: {
        type: PropTypes.Length,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Horizontal'
        }
      },
      shadowVertical: {
        type: PropTypes.Length,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Vertical'
        }
      },
      shadowBlur: {
        type: PropTypes.Length,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Blur'
        }
      },
      shadowSpread: {
        type: PropTypes.Length,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Spread'
        }
      }
    }
  }
};

Image.icon = <Icon size="1.4rem" />;

export default Image;
