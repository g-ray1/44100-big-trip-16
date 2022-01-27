import { createElement } from '../render.js';

const createWaypointsContainer = () => (
  '<ul class="trip-events__list"></ul>'
);

class WaypointsList {
  #element = null;

  get template() {
    return createWaypointsContainer();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }
}

export default WaypointsList;
