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

  ${({ borderWidth, borderColor }: any) =>
    borderWidth || borderColor ? `border-style: solid` : null};

  ${styleProps({
    color: 'color',
    backgroundColor: 'background-color',
    opacity: 'opacity',
    textAlign: 'text-align',
    font: 'font',
    padding: 'padding',
    margin: 'margin',
    roundCorners: 'border-radius',
    borderWidth: 'border-width',
    borderColor: 'border-color'
  })}
`;

const Link: Component<{ link: string; text: any }> = ({
  link,
  text,
  ...props
}) => (
  <Container {...props} href={link}>
    {text}
  </Container>
);

Link.paddable = true;
Link.canReceive = [];
Link.props = {
  text: {
    type: PropTypes.String,
    default: 'Link',
    editor: EditorTypes.RichInput
  },
  URL: {
    link: {
      type: PropTypes.String,
      default: '',
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
    opacity: {
      type: PropTypes.Length,
      default: '100%',
      editor: EditorTypes.Slider
    },
    border: {
      borderColor: {
        type: PropTypes.Color,
        default: 'black',
        editor: {
          type: EditorTypes.Color,
          title: 'Border Color',
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
    roundCorners: {
      type: PropTypes.Length,
      default: '0px',
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
      editor: EditorTypes.Color,
      required: false,
      enabled: false
    }
  }
};

Link.icon = <Icon size="0.9rem" />;

export default Link;
