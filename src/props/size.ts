import { EditorTypes, PropTypes } from '../types';

export const SizeStyleProps = {
  width: 'width',
  height: 'height',
  maxWidth: 'max-width',
  maxHeight: 'max-height',
  minWidth: 'min-width',
  minHeight: 'min-height'
};

export const withSizeProps = (
  defaultWidth = '100%',
  defaultHeight = '50px',
  defaultMaxWidth = '100%',
  defaultMaxHeight = '100%'
) => ({
  width: {
    type: PropTypes.Length,
    default: defaultWidth,
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
    default: defaultHeight,
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
  },
  maxWidth: {
    type: PropTypes.Length,
    default: defaultMaxWidth,
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh
      ]
    },
    required: false,
    enabled: false
  },
  maxHeight: {
    type: PropTypes.Length,
    default: defaultMaxHeight,
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh
      ]
    },
    required: false,
    enabled: false
  },
  minWidth: {
    type: PropTypes.Length,
    default: '100%',
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh
      ]
    },
    required: false,
    enabled: false
  },
  minHeight: {
    type: PropTypes.Length,
    default: '100%',
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh
      ]
    },
    required: false,
    enabled: false
  }
});
