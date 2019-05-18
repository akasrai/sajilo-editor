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
      // this.setDefaultPasteAsPlainText(editor);
   },

   setActiveTool(editor) {
      editor.addEventListener("keyup", () => {
         const toolStatus = this.getToolStatus();

         Object.keys(toolStatus).forEach(key => {
            toolStatus[key] === true
               ? document.getElementById(key).classList.add(CLASS.ACTIVE_BTN)
               : document
                    .getElementById(key)
                    .classList.remove(CLASS.ACTIVE_BTN);
         });
      });
   },

   getToolStatus() {
      return {
         boldBtn: document.queryCommandState("bold"),
         italicBtn: document.queryCommandState("italic"),
         underlineBtn: document.queryCommandState("underline"),
         strikeBtn: document.queryCommandState("strikethrough"),

         justifyFull: document.queryCommandState("justifyFull"),
         justifyLeft: document.queryCommandState("justifyLeft"),
         justifyRight: document.queryCommandState("justifyRight"),
         justifyCenter: document.queryCommandState("justifyCenter")
      };
   },

   setDefaultPasteAsPlainText(editor) {
      editor.addEventListener("paste", e => {
         e.preventDefault();
         let text = e.clipboardData.getData("text/plain");
         document.execCommand("insertHTML", false, text);
      });
   }
};

window.SajiloEditor = SajiloEditor;
