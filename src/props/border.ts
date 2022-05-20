import { EditorTypes, PropTypes } from '../types';

export const BorderStyleProps = {
  roundCorners: 'border-radius',
  borderWidth: 'border-width',
  borderColor: 'border-color'
};

export const withBorderProps = () => ({
  border: {
    borderColor: {
      type: PropTypes.Color,
      default: 'black',
      editor: {
        type: EditorTypes.Color,
        title: 'Border Color',
        root: true
      },
      required: false,
      enabled: false
    },
    borderWidth: {
      type: PropTypes.Length,
      default: '0px',
      editor: {
        type: EditorTypes.Slider,
        title: 'Border Width'
      }
    }
  },
  roundCorners: {
    type: PropTypes.Length,
    default: '0px',
    editor: EditorTypes.Slider
  }
});
