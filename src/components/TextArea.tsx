import React from 'react';
import styled from 'styled-components';
import { Square } from 'styled-icons/fa-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.textarea<{
  containerWidth?: string | string[];
}>`
  ${(props: any) => props.styled}
  &:hover {
    cursor: pointer;
  }
  resize: vertical;
  border: ${({ borderColor, borderWidth }: any) =>
    borderColor && borderWidth
      ? `${borderWidth} solid ${borderColor}`
      : 'none'};
  ${styleProps({
    containerWidth: 'width',
    opacity: 'opacity',
    textAlign: 'text-align',
    font: 'font',
    color: 'color',
    backgroundColor: 'background-color',
    padding: 'padding',
    margin: 'margin',
    roundCorners: 'border-radius'
  })}
`;

const TextArea: Component<{
  placeholder?: string;
  name?: string;
  rows?: number;
  width?: string | string[];
}> = ({ placeholder, name, rows, width = '100%', ...props }) => (
  <Container
    placeholder={placeholder}
    rows={rows}
    name={name}
    containerWidth={width}
    {...props}
  />
);

TextArea.paddable = true;
TextArea.canReceive = [];
TextArea.props = {
  placeholder: {
    types: PropTypes.String,
    default: 'TextArea',
    editor: { type: EditorTypes.Input, showTitle: false }
  },
  font: {
    font: {
      type: PropTypes.Font,
      default: PropTypes.FontDefaultOptions,
      editor: {
        type: EditorTypes.Font,
        showTitle: false
      }
    }
  },
  width: {
    type: PropTypes.Length,
    default: '100%',
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.auto
      ]
    }
  },
  padding: {
    type: PropTypes.Rect,
    default: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
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
    color: {
      type: PropTypes.Color,
      default: 'black',
      editor: EditorTypes.Color,
      required: false,
      enabled: false
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

TextArea.icon = <Square size="1.2rem" />;

export default TextArea;
