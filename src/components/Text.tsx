import React from 'react';
import styled from 'styled-components';
import { Text as Icon } from '@styled-icons/ionicons-solid';

import { PropTypes, EditorTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.p`
  ${(props: any) => props.styled}
  word-break: break-word;
  border: ${({ borderColor, borderWidth }: any) =>
    borderColor && borderWidth
      ? `${borderWidth} solid ${borderColor}`
      : 'none'};

  ${styleProps({
    color: 'color',
    backgroundColor: 'background-color',
    opacity: 'opacity',
    textAlign: 'text-align',
    font: 'font',
    padding: 'padding',
    margin: 'margin',
    decoration: 'text-decoration',
    width: 'width',
    lineHeight: 'line-height'
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
    },
    decoration: {
      type: PropTypes.Array,
      default: [
        'none',
        'underline',
        'underline dotted',
        'line-through',
        'overline'
      ],
      editor: EditorTypes.Combo
    }
  },
  width: {
    type: PropTypes.Length,
    default: 'auto',
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
    opacity: {
      type: PropTypes.Length,
      default: '100%',
      editor: EditorTypes.Slider
    },
    color: {
      type: PropTypes.Color,
      default: 'black',
      editor: {
        type: EditorTypes.Color,
        title: 'Font Color'
      }
    },
    backgroundColor: {
      type: PropTypes.Color,
      editor: {
        type: EditorTypes.Color,
        title: 'Background Color'
      },
      required: false,
      enabled: false
    },
    lineHeight: {
      type: PropTypes.Length,
      default: 'auto',
      editor: EditorTypes.Slider,
      options: [PropTypes.Length.percentage, PropTypes.Length.auto]
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
    }
  }
};

Text.icon = <Icon size="0.9rem" />;

export default Text;
