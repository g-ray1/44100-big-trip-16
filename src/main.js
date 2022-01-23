import {renderTemplate, RenderPosition} from './render.js';
import {createMenuTemplate} from './view/menu-view.js';
import {createFilterTemplate} from './view/filter-view.js';
import {createSortingTemplate} from './view/sorting-view.js';
import {createWaypointsContainer} from './view/waypoint-view.js';
import {createWaypointTemplate} from './view/waypoint-view.js';
import {createEditFormTemplate} from './view/edit-form-view.js';
import {getRandomeWaypointData} from './mocks/generate-waypoint-data.js';

const menu = document.querySelector('.trip-controls__navigation');
const filters = document.querySelector('.trip-controls__filters');
const content = document.querySelector('.trip-events');

const WAYPOINTS_COUNT = 20;
const waypoints = Array.from({length: WAYPOINTS_COUNT}, getRandomeWaypointData);

renderTemplate(menu, RenderPosition.BEFOREEND, createMenuTemplate());
renderTemplate(filters, RenderPosition.BEFOREEND, createFilterTemplate(waypoints));
renderTemplate(content, RenderPosition.BEFOREEND, createSortingTemplate());
renderTemplate(content, RenderPosition.BEFOREEND, createEditFormTemplate(waypoints[0]));
renderTemplate(content, RenderPosition.BEFOREEND, createWaypointsContainer());

const waypointsContainer = document.querySelector('.trip-events__list');

for (let i = 1; i < waypoints.length; i++) {
  renderTemplate(waypointsContainer, RenderPosition.BEFOREEND, createWaypointTemplate(waypoints[i]));
}
