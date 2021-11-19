import React from 'react';
import styled from 'styled-components';

import { EditorTypes, PropTypes } from '../types';
import {
  styleProps,
  alignItemsValues,
  justifyContentValues,
  flexWrapValues,
  parseAlignItems,
  parseJustifyContent,
  parseFlexWrap
} from '../utils';
import { Component } from '../Component';

const Container = styled.div`
  ${(props: any) => props.styled}
  display: flex;
  align-content: flex-start;
  padding: 0;
  margin: 0 auto;
  ${styleProps({
    padding: 'padding',
    margin: 'margin',
    backgroundColor: 'background-color',
    backgroundImage: {
      attr: 'background-image',
      transform: (value: any) => (value ? `url(${value})` : null)
    },
    backgroundSize: 'background-size',
    width: 'width',
    height: 'height',
    maxWidth: 'max-width',
    alignItems: {
      attr: 'align-items',
      transform: parseAlignItems
    },
    justifyContent: {
      attr: 'justify-content',
      transform: parseJustifyContent
    },
    stack: {
      attr: 'flex-direction',
      transform: (value: any) =>
        value && value.toLowerCase() === 'horizontally' ? 'row' : 'column'
    },
    wrap: {
      attr: 'flex-wrap',
      transform: parseFlexWrap
    }
  })}
`;

const Main: Component = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

Main.props = {
  stack: {
    stack: {
      type: PropTypes.Array,
      default: ['Vertically', 'Horizontally'],
      editor: {
        type: EditorTypes.Combo,
        showTitle: false
      }
    }
  },
  alignments: {
    justifyContent: {
      type: PropTypes.Array,
      default: Object.keys(justifyContentValues),
      editor: EditorTypes.Combo
    },
    alignItems: {
      type: PropTypes.Array,
      default: Object.keys(alignItemsValues),
      editor: EditorTypes.Combo
    },
    wrap: {
      type: PropTypes.Array,
      default: Object.keys(flexWrapValues),
      editor: EditorTypes.Combo
    }
  },
  dimensions: {
    width: {
      type: PropTypes.Length,
      default: '100%',
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
    maxWidth: {
      type: PropTypes.Length,
      default: '1366px',
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
    backgroundColor: {
      type: PropTypes.String,
      default: '#ffffff',
      editor: {
        type: EditorTypes.Color,
        title: 'Fill'
      },
      required: false,
      enabled: false
    },
    backgroundImage: {
      type: PropTypes.String,
      editor: {
        type: EditorTypes.BackgroundImage,
        title: 'Background Image'
      }
    },
    backgroundSize: {
      type: PropTypes.Array,
      default: ['cover', 'contain', 'auto'],
      editor: EditorTypes.Combo
    }
  }
};

export default Main;
