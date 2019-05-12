import * as Tools from "./tools";
import { toPercentage, toPx } from "../utils";
import { TOOLBAR, FOOTBAR } from "../constants";

/**
 * Initilize tool bar of editor.
 *
 */
export const initToolBar = () => {
   const textArea = document.getElementById(TOOLBAR.TEXTAREA_ID);

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
   toolBar.setAttribute("id", TOOLBAR.ID);

   textArea.insertAdjacentElement("beforeBegin", toolBar);

   Tools.addHeadingTypeList(toolBar);
   Tools.addFontList(toolBar);
   Tools.addFontSizeList(toolBar);
   Tools.addBoldBtn(toolBar);
   Tools.addItalicBtn(toolBar);
   Tools.addUnderlineBtn(toolBar);
   Tools.addStrikeBtn(toolBar);
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
