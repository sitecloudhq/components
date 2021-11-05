import React from 'react';
import styled, { css } from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';
import { Component } from '../Component';
import { EditorTypes, PropTypes } from '../types';
import { styleProps } from '../utils';

const Container = styled.form<{ width?: string | string[] }>`
  ${(props: any) => props.styled}
  display: flex;
  justify-content: center;
  align-content: center;
  border: ${({ borderColor, borderWidth }: any) =>
    borderColor && borderWidth
      ? `${borderWidth} solid ${borderColor}`
      : 'none'};
  ${styleProps({
    width: 'width',
    padding: 'padding',
    margin: 'margin',
    backgroundColor: 'background-color',
    roundCorners: 'border-radius'
  })}
`;

const Content = styled.div<{
  width?: string | string[];
  alignment?: string | string[];
}>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align ${(props) => (props.alignment ? props.alignment : 'left')};
  align-items: ${(props) =>
    props.alignment === 'left'
      ? 'flex-start'
      : props.alignment === 'right'
      ? 'flex-end'
      : 'center'};
  ${styleProps({
    width: 'width'
  })};
`;

enum FormMethod {
  Get = 'get',
  Post = 'post'
}

const Form: Component<{
  alignment?: string;
  contentWidth?: string | string[];
  width?: string | string[];
  method?: FormMethod;
  action?: string;
}> = ({
  children,
  alignment,
  width = '100%',
  contentWidth = '50%',
  method = FormMethod.Post,
  action = '',
  ...props
}) => (
  <Container action={action} method={method} width={width} {...props}>
    <Content width={contentWidth} alignment={alignment}>
      {children}
    </Content>
  </Container>
);

Form.paddable = true;
Form.canReceive = [];
Form.props = {
  width: {
    type: PropTypes.UnitValue,
    default: '50%',
    editor: {
      type: EditorTypes.UnitValue,
      options: [
        PropTypes.UnitValue.px,
        PropTypes.UnitValue.percentage,
        PropTypes.UnitValue.auto
      ]
    }
  },
  contentWidth: {
    type: PropTypes.UnitValue,
    default: '50%',
    editor: {
      type: EditorTypes.UnitValue,
      options: [
        PropTypes.UnitValue.px,
        PropTypes.UnitValue.percentage,
        PropTypes.UnitValue.auto
      ]
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
  alignment: {
    type: PropTypes.Array,
    default: ['center', 'left', 'right'],
    editor: EditorTypes.Combo
  },
  aspect: {
    border: {
      borderColor: {
        type: PropTypes.Color,
        default: 'black',
        editor: {
          type: EditorTypes.Color,
          title: 'Border',
          root: true
        },
        required: false,
        enabled: false
      },
      borderWidth: {
        type: PropTypes.UnitValue,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Border Width'
        }
      }
    },
    roundCorners: {
      type: PropTypes.UnitValue,
      default: '0px',
      editor: EditorTypes.Slider
    },
    backgroundColor: {
      type: PropTypes.Color,
      default: 'black',
      editor: EditorTypes.Color,
      required: false,
      enabled: false
    }
  }
};

Form.icon = <Icon size="1.4rem" />;

export default Form;