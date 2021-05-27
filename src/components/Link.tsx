import { LinkAlt as Icon } from '@styled-icons/boxicons-regular';
import React from 'react';
import styled from 'styled-components';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.a.attrs((props) => ({
  href: props.href
}))`
  ${(props: any) => props.styled}
  text-decoration: none;

  &:visited {
    color: ${(props) => props.color};
  }

  ${styleProps({
    color: 'color',
    backgroundColor: 'background-color',
    opacity: 'opacity',
    textAlign: 'text-align',
    font: 'font',
    padding: 'padding',
    margin: 'margin'
  })}
`;

const Link: Component<{ to: string; value: any }> = ({
  to,
  value,
  ...props
}) => (
  <Container {...props} href={to}>
    {value}
  </Container>
);

Link.canReceive = [];
Link.props = {
  value: {
    type: PropTypes.String,
    default: 'Link',
    editor: EditorTypes.RichInput
  },
  URL: {
    to: {
      type: PropTypes.String,
      default: '/',
      editor: {
        type: EditorTypes.Input,
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
      type: PropTypes.String,
      default: 'black',
      editor: EditorTypes.Color
    },
    backgroundColor: {
      type: PropTypes.String,
      default: '#ffffff',
      editor: {
        type: EditorTypes.Color,
        title: 'Fill'
      },
      required: false,
      enabled: false
    }
  }
};

Link.icon = <Icon size="0.9rem" />;

export default Link;
