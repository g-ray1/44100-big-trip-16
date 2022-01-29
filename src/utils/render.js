import AbstractViewClass from '../view/abstract-view-class';

const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend'
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const renderElement = (container, place, element) => {
  const parent = container instanceof AbstractViewClass ? container.element : container;
  const child = element instanceof AbstractViewClass ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;
    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;
    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};

const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof AbstractViewClass ? newElement.element : newElement;
  const oldChild = oldElement instanceof AbstractViewClass ? oldElement.element : oldElement;

  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractViewClass)) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

export { renderElement, createElement, RenderPosition, replace, remove};
