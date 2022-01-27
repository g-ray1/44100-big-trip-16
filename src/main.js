import {renderElement, RenderPosition} from './render.js';
import MenuView from './view/menu-view.js';
import FiltrationView from './view/filter-view.js';
import SortingView from './view/sorting-view.js';
import EditFormView from './view/edit-form-view.js';
import WaypointsList from './view/waypoints-list-view.js';
import WaypointView from './view/waypoint-view.js';
import {getRandomeWaypointData} from './mocks/generate-waypoint-data.js';

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');

const WAYPOINTS_COUNT = 20;
const waypoints = Array.from({length: WAYPOINTS_COUNT}, getRandomeWaypointData);

renderElement(menuContainer, RenderPosition.BEFOREEND, new MenuView().element);
renderElement(filtersContainer, RenderPosition.BEFOREEND, new FiltrationView().element);
renderElement(contentContainer, RenderPosition.BEFOREEND, new SortingView().element);
renderElement(contentContainer, RenderPosition.BEFOREEND, new WaypointsList().element);

const waypointsContainer = document.querySelector('.trip-events__list');

const renderWaypoint = (counter) => {
  const waypointItem = new WaypointView(waypoints[counter]);
  const editForm = new EditFormView(waypoints[counter]);

  const openEditForm = () => {
    waypointsContainer.replaceChild(editForm.element, waypointItem.element);
  };

  const closeEditForm = () => {
    waypointsContainer.replaceChild(waypointItem.element, editForm.element);
  };

  waypointItem.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    openEditForm();
  });

  editForm.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    closeEditForm();
  });

  editForm.element.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    closeEditForm();
  });

  renderElement(waypointsContainer, RenderPosition.BEFOREEND, waypointItem.element);
};

renderWaypoint(0);

/*
for (let i = 0; i < waypoints.length; i++) {

  renderElement(contentContainer, RenderPosition.BEFOREEND, new EditFormView(waypoints[i]).element);
}
*/
