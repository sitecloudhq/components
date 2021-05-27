import React from 'react';
import styled from 'styled-components';
import { Text as Icon } from '@styled-icons/ionicons-solid';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.p`
  ${(props: any) => props.styled}
  word-break: break-word;

  ${styleProps({
    color: 'color',
    opacity: 'opacity',
    textAlign: 'text-align',
    font: 'font',
    padding: 'padding',
    margin: 'margin'
  })}
`;

const Text: Component<{ value: any }> = ({ value, ...props }) => (
  <Container {...props} dangerouslySetInnerHTML={{ __html: value }} />
);

Text.canReceive = [];
Text.paddable = true;

Text.props = {
  value: {
    type: PropTypes.String,
    default: 'This is a paragraph',
    editor: EditorTypes.RichInput
  },
  alignment: {
    textAlign: {
      type: PropTypes.Array,
      default: ['center', 'left', 'right', 'justify'],
      editor: {
        type: EditorTypes.Combo,
        showTitle: false
      }
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
    color: {
      type: PropTypes.Color,
      default: 'black',
      editor: EditorTypes.Color
    }
  }
};

Text.icon = <Icon size="0.9rem" />;

export default Text;
