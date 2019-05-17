import * as Tools from "./tools";
import { ID, FOOTBAR } from "../constants";
import { toPercentage, toPx } from "../utils";

/**
 * Initilize tool bar of editor.
 *
 */
export const initToolBar = parent => {
   const textArea = parent;

   addToolBar(textArea);
   addFooterBar(textArea);
};

/**
 * Adds tool bar to top of editor.
 *
 * @param {Object} textArea
 */
const addToolBar = textArea => {
   const toolBar = document.createElement("div");

   toolBar.style.width = toPercentage(100);
   toolBar.style.background = "#efefef";
   toolBar.style.border = "1px solid #888";
   toolBar.style.padding = toPx(10);
   toolBar.setAttribute("id", ID.TOOLBAR);

   textArea.insertAdjacentElement("beforeBegin", toolBar);

   Tools.addHeadingTypeList(toolBar);
   Tools.addFontList(toolBar);
   Tools.addFontSizeList(toolBar);

   Tools.addBoldBtn(toolBar);
   Tools.addItalicBtn(toolBar);
   Tools.addUnderlineBtn(toolBar);
   Tools.addStrikeBtn(toolBar);

   Tools.addAlignLeftBtn(toolBar);
   Tools.addAlignCenterBtn(toolBar);
   Tools.addAlignRightBtn(toolBar);
   Tools.addAlignJustifyBtn(toolBar);
};

/**
 * Add footer bar at the end of textarea.
 *
 * @param {Object} textArea
 */
const addFooterBar = textArea => {
   const footerBar = document.createElement("div");

   footerBar.style.height = toPx(40);
   footerBar.style.width = toPercentage(100);
   footerBar.style.background = "#efefef";
   footerBar.style.border = "1px solid #888";
   footerBar.setAttribute("id", FOOTBAR.ID);

   textArea.insertAdjacentElement("afterEnd", footerBar);
};
