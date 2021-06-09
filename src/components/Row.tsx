import React, { forwardRef } from 'react';
import { Row as DefaultRow } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { ViewHeadline as Icon } from 'styled-icons/material';

import { PropTypes, EditorTypes } from '../types';
import {
  styleProps,
  alignItemsValues,
  justifyContentValues,
  parseAlignItems,
  parseJustifyContent
} from '../utils';
import { Component } from '../Component';

type Props = {} & React.ComponentProps<typeof DefaultRow>;

const Container = styled(DefaultRow)<Props>`
  ${(props: any) => props.styled};
  background-position: center;
  background-image: ${(props: any) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : null};

  ${styleProps({
    height: 'min-height',
    padding: 'padding',
    margin: 'margin',
    backgroundColor: 'background-color',
    backgroundSize: 'background-size',
    horizontal: {
      attr: 'justify-content',
      transform: parseJustifyContent
    },
    vertical: {
      attr: 'align-items',
      transform: parseAlignItems
    }
  })}
`;

const Row: Component<HTMLElement> = forwardRef(({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
});

Row.icon = <Icon size="1.6rem" />;
Row.canReceive = ['Column'];
Row.paddable = true;

Row.props = {
  dimensions: {
    height: {
      type: PropTypes.UnitValue,
      default: '32px',
      editor: {
        type: EditorTypes.UnitValue,
        options: [PropTypes.UnitValue.px, PropTypes.UnitValue.percentage]
      },
      required: false,
      enabled: true
    }
  },
  alignments: {
    horizontal: {
      type: PropTypes.Array,
      default: Object.keys(justifyContentValues).filter(x => x !== 'stretch'),
      editor: EditorTypes.Combo
    },
    vertical: {
      type: PropTypes.Array,
      default: Object.keys(alignItemsValues),
      editor: EditorTypes.Combo
    }
  },
  padding: {
    type: PropTypes.Rect,
    default: {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5
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
    backgroundImage: {
      type: PropTypes.String,
      editor: {
        type: EditorTypes.BackgroundImage,
        title: 'Background Image'
      }
    },
    backgroundColor: {
      type: PropTypes.String,
      default: 'transparent',
      editor: EditorTypes.Color
    },
    backgroundSize: {
      type: PropTypes.Array,
      default: ['cover', 'contain', 'auto'],
      editor: EditorTypes.Combo
    }
  }
};
export default Row;
