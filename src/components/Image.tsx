import React from 'react';
import styled from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.img`
  ${(props: any) => props.styled}
  object-fit: ${(props: any) => (props.resize ? props.resize : 'cover')};
  border: ${({ borderColor, borderWidth }: any) =>
    borderColor && borderWidth
      ? `${borderWidth} solid ${borderColor}`
      : 'none'};
  box-shadow: ${({
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    blur,
    spread
  }: any) =>
    shadowColor
      ? `${shadowHorizontal} ${shadowVertical} ${blur} ${spread} ${shadowColor}`
      : 'none'};

  ${styleProps({
    opacity: 'opacity',
    roundCorners: 'border-radius',
    width: 'width',
    height: 'height',
    padding: 'padding',
    margin: 'margin'
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
    type: PropTypes.UnitValue,
    default: '100%',
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
  },
  aspect: {
    opacity: {
      type: PropTypes.UnitValue,
      default: '100%',
      editor: EditorTypes.Slider
    },
    roundCorners: {
      type: PropTypes.UnitValue,
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
        type: PropTypes.UnitValue,
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
        type: PropTypes.UnitValue,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Horizontal'
        }
      },
      shadowVertical: {
        type: PropTypes.UnitValue,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Vertical'
        }
      },
      blur: {
        type: PropTypes.UnitValue,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Blur'
        }
      },
      spread: {
        type: PropTypes.UnitValue,
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
