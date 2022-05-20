import { EditorTypes, PropTypes } from '../types';
import {
  alignItemsValues,
  flexDirectionValues,
  justifyContentValues,
  parseAlignItems,
  parseFlexDirection,
  parseJustifyContent
} from '../utils';

export const FlexboxStyleProps = {
  alignItems: {
    attr: 'align-items',
    transform: parseAlignItems
  },
  justifyContent: {
    attr: 'justify-content',
    transform: parseJustifyContent
  },
  stack: {
    attr: 'flex-direction',
    transform: parseFlexDirection
  }
};

export const withFlexboxProps = (
  defaultDirection = Object.keys(flexDirectionValues),
  defaultJustifyContent = Object.keys(justifyContentValues),
  defaultAlignItems = Object.keys(alignItemsValues)
) => ({
  stack: {
    stack: {
      type: PropTypes.Array,
      default: defaultDirection,
      editor: {
        type: EditorTypes.Combo,
        showTitle: false
      }
    }
  },
  alignments: {
    justifyContent: {
      type: PropTypes.Array,
      default: defaultJustifyContent,
      editor: EditorTypes.Combo
    },
    alignItems: {
      type: PropTypes.Array,
      default: defaultAlignItems,
      editor: EditorTypes.Combo
    }
  }
});
