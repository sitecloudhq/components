import { CropSquare as Icon } from '@styled-icons/material/CropSquare';
import React from 'react';
import styled from 'styled-components';
import { Component } from '../Component';
import { withFlexboxProps, FlexboxStyleProps } from '../props/flexbox';
import { withSizeProps, SizeStyleProps } from '../props/size';
import { EditorTypes, PropTypes } from '../types';
import { styleProps } from '../utils';

const FlexContainer = styled.section`
  ${(props: any) => props.styled}
  display: flex;
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
    ...SizeStyleProps,
    ...FlexboxStyleProps
  })}
`;

const Container: Component = ({ children, ...props }) => {
  return <FlexContainer {...props}>{children}</FlexContainer>;
};

Container.paddable = true;
Container.props = {
  ...withFlexboxProps(),
  size: withSizeProps(),
  padding: {
    type: PropTypes.Rect,
    default: {
      top: '10px',
      bottom: '10px',
      left: '0px',
      right: '0px'
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
    backgroundColor: {
      type: PropTypes.String,
      default: '#ffffff',
      editor: EditorTypes.Color,
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
