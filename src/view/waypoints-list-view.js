import AbstractViewClass from './abstract-view-class';

const createWaypointsContainer = () => (
  '<ul class="trip-events__list"></ul>'
);

class WaypointsList extends AbstractViewClass{

  get template() {
    return createWaypointsContainer();
  }

}

export default WaypointsList;
