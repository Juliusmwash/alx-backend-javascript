/* eslint-disable no-underscore-dangle */

export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      return TypeError('name must be a String');
    }
    if (typeof code !== 'string') {
      return TypeError('code must be a String');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
