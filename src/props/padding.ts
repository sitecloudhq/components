import { EditorTypes, PropTypes } from '../types';

export const PaddingStyleProps = {
  padding: 'padding'
};

export const withPaddingProps = () => ({
  padding: {
    type: PropTypes.Rect,
    default: {
      top: '10px',
      bottom: '10px',
      left: '10px',
      right: '10px'
    },
    editor: EditorTypes.Rect
  }
});
