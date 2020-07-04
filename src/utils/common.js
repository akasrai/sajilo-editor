import { addBoldBtn } from '../tools';
import { ID } from '../constants';

/**
 * Add px as unit to value.
 *
 * @param {Number} value
 */
export const toPx = (value) => {
  return `${value}px`;
};

/**
 * Add % as unit to value.
 *
 * @param {Number} value
 */
export const toPercentage = (value) => {
  return `${value}%`;
};

/**
 * returns x, y coordinates for absolute positioning of a span within a given text input
 * at a given selection point
 * @param {object} editor - the input element to obtain coordinates for
 * @param {number} selectionPoint - the selection point for the input
 */
export const getCursorXY = (editor, selectionPoint) => {
  const { offsetLeft: inputX, offsetTop: inputY } = editor;

  // create a dummy element that will be a clone of our input
  const div = document.createElement('div');
  // get the computed style of the input and clone it onto the dummy element
  const copyStyle = getComputedStyle(editor);
  for (const prop of copyStyle) {
    div.style[prop] = copyStyle[prop];
  }

  const editorData = editor.innerHTML;
  // set the div content to that of the textarea up until selection
  const textContent = editorData.substring(0, selectionPoint);
  // set the text content of the dummy element div
  div.textContent = textContent;
  // create a marker element to obtain caret position
  const span = document.createElement('span');
  // give the span the textContent of remaining content so that the recreated dummy element is as close as possible
  span.textContent = editorData.substring(selectionPoint) || '.';
  // append the span marker to the div
  div.appendChild(span);
  // append the dummy element to the body
  editor.appendChild(div);
  // get the marker position, this is the caret position top and left relative to the input
  const { offsetLeft: spanX, offsetTop: spanY } = span;
  console.log(spanX, spanY);
  // lastly, remove that dummy element
  // NOTE:: can comment this out for debugging purposes if you want to see where that span is rendered
  editor.removeChild(div);
  // return an object with the x and y of the caret. account for input positioning so that you don't need to wrap the input
  return {
    x: inputX + spanX,
    y: inputY + spanY,
  };
};
