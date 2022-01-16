const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend'
};

const renderTemplate = (container, place, template) => {
  container.insertAdjacentHTML(place, template);
};

export {renderTemplate, RenderPosition};
