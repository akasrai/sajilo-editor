import * as Tools from './tools';
import { ID, FOOTBAR } from '../constants';
import { toPercentage, toPx, getCursorXY } from '../utils';

/**
 * Initilize tool bar of editor.
 *
 */
export const initToolBar = parent => {
  const textArea = parent;

  addToolBar(textArea);
  addFooterBar(textArea);
  initInlineTools(textArea);
};

/**
 * Adds tool bar to top of editor.
 *
 * @param {Object} textArea
 */
const addToolBar = textArea => {
  const toolBar = document.createElement('div');

  toolBar.style.width = toPercentage(100);
  toolBar.style.background = '#fff';
  toolBar.style.border = '1px solid #c5c5c5';
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
};

/**
 * Add footer bar at the end of textarea.
 *
 * @param {Object} textArea
 */
const addFooterBar = textArea => {
  const footerBar = document.createElement('div');

  footerBar.style.padding = toPx(2);
  footerBar.style.background = '#fff';
  footerBar.setAttribute('id', FOOTBAR.ID);
  footerBar.style.width = toPercentage(100);
  footerBar.style.border = '1px solid #c5c5c5';

  textArea.insertAdjacentElement('afterEnd', footerBar);
};

/**
 * Initialize inline toolbar.
 *
 * @param {Object} e
 */
const initInlineTools = editor => {
  const { offsetLeft, offsetWidth, scrollLeft, scrollTop } = editor;
  console.log(offsetLeft, offsetWidth, screenTop);

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

  document.addEventListener('selectionchange', function () {
    const userSelection = window.getSelection();
    const range = userSelection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const text = range.toString();


    if (!editor.__IS_SHOWING_INLINE_TOOL && text.length > 1) {
      showInlineToolBar();
    }
    if (!!editor.__IS_SHOWING_INLINE_TOOL && text.length < 1) {
      hideInlineToolBar();
    }

    if (!editor.__INLINE_TOOL) return;
    // calculate selection offset
    const left = (rect.x - offsetLeft) + editor.__INLINE_TOOL.clientWidth / 2 + rect.width / 2;
    const top = editor.clientY || screenTop;

    editor.__INLINE_TOOL && editor.__INLINE_TOOL.setAttribute(
      'style',
      `left: ${left}px; top: ${rect.y + top - 15}px`
    );
  })
};
