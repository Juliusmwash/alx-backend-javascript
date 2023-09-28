/* eslint-disable no-underscore-dangle */

class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a Number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a String');
    }

    this._size = size;
    this._location = location;
  }

  // Casting to Number returns the size
  valueOf() {
    return this._size;
  }

  // Casting to String returns the location
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
