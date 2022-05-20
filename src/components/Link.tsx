import { LinkAlt as Icon } from '@styled-icons/boxicons-regular';
import React from 'react';
import styled from 'styled-components';

import { PropTypes, EditorTypes } from '../types';
import { styleProps, flexDirectionValuesHorizontalFirst } from '../utils';
import { Component } from '../Component';
import { withBorderProps, BorderStyleProps } from '../props/border';
import { withMarginProps, MarginStyleProps } from '../props/margin';
import { withPaddingProps, PaddingStyleProps } from '../props/padding';
import { withSizeProps, SizeStyleProps } from '../props/size';
import { withFlexboxProps, FlexboxStyleProps } from '../props/flexbox';

const Container = styled.a.attrs((props) => ({
  href: props.href
}))`
  ${(props: any) => props.styled}
  display: flex;
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
    ...SizeStyleProps,
    ...FlexboxStyleProps,
    ...PaddingStyleProps,
    ...MarginStyleProps,
    ...BorderStyleProps
  })}
`;

const Link: Component<{ link: string; text: any }> = ({
  children,
  link,
  text,
  ...props
}) => (
  <Container {...props} href={link}>
    {children}
    {text}
  </Container>
);

Link.paddable = true;
Link.canReceive = ['Image'];
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
  ...withSizeProps('auto'),
  ...withFlexboxProps(Object.keys(flexDirectionValuesHorizontalFirst)),
  ...withPaddingProps(),
  ...withMarginProps(),
  ...withBorderProps(),
  aspect: {
    opacity: {
      type: PropTypes.Length,
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
      editor: EditorTypes.Color,
      required: false,
      enabled: false
    }
  }
};

Link.icon = <Icon size="0.9rem" />;

export default Link;
