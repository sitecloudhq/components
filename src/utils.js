import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from './types';
import { breakpoints, breakpointKeys, breakpointStyles } from './breakpoints';

const rectToProp = PropTypes.Rect.toProp;
const toProp = PropTypes.Length.toProp;

const parseProp = (prop) => {
  if (!prop) return undefined;

  if (
    typeof prop === 'object' &&
    'top' in prop &&
    'bottom' in prop &&
    'left' in prop &&
    'right' in prop
  ) {
    /* It is a Rect */
    return PropTypes.Rect.toProp(prop);
  } else if (
    typeof prop === 'object' &&
    'family' in prop &&
    'size' in prop &&
    'weight' in prop
  ) {
    /* It is a font */
    return PropTypes.Font.toProp(prop);
  } else {
    return prop;
  }
};

const parseBreakpoints = (prop) =>
  breakpointKeys.reduce((acc, b, idx) => {
    acc[b] = parseProp(prop[idx]);
    return acc;
  }, {});

const getAttrName = (option) => {
  if (typeof option === 'object') {
    if (!option.attr) throw `styleProps option without 'attr' field`;
    return option.attr;
  } else {
    return option;
  }
};

const getStyle = (value, option) =>
  option.transform ? option.transform(value) : value;

export const styleProps = (opt) => (props) => {
  const _props = Object.keys(props).reduce((acc, pk) => {
    if (Array.isArray(props[pk])) {
      acc[pk] = parseBreakpoints(props[pk]);
    } else {
      acc[pk] = { _: parseProp(props[pk]) };
    }
    return acc;
  }, {});

  const media = Object.keys(opt).reduce((media, name) => {
    if (!_props[name]) return media;

    Object.keys(breakpointStyles).forEach(
      (bp) =>
        (media[bp] = {
          ...media[bp],
          [getAttrName(opt[name])]: getStyle(_props[name][bp], opt[name])
        })
    );
    media._ = {
      ...media._,
      [getAttrName(opt[name])]: getStyle(_props[name]._, opt[name])
    };

    return media;
  }, {});

  return css`
    ${Object.keys(opt).map((key) =>
      _props[key]
        ? { [getAttrName(opt[key])]: getStyle(_props[key]._, opt[key]) }
        : null
    )}
    ${Object.keys(breakpointStyles).map((bp) =>
      breakpointStyles[bp](media[bp])
    )}
  `;
};

export const justifyContentValues = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  stretch: 'stretch',
  'space between': 'space-between',
  'space around': 'space-around',
  initial: 'initial'
};

export const alignItemsValues = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  stretch: 'stretch',
  initial: 'initial'
};

export const flexWrapValues = {
  'no wrap': 'nowrap',
  wrap: 'wrap',
  'wrap reverse': 'wrap-reverse'
};

export const flexDirectionValues = {
  vertically: 'column',
  'vertically reverse': 'column-reverse',
  horizontally: 'row',
  'horizontally reverse': 'row-reverse'
};

export const flexDirectionValuesHorizontalFirst = {
  horizontally: 'row',
  'horizontally reverse': 'row-reverse',
  vertically: 'column',
  'vertically reverse': 'column-reverse'
};

export const parseAlignItems = (value) =>
  value && alignItemsValues[value.toLowerCase()];

export const parseJustifyContent = (value) =>
  value && justifyContentValues[value.toLowerCase()];

export const parseFlexWrap = (value) =>
  value && flexWrapValues[value.toLowerCase()];

export const parseFlexDirection = (value) =>
  value && flexDirectionValues[value.toLowerCase()];

export const falltroughValues = (value, defaultSize = 4) => {
  if (!Array.isArray(value)) return value;

  while (value.length < defaultSize) {
    value.push(undefined);
  }
  return value.reduce((acc, curr, idx) => {
    acc.push(curr != undefined ? curr : acc[idx - 1]);
    return acc;
  }, []);
};
