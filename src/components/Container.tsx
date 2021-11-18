import React from 'react';
import styled from 'styled-components';
import { CropSquare as Icon } from '@styled-icons/material/CropSquare';

import { EditorTypes, PropTypes } from '../types';
import {
  styleProps,
  alignItemsValues,
  justifyContentValues,
  parseAlignItems,
  parseJustifyContent
} from '../utils';
import { Component } from '../Component';

const FlexContainer = styled.section`
  ${(props: any) => props.styled}
  display: flex;
  flex-wrap: wrap;
  background-position: center;
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
      transform: (value: any) => (value === 'Horizontally' ? 'row' : 'column')
    }
  })}
`;

const Container: Component = ({ children, ...props }) => {
  return <FlexContainer {...props}>{children}</FlexContainer>;
};

Container.paddable = true;
Container.props = {
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
      default: '50px',
      editor: {
        type: EditorTypes.Length,
        options: [
          PropTypes.Length.px,
          PropTypes.Length.percentage,
          PropTypes.Length.vw,
          PropTypes.Length.vh,
          PropTypes.Length.auto
        ]
      },
      required: false,
      enabled: false
    }
  },
  padding: {
    type: PropTypes.Rect,
    default: {
      top: 10,
      bottom: 10,
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

Container.icon = <Icon size="1.6rem" />;

export default Container;
