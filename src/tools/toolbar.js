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
   toolBar.style.background = "#fff";
   toolBar.style.border = "1px solid #c5c5c5";
   toolBar.style.padding = toPx(2);
   toolBar.setAttribute("id", ID.TOOLBAR);

   textArea.insertAdjacentElement("beforeBegin", toolBar);

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
   const footerBar = document.createElement("div");

   footerBar.style.padding = toPx(2);
   footerBar.style.background = "#fff";
   footerBar.setAttribute("id", FOOTBAR.ID);
   footerBar.style.width = toPercentage(100);
   footerBar.style.border = "1px solid #c5c5c5";

   textArea.insertAdjacentElement("afterEnd", footerBar);
};
