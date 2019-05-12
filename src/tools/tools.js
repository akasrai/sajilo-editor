import { addSelectOption } from "../utils";
import { fonts, fontSize, TOOLBAR, headingTypes } from "../constants";

/**
 * Adds wrapper to select tag.
 *
 * @param {Object} textArea
 */
const selectParent = parent => {
   const selectTagParent = document.createElement("div");

   selectTagParent.className = TOOLBAR.SELECT_TAG_PARENT;
   parent.appendChild(selectTagParent);

   return selectTagParent;
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
 * Adds seperator after tool section.
 *
 * @param {Object} parent
 */
const setSeperator = parent => {
   const seperator = document.createElement("span");
   seperator.style.color = "#ababab";
   seperator.innerHTML = TOOLBAR.SEPERATOR;

   parent.insertAdjacentElement("afterEnd", seperator);
};

/**
 * Add Heading types in toolbar.
 *
 * @param {Object} parent
 */
export const addHeadingTypeList = parent => {
   const selectTagParent = selectParent(parent);
   const headingTypeList = document.createElement("select");

   headingTypeList.className = TOOLBAR.SELECT_TAG_CLASS;
   headingTypeList.setAttribute("id", TOOLBAR.HEADING_TYPE_ID);
   selectTagParent.appendChild(headingTypeList);

   setSeperator(selectTagParent);
   addSelectOption(headingTypeList, headingTypes);
};

/**
 * Adds font list to toolbar.
 *
 * @param {Object} parent
 */
export const addFontList = parent => {
   const selectTagParent = selectParent(parent);
   const fontList = document.createElement("select");

   fontList.className = TOOLBAR.SELECT_TAG_CLASS;
   fontList.setAttribute("id", TOOLBAR.FONT_LIST_ID);
   selectTagParent.appendChild(fontList);

   setSeperator(selectTagParent);
   addSelectOption(fontList, fonts);
};

/**
 * Adds font sizes in toolbar.
 *
 * @param {Object} parent
 */
export const addFontSizeList = parent => {
   const selectTagParent = selectParent(parent);
   const fontSizeList = document.createElement("select");

   fontSizeList.className = TOOLBAR.SELECT_TAG_CLASS;
   fontSizeList.setAttribute("id", TOOLBAR.FONT_SIZE_LIST_ID);
   selectTagParent.appendChild(fontSizeList);

   setSeperator(selectTagParent);
   addSelectOption(fontSizeList, fontSize);
};

/**
 * Adds bold botton to toolbar.
 *
 * @param {Object} parent
 */
export const addBoldBtn = parent => {
   const boldBtn = document.createElement("span");

   boldBtn.setAttribute("id", TOOLBAR.BOLD_BTN_ID);
   boldBtn.innerHTML = "B";

   boldBtn.onclick = function() {
      setActive(boldBtn);
   };

   parent.appendChild(boldBtn);
};

/**
 * Adds italic botton to toolbar.
 *
 * @param {Object} parent
 */
export const addItalicBtn = parent => {
   const italicBtn = document.createElement("span");

   italicBtn.setAttribute("id", TOOLBAR.ITALIC_BTN_ID);
   italicBtn.innerHTML = "I";

   italicBtn.onclick = function() {
      setActive(italicBtn);
   };

   parent.appendChild(italicBtn);
};

/**
 * Adds underline botton to toolbar.
 *
 * @param {Object} parent
 */
export const addUnderlineBtn = parent => {
   const underlineBtn = document.createElement("span");

   underlineBtn.setAttribute("id", TOOLBAR.UNDERLINE_BTN_ID);
   underlineBtn.innerHTML = "U";

   underlineBtn.onclick = function() {
      setActive(underlineBtn);
   };

   parent.appendChild(underlineBtn);
};

/**
 * Adds strike through botton to toolbar.
 *
 * @param {Object} parent
 */
export const addStrikeBtn = parent => {
   const strikeBtn = document.createElement("span");

   strikeBtn.setAttribute("id", TOOLBAR.STRIKE_BTN_ID);
   strikeBtn.innerHTML = "&nbsp;S&nbsp;";

   strikeBtn.onclick = function() {
      setActive(strikeBtn);
   };

   parent.appendChild(strikeBtn);
   setSeperator(strikeBtn);
};
