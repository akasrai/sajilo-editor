import { TOOLBAR } from "../constants";
import { toPercentage, toPx } from "../utils";

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

   toolBar.style.height = toPx(80);
   toolBar.style.width = toPercentage(100);
   toolBar.style.background = "#efefef";
   toolBar.style.border = "1px solid #888";

   textArea.insertAdjacentElement("beforeBegin", toolBar);
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

   textArea.insertAdjacentElement("afterEnd", footerBar);
};
