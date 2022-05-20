import { EditorTypes, PropTypes } from '../types';

export const MarginStyleProps = {
  margin: 'margin'
};

export const withMarginProps = () => ({
  margin: {
    type: PropTypes.Rect,
    default: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    },
    editor: EditorTypes.Rect
  }
});
