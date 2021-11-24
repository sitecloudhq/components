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
    width: 'width',
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

const Row: Component<HTMLElement> = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    );
  }
);

Row.icon = <Icon size="1.6rem" />;
Row.canReceive = ['Column'];
Row.paddable = true;

Row.props = {
  dimensions: {
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
    height: {
      type: PropTypes.Length,
      default: '32px',
      editor: {
        type: EditorTypes.Length,
        options: [
          PropTypes.Length.px,
          PropTypes.Length.percentage,
          PropTypes.Length.auto
        ]
      }
    }
  },
  alignments: {
    horizontal: {
      type: PropTypes.Array,
      default: Object.keys(justifyContentValues).filter((x) => x !== 'stretch'),
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
      top: '5px',
      bottom: '5px',
      left: '5px',
      right: '5px'
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
