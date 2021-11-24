export const String = globalThis.String;
export const Array = globalThis.Array;
export const Color = globalThis.String;
export const URL = globalThis.URL;
export const Number = globalThis.Number;

function parseLength(value) {
  return value ? value.match(/(^.*)(\%|vh|vw|px)/i) : null;
}

export class Length {
  constructor(value) {
    if (value === 'auto') {
      this.value = 0;
      this.unit = 'auto';
    } else {
      const parsed = parseLength(value);
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

  static get vh() {
    return 'vh';
  }

  static get vw() {
    return 'vw';
  }

  static get auto() {
    return 'auto';
  }

  static get units() {
    return ['px', '%', 'vw', 'vh', 'auto'];
  }
}

export const RectDefaultOptions = {
  top: '0px',
  left: '0px',
  bottom: '0px',
  right: '0px'
};

export class Rect {
  _setParsedValue(key, value) {
    if (typeof value === 'number') {
      // Keep it for backward compatibility
      this[key] = { value, unit: 'px' };
    } else {
      const parsedValue = parseLength(value);
      if (parsedValue) {
        this[key] = {
          value: parseInt(parsedValue[1], 10),
          unit: parsedValue[2]
        };
      }
    }
  }

  constructor(options = RectDefaultOptions) {
    this._setParsedValue('top', options.top);
    this._setParsedValue('left', options.left);
    this._setParsedValue('bottom', options.bottom);
    this._setParsedValue('right', options.right);
  }

  toJSON() {
    return {
      top: `${this.top.value}${this.top.unit}`,
      left: `${this.left.value}${this.left.unit}`,
      bottom: `${this.bottom.value}${this.bottom.unit}`,
      right: `${this.right.value}${this.right.unit}`
    };
  }

  toString() {
    return JSON.stringify(toJSON());
  }

  static toProp(value = RectDefaultOptions) {
    return `${value.top} ${value.right} ${value.bottom} ${value.left}`;
  }

  static get px() {
    return 'px';
  }

  static get percentage() {
    return '%';
  }

  static get vh() {
    return 'vh';
  }

  static get vw() {
    return 'vw';
  }

  static get units() {
    return ['px', '%', 'vw', 'vh'];
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
