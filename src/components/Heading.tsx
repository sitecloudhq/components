import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { Heading as Icon } from 'styled-icons/fa-solid';

import { PropTypes, EditorTypes } from '../types';
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
    margin: 'margin',
    decoration: 'text-decoration',
    width: 'width'
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
`;

const H2 = styled.h2`
  ${setBase}
`;

const H1 = styled.h1`
  ${setBase}
`;

const headings: any = {
  'Heading 1': H1,
  'Heading 2': H2,
  'Heading 3': H3,
  'Heading 4': H4,
  'Heading 5': H5,
  'Heading 6': H6
};

const defaultProps: any = {
  'Heading 1': { ...PropTypes.FontDefaultOptions, size: '32px', weight: 600 },
  'Heading 2': { ...PropTypes.FontDefaultOptions, size: '24px', weight: 600 },
  'Heading 3': { ...PropTypes.FontDefaultOptions, size: '18px', weight: 600 },
  'Heading 4': { ...PropTypes.FontDefaultOptions, size: '16px', weight: 600 },
  'Heading 5': { ...PropTypes.FontDefaultOptions, size: '14px', weight: 600 },
  'Heading 6': { ...PropTypes.FontDefaultOptions, size: '12px', weight: 600 }
};

const defaultHeading = 'Heading 1';

const Heading: Component<{
  level: string;
  value: any;
  paddable: boolean;
}> = ({ children, level, value, ...props }): ReactElement => {
  const Element = headings[level] || headings[defaultHeading];

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
    level: {
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
      default: (props: any) => {
        if (!props || !props.level) return PropTypes.FontDefaultOptions;
        return defaultProps[props.level];
      },
      editor: {
        type: EditorTypes.Font,
        showTitle: false
      }
    },
    decoration: {
      type: PropTypes.Array,
      default: [
        'none',
        'underline',
        'underline dotted',
        'line-through',
        'overline'
      ],
      editor: EditorTypes.Combo
    }
  },
  width: {
    type: PropTypes.Length,
    default: 'auto',
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.auto
      ]
    }
  },
  alignment: {
    textAlign: {
      type: PropTypes.Array,
      default: ['center', 'left', 'right', 'justify'],
      editor: {
        type: EditorTypes.Combo,
        showTitle: false
      }
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
    opacity: {
      type: PropTypes.Length,
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
