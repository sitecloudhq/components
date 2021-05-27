import React from 'react';
import styled from 'styled-components';
import { Square } from 'styled-icons/fa-regular';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const StyledButton = styled.button`
  ${(props: any) => props.styled}
  word-break: break-word;
  border: 0;
  &:hover {
    cursor: pointer;
  }

  ${styleProps({
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

const Button: Component<{ value: any }> = ({ value, ...props }) => (
  <StyledButton {...props}>{value}</StyledButton>
);

Button.paddable = true;
Button.canReceive = [];
Button.props = {
  text: {
    value: {
      types: PropTypes.String,
      default: 'Button',
      editor: { type: EditorTypes.Input, showTitle: false }
    }
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

Button.icon = <Square size="1.2rem" />;

export default Button;
