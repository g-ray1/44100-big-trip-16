import { createElement } from '../utils/render.js';

class AbstractViewClass {
  #element = null;
  _callback = {};

  constructor() {
    if (new.target === AbstractViewClass) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

export default AbstractViewClass;
