import "@babel/polyfill";
import { ID, CLASS } from "./constants";
import { initToolBar } from "./tools";

import "./assets/css/icon.css";
import "./assets/css/style.css";
import { toPercentage } from "./utils";

const SajiloEditor = {
   init(props) {
      const editor = document.createElement("div");
      const parent = document.querySelector(props.selector);

      parent.style.display = "none";
      editor.className = CLASS.TEXTAREA;
      editor.setAttribute("id", ID.TEXTAREA);
      editor.setAttribute("contenteditable", true);

      parent.insertAdjacentElement("afterEnd", editor);

      initToolBar(editor);

      this.setActiveTool(editor);
   },

   setActiveTool(editor) {
      editor.addEventListener("keyup", () => {
         const toolStatus = this.getToolStatus();

         Object.keys(toolStatus).forEach(key => {
            toolStatus[key] === "true"
               ? document.getElementById(key).classList.add(CLASS.ACTIVE_BTN)
               : document
                    .getElementById(key)
                    .classList.remove(CLASS.ACTIVE_BTN);
         });
      });
   },

   getToolStatus() {
      return {
         boldBtn: document.queryCommandValue("bold"),
         italicBtn: document.queryCommandValue("italic"),
         underlineBtn: document.queryCommandValue("underline"),
         strikeBtn: document.queryCommandValue("strikethrough")
      };
   }
};

window.SajiloEditor = SajiloEditor;
