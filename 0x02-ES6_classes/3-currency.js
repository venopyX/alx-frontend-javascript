export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and setter for code
  get code() {
    return this.currencyCode;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this.currencyCode = value;
  }

  // Getter and setter for name
  get name() {
    return this.currencyName;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this.currencyName = value;
  }

  // Method
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
