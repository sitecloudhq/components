import { Embed2 as Icon } from '@styled-icons/icomoon/Embed2';
import React from 'react';
import styled from 'styled-components';
import { Component } from '../Component';
import { EditorTypes, PropTypes } from '../types';
import { styleProps } from '../utils';

const Container = styled.iframe`
  ${(props: any) => props.styled}
  ${styleProps({
    width: 'width',
    height: 'height'
  })}
`;

const Embed: Component<{ source: string }> = ({ source, ...props }) => {
  return <Container src={source} {...props} frameBorder="0" />;
};

Embed.props = {
  source: {
    type: PropTypes.String,
    default: '',
    editor: EditorTypes.Input
  },
  size: {
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
      },
      required: false,
      enabled: false
    }
  }
};

Embed.icon = <Icon size="1.6rem" />;

export default Embed;
