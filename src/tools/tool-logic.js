import { TOOLBAR, ID, CLASS, ELEMENT } from '../constants';

export const createTool = (prop) => {
  const elem = document.createElement(prop.type);
  elem.setAttribute('id', prop.id || '');
  elem.className = prop.className || '';

  if (prop.list) elem.setAttribute('list', prop.list);

  if (prop.type === ELEMENT.SELECT)
    elem.onchange = function (e) {
      handleToolAction(e);
    };
  else
    elem.onclick = function (e) {
      if (
        prop.id === ID.JUSTIFY_LEFT_BTN ||
        prop.id === ID.JUSTIFY_RIGHT_BTN ||
        prop.id === ID.JUSTIFY_CENTER_BTN ||
        prop.id === ID.JUSTIFY_FULL_BTN
      )
        unsetActiveAlignment();

      if (prop.setActive) setActive(elem);
      handleToolAction(e);
    };

  prop.parent.appendChild(elem);

  return elem;
};

export const addSelectOption = (parent, options) => {
  for (let key in options) {
    const option = document.createElement('option');
    option.value = key;
    option.text = options[key];
    parent.appendChild(option);
  }
};

const setActive = (elem) => {
  if (elem.classList) {
    elem.classList.toggle(CLASS.ACTIVE_BTN);
  } else {
    // For IE9
    let classes = elem.className.split(' ');
    let i = classes.indexOf(CLASS.ACTIVE_BTN);

    if (i >= 0) classes.splice(i, 1);
    else classes.push(CLASS.ACTIVE_BTN);
    elem.className = classes.join(' ');
  }
};

const unsetActiveAlignment = () => {
  const alignments = [
    ID.JUSTIFY_FULL_BTN,
    ID.JUSTIFY_LEFT_BTN,
    ID.JUSTIFY_RIGHT_BTN,
    ID.JUSTIFY_CENTER_BTN,
  ];

  alignments.forEach((alignment) => {
    document.getElementById(alignment).classList.remove(CLASS.ACTIVE_BTN);
  });
};

export const selectParent = (parent) => {
  const selectTagParent = document.createElement('div');

  selectTagParent.className = CLASS.SELECT_TAG_PARENT;
  parent.appendChild(selectTagParent);

  return selectTagParent;
};

export const addSeperator = (parent) => {
  const seperator = document.createElement('span');
  seperator.style.color = '#ababab';
  seperator.innerHTML = TOOLBAR.SEPERATOR;
  seperator.style.verticalAlign = 'sub';

  parent.insertAdjacentElement('afterEnd', seperator);
};

const handleToolAction = (event) => {
  document.getElementById(ID.TEXTAREA).focus();

  switch (event.target.id) {
    case ID.BOLD_BTN:
      document.execCommand('bold');
      break;

    case ID.ITALIC_BTN:
      document.execCommand('italic');
      break;

    case ID.UNDERLINE_BTN:
      document.execCommand('underline');
      break;

    case ID.STRIKE_BTN:
      document.execCommand('strikethrough');
      break;

    case ID.HEADING_TYPE:
      formatTextBlock(event.target.value);
      break;

    case ID.FONT_SIZE_LIST:
      document.execCommand('fontSize', false, event.target.value);
      break;

    case ID.QUOTES_BTN:
      wrapTextAsQuotes();
      break;
    case ID.JUSTIFY_LEFT_BTN:
    case ID.JUSTIFY_FULL_BTN:
    case ID.JUSTIFY_RIGHT_BTN:
    case ID.JUSTIFY_CENTER_BTN:
      formatTextAlignment(event.target.id);
      break;
    case ID.REMOVE_FORMAT:
      removeTextFormat();
      break;

    default:
      return;
  }
};

const formatTextBlock = (tag) => {
  document.execCommand('formatBlock', false, `<${tag}>`);
};

const formatTextAlignment = (alignment) => {
  document.execCommand(alignment);
};

const removeTextFormat = () => {
  const editor = document.getElementById(ID.TEXTAREA);
  editor.innerHTML = editor.innerText || editor.textContent;
};

const wrapTextAsQuotes = () => {
  const wrapper = document.createElement('blockquote');
  const selection = window.getSelection().toString();
  wrapper.classList = 'sajilo-block-quotes';
  wrapper.innerHTML = `${selection}&nbsp`;

  document.execCommand('insertHTML', false, wrapper.outerHTML);
  document.execCommand('italic');
};
