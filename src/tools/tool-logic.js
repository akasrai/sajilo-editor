import { TOOLBAR, ID, CLASS, ELEMENT } from "../constants";

/**
 * Creates element according to properties given.
 *
 * @param {Object} prop
 */
export const createTool = prop => {
   const elem = document.createElement(prop.type);
   elem.setAttribute("id", prop.id || "");
   elem.className = prop.className || "";

   if (prop.list) elem.setAttribute("list", prop.list);

   if (prop.type == ELEMENT.SELECT)
      elem.onchange = function(e) {
         handleToolAction(e);
      };
   else
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
      elem.classList.toggle(CLASS.ACTIVE_BTN);
   } else {
      // For IE9
      let classes = elem.className.split(" ");
      let i = classes.indexOf(CLASS.ACTIVE_BTN);

      if (i >= 0) classes.splice(i, 1);
      else classes.push(CLASS.ACTIVE_BTN);
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

   selectTagParent.className = CLASS.SELECT_TAG_PARENT;
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
   switch (event.target.id) {
      case ID.BOLD_BTN:
         document.execCommand("bold");
         break;

      case ID.ITALIC_BTN:
         document.execCommand("italic");
         break;

      case ID.UNDERLINE_BTN:
         document.execCommand("underline");
         break;

      case ID.STRIKE_BTN:
         document.execCommand("strikethrough");
         break;

      case ID.HEADING_TYPE:
         formatTextBlock(event.target.value);
         break;

      case ID.FONT_SIZE_LIST:
         document.execCommand("fontSize", false, event.target.value);
         break;

      default:
         return;
   }
};

/**
 * Formats text with given tag name.
 *
 * @param {String} tag
 */
const formatTextBlock = tag => {
   document.execCommand("formatBlock", false, `<${tag}>`);
};
