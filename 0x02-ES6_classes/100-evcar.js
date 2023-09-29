/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    if (
      typeof brand !== 'string'
      || typeof motor !== 'string'
      || typeof color !== 'string'
      || typeof range !== 'string'
    ) {
      throw new TypeError('Attributes must be of type String');
    }
    super(brand, motor, color);
    this._range = range;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}
