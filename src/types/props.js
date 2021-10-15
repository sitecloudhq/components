export const String = globalThis.String;
export const Array = globalThis.Array;
export const Color = globalThis.String;
export const URL = globalThis.URL;

export class UnitValue {
  constructor(value) {
    if (value === 'auto') {
      this.value = 0;
      this.unit = 'auto';
    } else {
      const parsed = value && value.match(/(^.*)(\%|em|rem|px|deg)/i);
      if (parsed) {
        this.value = parsed[1];
        this.unit = parsed[2];
      }
    }
  }

  toString() {
    if (this.unit === 'auto') return 'auto';
    else return `${this.value}${this.unit}`;
  }

  static get px() {
    return 'px';
  }

  static get percentage() {
    return '%';
  }

  static get deg() {
    return 'deg';
  }

  static get auto() {
    return 'auto';
  }
}

export const RectDefaultOptions = { top: 0, left: 0, bottom: 0, right: 0 };
export class Rect {
  constructor(options = RectDefaultOptions) {
    this.top = options.top;
    this.left = options.left;
    this.bottom = options.bottom;
    this.right = options.right;
    this.unit = 'px';
  }

  toString() {
    return JSON.stringify({ top, left, bottom, right });
  }

  static toProp(value = RectDefaultOptions) {
    return `${value.top}px ${value.right}px ${value.bottom}px ${value.left}px`;
  }

  static get px() {
    return 'px';
  }
}

export const FontDefaultOptions = {
  family: 'Open Sans',
  style: 'normal',
  weight: 400,
  size: '16px'
};

export class Font {
  constructor(options = FontDefaultOptions) {
    this.family = options.family;
    this.style = options.style;
    this.weight = options.weight;
    this.size = new UnitValue(options.size);
  }

  static toProp(value = FontDefaultOptions) {
    return `${value.style || FontDefaultOptions.style} normal ${
      value.weight || FontDefaultOptions.weight
    } ${value.size || FontDefaultOptions.size} ${
      value.family || FontDefaultOptions.family
    }`;
  }

  toString() {
    return JSON.stringify({ family, style, weight });
  }
}
