import React from 'react';
import styled from 'styled-components';

import { EditorTypes, PropTypes } from '../types';
import { styleProps } from '../utils';
import { Component } from '../Component';

const Container = styled.div`
  ${(props: any) => props.styled}
  padding: 0;
  margin: 0 auto;
  background-image: ${(props: any) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : null};
  ${styleProps({
    width: 'width',
    height: 'height',
    backgroundColor: 'background-color',
    backgroundSize: 'background-size'
  })};
`;

const Main: Component = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

Main.props = {
  dimensions: {
    width: {
      type: PropTypes.UnitValue,
      default: '100%',
      editor: {
        type: EditorTypes.UnitValue,
        options: [PropTypes.UnitValue.px, PropTypes.UnitValue.percentage]
      }
    },
    height: {
      type: PropTypes.UnitValue,
      default: '100%',
      editor: {
        type: EditorTypes.UnitValue,
        options: [PropTypes.UnitValue.px, PropTypes.UnitValue.percentage]
      }
    }
  },
  aspect: {
    backgroundImage: {
      type: PropTypes.String,
      editor: EditorTypes.BackgroundImage
    },
    backgroundColor: {
      type: PropTypes.Color,
      default: '#ffffff',
      editor: EditorTypes.Color
    },
    backgroundSize: {
      type: PropTypes.Array,
      default: ['cover', 'contain', 'auto'],
      editor: EditorTypes.Combo
    }
  }
};

export default Main;
