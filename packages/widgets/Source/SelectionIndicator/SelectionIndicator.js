import {
  defined,
  destroyObject,
  DeveloperError,
  getElement,
} from "@cesium/engine";
import knockout from "../ThirdParty/knockout.js";
import SelectionIndicatorViewModel from "./SelectionIndicatorViewModel.js";

/**
 * A widget for displaying an indicator on a selected object.
 *
 * @alias SelectionIndicator
 * @constructor
 *
 * @param {Element|string} container The DOM element or ID that will contain the widget.
 * @param {Scene} scene The Scene instance to use.
 *
 * @exception {DeveloperError} Element with id "container" does not exist in the document.
 */
function SelectionIndicator(container, scene) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(container)) {
    throw new DeveloperError("container is required.");
  }
  //>>includeEnd('debug')

  container = getElement(container);

  this._container = container;

  const el = document.createElement("div");
  el.className = "cesium-selection-wrapper";
  el.setAttribute(
    "data-bind",
    '\
style: { "top" : _screenPositionY, "left" : _screenPositionX },\
css: { "cesium-selection-wrapper-visible" : isVisible }'
  );
  container.appendChild(el);
  this._element = el;

  const svgNS = "http://www.w3.org/2000/svg";
  // const path =
  //   "M -34 -34 L -34 -11.25 L -30 -15.25 L -30 -30 L -15.25 -30 L -11.25 -34 L -34 -34 z M 11.25 -34 L 15.25 -30 L 30 -30 L 30 -15.25 L 34 -11.25 L 34 -34 L 11.25 -34 z M -34 11.25 L -34 34 L -11.25 34 L -15.25 30 L -30 30 L -30 15.25 L -34 11.25 z M 34 11.25 L 30 15.25 L 30 30 L 15.25 30 L 11.25 34 L 34 34 L 34 11.25 z"; // original indicator

  const width = 160;
  const height = 160;
  const radius = 13;

  const path = `M 0, 0
  m -${radius}, 0
  a ${radius},${radius} 0 1,0 ${radius * 2},0
  a ${radius},${radius} 0 1,0 -${radius * 2},0`;

  const svg = document.createElementNS(svgNS, "svg:svg");
  svg.setAttribute("width", width); // sets the width and height of the viewbox
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`); // 'canvas' size

  const group = document.createElementNS(svgNS, "g");
  group.setAttribute("transform", `translate(80, 80)`); // translates canvas within the width & height
  svg.appendChild(group);

  const pathElement = document.createElementNS(svgNS, "path");
  pathElement.setAttribute("data-bind", "attr: { transform: _transform }");
  pathElement.setAttribute("d", path);
  group.appendChild(pathElement);

  el.appendChild(svg);

  const viewModel = new SelectionIndicatorViewModel(
    scene,
    this._element,
    this._container
  );
  this._viewModel = viewModel;

  knockout.applyBindings(this._viewModel, this._element);

  console.log("Clicked!");
}

Object.defineProperties(SelectionIndicator.prototype, {
  /**
   * Gets the parent container.
   * @memberof SelectionIndicator.prototype
   *
   * @type {Element}
   */
  container: {
    get: function () {
      return this._container;
    },
  },

  /**
   * Gets the view model.
   * @memberof SelectionIndicator.prototype
   *
   * @type {SelectionIndicatorViewModel}
   */
  viewModel: {
    get: function () {
      return this._viewModel;
    },
  },
});

/**
 * @returns {boolean} true if the object has been destroyed, false otherwise.
 */
SelectionIndicator.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.  Should be called if permanently
 * removing the widget from layout.
 */
SelectionIndicator.prototype.destroy = function () {
  const container = this._container;
  knockout.cleanNode(this._element);
  container.removeChild(this._element);
  return destroyObject(this);
};
export default SelectionIndicator;
