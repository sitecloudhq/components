import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { Heading as Icon } from 'styled-icons/fa-solid';

import { PropTypes, EditorTypes } from '../types';
import theme from '../theme';
import { styleProps } from '../utils';
import { Component } from '../Component';

const setBase = css`
  ${(props: any) => props.styled}
  word-break: break-word;
  ${styleProps({
    color: 'color',
    opacity: 'opacity',
    textAlign: 'text-align',
    font: 'font',
    padding: 'padding',
    margin: 'margin'
  })}
`;

const H6 = styled.h6`
  ${setBase}
`;

const H5 = styled.h5`
  ${setBase}
`;

const H4 = styled.h4`
  ${setBase}
`;

const H3 = styled.h3`
  ${setBase}
  font-style: italic;
`;

const H2 = styled.h2`
  color: ${theme.colors.black400};
  ${setBase}
`;

const H1 = styled.h1`
  ${setBase}
`;

const headings: any = {
  Header: H1,
  'Title 1': H2,
  'Title 2': H3,
  'Subtitle 1': H4,
  'Subtitle 2': H5,
  'Subtitle 3': H6
};

const defaultHeading = 'Header';

const Heading: Component<{
  as: string;
  value: any;
  paddable: boolean;
}> = ({ children, as, value, ...props }): ReactElement => {
  const Element = headings[as] || headings[defaultHeading];

  return <Element {...props} dangerouslySetInnerHTML={{ __html: value }} />;
};

Heading.paddable = true;
Heading.canReceive = [];
Heading.props = {
  value: {
    type: PropTypes.String,
    default: 'Heading',
    editor: EditorTypes.RichInput
  },
  type: {
    as: {
      type: PropTypes.Array,
      default: Object.keys(headings),
      media: false,
      editor: {
        type: EditorTypes.Combo,
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
  alignment: {
    textAlign: {
      type: PropTypes.Array,
      default: ['left', 'center', 'right', 'justify'],
      editor: {
        type: EditorTypes.Combo,
        showTitle: false
      }
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
    opacity: {
      type: PropTypes.UnitValue,
      default: '100%',
      editor: EditorTypes.Slider
    },
    color: {
      type: PropTypes.Color,
      default: 'black',
      editor: EditorTypes.Color,
      required: false,
      enabled: false
    }
  }
};

Heading.icon = <Icon size="1rem" />;

export default Heading;
