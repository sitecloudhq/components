import React from 'react';
import styled from 'styled-components';
import { Col as DefaultCol } from 'react-styled-flexboxgrid';
import { ViewColumn as Icon } from 'styled-icons/material';

import { PropTypes, EditorTypes } from '../types';
import {
  styleProps,
  alignItemsValues,
  justifyContentValues,
  parseAlignItems,
  parseJustifyContent
} from '../utils';
import { Component } from '../Component';

const Container = styled(DefaultCol)`
  ${(props: any) => props.styled}
  display: flex !important;
  min-height: 1rem;
  min-width: 1rem;
  max-width: 100%;
  flex-direction: column;
  background-image: ${(props: any) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : null};
  background-size: cover;
  background-position: center;

  ${styleProps({
    padding: 'padding',
    margin: 'margin',
    backgroundColor: 'background-color',
    alignItems: {
      attr: 'align-items',
      transform: parseAlignItems
    },
    justifyContent: {
      attr: 'justify-content',
      transform: parseJustifyContent
    }
  })}
`;

const falltroughValues = (value: any) =>
  Array.isArray(value)
    ? value.reduce((acc, curr, idx) => {
        acc.push(curr || acc[idx - 1]);
        return acc;
      }, [])
    : value;

const Col: Component<{ size: any; offset: any }> = ({ children, ...props }) => {
  const sizes = falltroughValues(props.size);
  const sizeProps = Array.isArray(sizes)
    ? {
        ...(sizes[3] && { xs: sizes[3] }),
        ...(sizes[2] && { sm: sizes[2] }),
        ...(sizes[1] && { md: sizes[1] }),
        ...(sizes[0] && { lg: sizes[0] })
      }
    : { xs: sizes };

  const offsets = falltroughValues(props.offset);
  const offsetProps = Array.isArray(offsets)
    ? {
        ...(offsets[3] && { xsOffset: offsets[3] }),
        ...(offsets[2] && { smOffset: offsets[2] }),
        ...(offsets[1] && { mdOffset: offsets[1] }),
        ...(offsets[0] && { lgOffset: offsets[0] })
      }
    : { xsOffset: offsets };

  return (
    <Container {...props} {...sizeProps} {...offsetProps}>
      {children}
    </Container>
  );
};

Col.paddable = true;

Col.props = {
  dimensions: {
    size: {
      type: PropTypes.Array,
      default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      editor: EditorTypes.Combo
    },
    offset: {
      type: PropTypes.Array,
      default: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      editor: EditorTypes.Combo
    }
  },
  alignments: {
    alignItems: {
      type: PropTypes.Array,
      default: Object.keys(alignItemsValues),
      editor: EditorTypes.Combo
    },
    justifyContent: {
      type: PropTypes.Array,
      default: Object.keys(justifyContentValues),
      editor: EditorTypes.Combo
    }
  },
  // No left and right default padding because that'd break
  // some sizes on rows
  padding: {
    type: PropTypes.Rect,
    default: {
      top: 5,
      bottom: 5,
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
    backgroundImage: {
      type: PropTypes.String,
      editor: EditorTypes.Image,
      required: false,
      enabled: false
    },
    backgroundColor: {
      type: PropTypes.String,
      default: 'transparent',
      editor: EditorTypes.Color
    }
  }
};

Col.icon = <Icon size="1.8rem" />;

export default Col;
