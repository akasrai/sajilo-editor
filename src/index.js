import "@babel/polyfill";
import { initToolBar } from "./tools";
import { TOOLBAR } from "./constants";

import "./assets/css/icon.css";
import "./assets/css/style.css";

const SajiloEditor = {
   init(props) {
      const parent = document.querySelector(props.selector);
      const editor = document.createElement("div");

      parent.style.display = "none";
      editor.className = "sajilo-editor";
      editor.setAttribute("contenteditable", true);
      editor.setAttribute("id", TOOLBAR.TEXTAREA_ID);

      parent.insertAdjacentElement("afterEnd", editor);

      initToolBar(editor);
   }
};

window.SajiloEditor = SajiloEditor;
