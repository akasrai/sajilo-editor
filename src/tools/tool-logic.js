import { TOOLBAR, ELEMENT } from "../constants";

/**
 * Creates element according to properties given.
 *
 * @param {Object} prop
 */
export const createTool = prop => {
   const elem = document.createElement(prop.type);
   elem.setAttribute("id", prop.id);
   elem.className = prop.className ? prop.className : "";

   elem.onclick = function(e) {
      setActive(elem);
      handleToolAction(e);
   };

   prop.parent.appendChild(elem);

   return elem;
};

/**
 * Adds option to select element.
 *
 * @param {Object} parent
 * @param {Object} options
 */
export const addSelectOption = (parent, options) => {
   for (let key in options) {
      const option = document.createElement("option");
      option.value = key;
      option.text = options[key];
      parent.appendChild(option);
   }
};

/**
 * Set active toolbar button.
 *
 * @param {Object} elem
 */
const setActive = elem => {
   if (elem.classList) {
      elem.classList.toggle(TOOLBAR.ACTIVE_BTN);
   } else {
      // For IE9
      let classes = elem.className.split(" ");
      let i = classes.indexOf(TOOLBAR.ACTIVE_BTN);

      if (i >= 0) classes.splice(i, 1);
      else classes.push(TOOLBAR.ACTIVE_BTN);
      elem.className = classes.join(" ");
   }
};

/**
 * Adds wrapper to select tag.
 *
 * @param {Object} textArea
 */
export const selectParent = parent => {
   const selectTagParent = document.createElement("div");

   selectTagParent.className = TOOLBAR.SELECT_TAG_PARENT;
   parent.appendChild(selectTagParent);

   return selectTagParent;
};

/**
 * Adds seperator after tool section.
 *
 * @param {Object} parent
 */
export const addSeperator = parent => {
   const seperator = document.createElement("span");
   seperator.style.color = "#ababab";
   seperator.innerHTML = TOOLBAR.SEPERATOR;

   parent.insertAdjacentElement("afterEnd", seperator);
};

/**
 * Handles button action accordinf to their type.
 *
 * @param {Object} event
 */
const handleToolAction = event => {
   const editor = document.getElementById(TOOLBAR.TEXTAREA_ID);

   switch (event.target.id) {
      case TOOLBAR.BOLD_BTN_ID:
         boldTextAction();
         break;

      case TOOLBAR.ITALIC_BTN_ID:
         italicTextAction();
         break;

      case TOOLBAR.UNDERLINE_BTN_ID:
         underlineTextAction();
         break;

      case TOOLBAR.STRIKE_BTN_ID:
         strikeTextAction();
         break;

      default:
         return;
   }
};

/**
 * Bold text effect.
 *
 */
const boldTextAction = () => {
   const span = document.createElement(ELEMENT.SPAN);

   span.style.fontWeight = "bold";
   dispatchAction(span);
};

/**
 * Italic text effect.
 *
 */
const italicTextAction = () => {
   const span = document.createElement(ELEMENT.SPAN);

   span.style.fontStyle = "italic";
   dispatchAction(span);
};

/**
 * Underline text effect.
 *
 */
const underlineTextAction = () => {
   const span = document.createElement(ELEMENT.SPAN);

   span.style.textDecoration = "underline";
   dispatchAction(span);
};

/**
 * Strike text effect.
 *
 */
const strikeTextAction = () => {
   const span = document.createElement(ELEMENT.SPAN);

   span.style.textDecoration = "line-through";
   dispatchAction(span);
};

/**
 * Add style range according to action clicked.
 *
 * @param {Object} elem
 */
const dispatchAction = elem => {
   if (window.getSelection) {
      const selectedText = window.getSelection();
      if (selectedText.rangeCount) {
         const range = selectedText.getRangeAt(0).cloneRange();
         range.surroundContents(elem);
         selectedText.removeAllRanges();
         selectedText.addRange(range);
      }
   }
};
