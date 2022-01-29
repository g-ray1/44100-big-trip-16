import {renderElement, RenderPosition, replace} from './utils/render.js';
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

renderElement(menuContainer, RenderPosition.BEFOREEND, new MenuView());
renderElement(filtersContainer, RenderPosition.BEFOREEND, new FiltrationView());
renderElement(contentContainer, RenderPosition.BEFOREEND, new SortingView());
renderElement(contentContainer, RenderPosition.BEFOREEND, new WaypointsList());

const waypointsContainer = document.querySelector('.trip-events__list');

const renderWaypoint = (counter) => {
  const waypointItem = new WaypointView(waypoints[counter]);
  const editForm = new EditFormView(waypoints[counter]);

  const openEditForm = () => {
    replace(editForm, waypointItem);
  };

  const closeEditForm = () => {
    replace(waypointItem, editForm);
  };

  waypointItem.setClickHandler(() => {
    openEditForm();
  });

  editForm.setClickHandler(() => {
    closeEditForm();
  });

  editForm.setSubmitHandler(() => {
    closeEditForm();
  });

  renderElement(waypointsContainer, RenderPosition.BEFOREEND, waypointItem);
};

for (let i = 0; i < waypoints.length; i++) {
  renderWaypoint(i);
}
