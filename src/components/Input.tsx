import React from 'react';
import styled from 'styled-components';
import { Square } from 'styled-icons/fa-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

enum InputType {
  // We don't include button type because
  // there is already a dedicated component
  Text = 'text',
  Checkbox = 'checkbox',
  Color = 'color',
  Date = 'date',
  Email = 'email',
  File = 'file',
  Number = 'number',
  Password = 'password',
  Radio = 'radio',
  Range = 'range'
}

const Container = styled.input<{
  containerWidth?: string | string[];
}>`
  ${(props: any) => props.styled}
  &:hover {
    cursor: pointer;
  }

  ${({ borderWidth, borderColor }: any) =>
    borderWidth || borderColor ? `border-style: solid` : null};

  ${styleProps({
    containerWidth: 'width',
    opacity: 'opacity',
    textAlign: 'text-align',
    font: 'font',
    color: 'color',
    backgroundColor: 'background-color',
    padding: 'padding',
    margin: 'margin',
    roundCorners: 'border-radius',
    borderWidth: 'border-width',
    borderColor: 'border-color'
  })}
`;

const Input: Component<{
  placeholder?: string;
  name?: string;
  type?: InputType;
  width?: string | string[];
}> = ({
  placeholder,
  name,
  type = InputType.Text,
  width = '100%',
  ...props
}) => (
  <Container
    placeholder={placeholder}
    type={type}
    name={name}
    containerWidth={width}
    {...props}
  />
);

Input.paddable = true;
Input.canReceive = [];
Input.props = {
  placeholder: {
    types: PropTypes.String,
    default: 'Input',
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
      top: '10px',
      bottom: '10px',
      left: '10px',
      right: '10px'
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

Input.icon = <Square size="1.2rem" />;

export default Input;
