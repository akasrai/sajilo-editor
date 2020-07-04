import * as Tools from './tools';
import { ID, FOOTBAR } from '../constants';
import { toPercentage, toPx, getCursorXY } from '../utils';

export const initToolBar = (parent) => {
  const textArea = parent;

  addToolBar(textArea);
  addFooterBar(textArea);

  textArea.onkeyup = function (e) {
    initInlineTools(e);
  };
  textArea.addEventListener('mouseup', initInlineTools);
};

const addToolBar = (textArea) => {
  const toolBar = document.createElement('div');

  toolBar.style.width = toPercentage(100);
  toolBar.style.background = '#fff';
  toolBar.style.padding = toPx(2);
  toolBar.setAttribute('id', ID.TOOLBAR);

  textArea.insertAdjacentElement('beforeBegin', toolBar);

  Tools.addHeadingTypeList(toolBar);
  // Tools.addFontList(toolBar);
  Tools.addFontSizeList(toolBar);

  Tools.addBoldBtn(toolBar);
  Tools.addItalicBtn(toolBar);
  Tools.addUnderlineBtn(toolBar);
  Tools.addStrikeBtn(toolBar);
  Tools.addTextColorBtn(toolBar);

  Tools.addAlignLeftBtn(toolBar);
  Tools.addAlignCenterBtn(toolBar);
  Tools.addAlignRightBtn(toolBar);
  Tools.addAlignJustifyBtn(toolBar);

  Tools.addRemoveFormatBtn(toolBar);

  Tools.addQuotesBtn(toolBar);
};

const addFooterBar = (textArea) => {
  const footerBar = document.createElement('div');

  footerBar.style.padding = toPx(2);
  footerBar.style.background = '#fff';
  footerBar.setAttribute('id', FOOTBAR.ID);
  footerBar.style.width = toPercentage(100);

  textArea.insertAdjacentElement('afterEnd', footerBar);
};

const initInlineTools = (e) => {
  const { currentTarget: editor } = e;
  const { offsetLeft, offsetWidth, scrollLeft, scrollTop } = editor;

  let selectionEnd = 0,
    selectionStart = 0;

  if (window.getSelection) {
    const userSelection = window.getSelection();
    selectionEnd = userSelection.focusOffset;
    selectionStart = userSelection.anchorOffset;
  }

  const showInlineToolBar = () => {
    editor.__IS_SHOWING_INLINE_TOOL = true;
    editor.__INLINE_TOOL = Tools.addInlineTools('selection');
    document.body.appendChild(editor.__INLINE_TOOL);
  };

  const hideInlineToolBar = () => {
    if (editor.__INLINE_TOOL) {
      editor.__IS_SHOWING_INLINE_TOOL = false;
      document.body.removeChild(editor.__INLINE_TOOL);
      editor.__INLINE_TOOL = null;
    }
  };

  if (!editor.__IS_SHOWING_INLINE_TOOL && selectionStart !== selectionEnd) {
    showInlineToolBar();
  }

  if (editor.__IS_SHOWING_INLINE_TOOL && selectionStart === selectionEnd) {
    hideInlineToolBar();
  }

  if (editor.__IS_SHOWING_INLINE_TOOL) {
    const left = e.clientX || offsetLeft;
    const top = e.clientY || screenTop;

    editor.__INLINE_TOOL.setAttribute(
      'style',
      `left: ${left}px; top: ${top - 15}px`
    );
  }
};
