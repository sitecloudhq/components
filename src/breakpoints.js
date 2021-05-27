import { css } from 'styled-components';

export const breakpoints = [320, 720, 1366];
export const breakpointKeys = ['_', 'lg', 'md', 'sm'];
export const breakpointStyles = {
  sm: (styles) =>
    css`
      @media screen and (max-width: ${breakpoints[0]}px) {
        ${styles}
      }
    `,

  md: (styles) =>
    css`
      @media screen and (max-width: ${breakpoints[1]}px) {
        ${styles}
      }
    `,

  lg: (styles) =>
    css`
      @media screen and (max-width: ${breakpoints[2]}px) {
        ${styles}
      }
    `
};
