import {
  ID,
  ICON,
  FONTS,
  CLASS,
  ELEMENT,
  FONT_SIZE,
  HEADING_TYPES,
} from '../constants';

import {
  createTool,
  selectParent,
  addSeperator,
  addSelectOption,
} from './tool-logic';
import { toPx } from '../utils';

export const addHeadingTypeList = (parent) => {
  const selectTagParent = selectParent(parent);
  const headingTypeList = createTool({
    id: ID.HEADING_TYPE,
    type: ELEMENT.SELECT,
    parent: selectTagParent,
    className: CLASS.SELECT_TAG,
  });

  selectTagParent.style.width = toPx(100);
  addSeperator(selectTagParent);
  headingTypeList.title = 'Paragraph Format';
  addSelectOption(headingTypeList, HEADING_TYPES);
};

export const addFontList = (parent) => {
  const selectTagParent = selectParent(parent);
  const fontList = createTool({
    id: ID.FONT_LIST,
    type: ELEMENT.SELECT,
    parent: selectTagParent,
    className: CLASS.SELECT_TAG,
  });
  addSeperator(selectTagParent);
  fontList.title = 'Font Family';
  addSelectOption(fontList, FONTS);
};

export const addFontSizeList = (parent) => {
  const selectTagParent = selectParent(parent);
  const fontSizeList = createTool({
    id: ID.FONT_SIZE_LIST,
    type: ELEMENT.SELECT,
    parent: selectTagParent,
    className: CLASS.SELECT_TAG,
  });

  selectTagParent.style.width = toPx(40);
  fontSizeList.title = 'Font Size';
  addSeperator(selectTagParent);
  addSelectOption(fontSizeList, FONT_SIZE);
};

export const addBoldBtn = (parent) => {
  const boldBtn = createTool({
    parent: parent,
    setActive: true,
    id: ID.BOLD_BTN,
    type: ELEMENT.BUTTON,
  });

  boldBtn.title = 'Bold (Ctrl + B)';
  boldBtn.innerHTML = ICON.BOLD;
};

export const addItalicBtn = (parent) => {
  const italicBtn = createTool({
    parent: parent,
    setActive: true,
    id: ID.ITALIC_BTN,
    type: ELEMENT.BUTTON,
  });

  italicBtn.title = 'Italic (Ctrl + I)';
  italicBtn.innerHTML = ICON.ITALIC;
};

export const addUnderlineBtn = (parent) => {
  const underlineBtn = createTool({
    parent: parent,
    setActive: true,
    type: ELEMENT.BUTTON,
    id: ID.UNDERLINE_BTN,
  });

  underlineBtn.title = 'Underline (Ctrl + U)';
  underlineBtn.innerHTML = ICON.UNDERLINE;
};

export const addStrikeBtn = (parent) => {
  const strikeBtn = createTool({
    parent: parent,
    setActive: true,
    id: ID.STRIKE_BTN,
    type: ELEMENT.BUTTON,
  });
  strikeBtn.innerHTML = ICON.STRIKE;
  strikeBtn.title = 'Strike';
};

export const addTextColorBtn = (parent) => {
  const textColor = createTool({
    parent: parent,
    setActive: true,
    type: ELEMENT.BUTTON,
    id: ID.TEXT_COLOR_BTN,
    className: ICON.TEXT_COLOR,
  });

  textColor.title = 'Color';
  addSeperator(textColor);
};

export const addAlignLeftBtn = (parent) => {
  const alignLeftBtn = createTool({
    parent: parent,
    setActive: true,
    type: ELEMENT.BUTTON,
    id: ID.JUSTIFY_LEFT_BTN,
    className: ICON.JUSTIFY_LEFT,
  });

  alignLeftBtn.title = 'Align Left';
};

export const addAlignRightBtn = (parent) => {
  const alignRightBtn = createTool({
    parent: parent,
    setActive: true,
    type: ELEMENT.BUTTON,
    id: ID.JUSTIFY_RIGHT_BTN,
    className: ICON.JUSTIFY_RIGHT,
  });

  alignRightBtn.title = 'Align Right';
};

export const addAlignCenterBtn = (parent) => {
  const alignCenterBtn = createTool({
    parent: parent,
    setActive: true,
    type: ELEMENT.BUTTON,
    id: ID.JUSTIFY_CENTER_BTN,
    className: ICON.JUSTIFY_CENTER,
  });

  alignCenterBtn.title = 'Align Center';
};

export const addAlignJustifyBtn = (parent) => {
  const alignJustifyBtn = createTool({
    parent: parent,
    setActive: true,
    type: ELEMENT.BUTTON,
    id: ID.JUSTIFY_FULL_BTN,
    className: ICON.JUSTIFY_FULL,
  });

  addSeperator(alignJustifyBtn);
  alignJustifyBtn.title = 'Justify';
};

export const addRemoveFormatBtn = (parent) => {
  const removeFormat = createTool({
    parent: parent,
    setActive: false,
    type: ELEMENT.BUTTON,
    id: ID.REMOVE_FORMAT,
    className: ICON.REMOVE_FORMAT,
  });

  addSeperator(removeFormat);
  removeFormat.title = 'Remove Format';
};

export const addQuotesBtn = (parent) => {
  const quotesBtn = createTool({
    parent: parent,
    setActive: true,
    type: ELEMENT.BUTTON,
    id: ID.QUOTES_BTN,
  });

  quotesBtn.title = 'Quotes';
  quotesBtn.innerHTML = ICON.QUOTES;
};

export const addInlineTools = (modifier) => {
  const inlineTool = document.createElement('div');
  inlineTool.classList.add(
    ELEMENT.INLINE_TOOL,
    `${ELEMENT.INLINE_TOOL}--${modifier}`
  );

  addBoldBtn(inlineTool);
  addItalicBtn(inlineTool);
  addUnderlineBtn(inlineTool);

  return inlineTool;
};
