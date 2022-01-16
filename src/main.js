import {renderTemplate, RenderPosition} from './render.js';
import {createMenuTemplate} from './view/menu-view.js';
import {createFilterTemplate} from './view/filter-view.js';
import {createSortingTemplate} from './view/sorting-view.js';
import {createWaypointTemplate} from './view/waypoint-view.js';
import {createEditFormTemplate} from './view/edit-form-view.js';
import {createAddFormTemplate} from './view/add-form-view.js';

const menu = document.querySelector('.trip-controls__navigation');
const filters = document.querySelector('.trip-controls__filters');
const content = document.querySelector('.trip-events');

const TASK_COUNT = 3;

renderTemplate(menu, RenderPosition.BEFOREEND, createMenuTemplate());
renderTemplate(filters, RenderPosition.BEFOREEND, createFilterTemplate());
renderTemplate(content, RenderPosition.BEFOREEND, createSortingTemplate());
renderTemplate(content, RenderPosition.BEFOREEND, createEditFormTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  renderTemplate(content, RenderPosition.BEFOREEND, createWaypointTemplate());
}

renderTemplate(content, RenderPosition.BEFOREEND, createAddFormTemplate());
