import {
   createTool,
   selectParent,
   addSeperator,
   addSelectOption
} from "./tool-logic";

import {
   ICON,
   FONTS,
   ELEMENT,
   TOOLBAR,
   FONT_SIZE,
   HEADING_TYPES
} from "../constants";

/**
 * Add Heading types in toolbar.
 *
 * @param {Object} parent
 */
export const addHeadingTypeList = parent => {
   const selectTagParent = selectParent(parent);
   const headingTypeList = createTool({
      type: ELEMENT.SELECT,
      parent: selectTagParent,
      id: TOOLBAR.HEADING_TYPE_ID,
      className: TOOLBAR.SELECT_TAG_CLASS
   });

   addSeperator(selectTagParent);
   addSelectOption(headingTypeList, HEADING_TYPES);
};

/**
 * Adds font list to toolbar.
 *
 * @param {Object} parent
 */
export const addFontList = parent => {
   const selectTagParent = selectParent(parent);
   const fontList = createTool({
      type: ELEMENT.SELECT,
      parent: selectTagParent,
      id: TOOLBAR.FONT_LIST_ID,
      className: TOOLBAR.SELECT_TAG_CLASS
   });

   addSeperator(selectTagParent);
   addSelectOption(fontList, FONTS);
};

/**
 * Adds font sizes in toolbar.
 *
 * @param {Object} parent
 */
export const addFontSizeList = parent => {
   const selectTagParent = selectParent(parent);
   const fontSizeList = createTool({
      type: ELEMENT.SELECT,
      parent: selectTagParent,
      id: TOOLBAR.FONT_SIZE_LIST_ID,
      className: TOOLBAR.SELECT_TAG_CLASS
   });

   addSeperator(selectTagParent);
   addSelectOption(fontSizeList, FONT_SIZE);
};

/**
 * Adds bold botton to toolbar.
 *
 * @param {Object} parent
 */
export const addBoldBtn = parent => {
   const boldBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: TOOLBAR.BOLD_BTN_ID
   });
   boldBtn.innerHTML = ICON.BOLD;
};

/**
 * Adds italic botton to toolbar.
 *
 * @param {Object} parent
 */
export const addItalicBtn = parent => {
   const italicBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: TOOLBAR.ITALIC_BTN_ID
   });
   italicBtn.innerHTML = ICON.ITALIC;
};

/**
 * Adds underline botton to toolbar.
 *
 * @param {Object} parent
 */
export const addUnderlineBtn = parent => {
   const underlineBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: TOOLBAR.UNDERLINE_BTN_ID
   });
   underlineBtn.innerHTML = ICON.UNDERLINE;
};

/**
 * Adds strike through botton to toolbar.
 *
 * @param {Object} parent
 */
export const addStrikeBtn = parent => {
   const strikeBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: TOOLBAR.STRIKE_BTN_ID
   });
   strikeBtn.innerHTML = ICON.STRIKE;
   addSeperator(strikeBtn);
};

/**
 * Adds align left button.
 *
 * @param {Object} parent
 */
export const addAlignLeftBtn = parent => {
   const alignLeftBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      className: ICON.ALIGN_LEFT,
      id: TOOLBAR.ALIGN_LEFT_BTN_ID
   });
};

/**
 * Adds align right button.
 *
 * @param {Object} parent
 */
export const addAlignRightBtn = parent => {
   const alignRightBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      className: ICON.ALIGN_RIGHT,
      id: TOOLBAR.ALIGN_RIGHT_BTN_ID
   });
};

/**
 * Adds align center button.
 *
 * @param {Object} parent
 */
export const addAlignCenterBtn = parent => {
   const alignCenterBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      className: ICON.ALIGN_CENTER,
      id: TOOLBAR.ALIGN_CENTER_BTN_ID
   });
};

/**
 * Adds jsutify button.
 *
 * @param {Object} parent
 */
export const addAlignJustifyBtn = parent => {
   const alignJustifyBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      className: ICON.ALIGN_JUSTIFY,
      id: TOOLBAR.ALIGN_JUSTIFY_BTN_ID
   });

   addSeperator(alignJustifyBtn);
};
