/**
 * Add px as unit to value.
 *
 * @param {Number} value
 */
export const toPx = value => {
   return `${value}px`;
};

/**
 * Add % as unit to value.
 *
 * @param {Number} value
 */
export const toPercentage = value => {
   return `${value}%`;
};

/**
 * Adds option to select element.
 *
 * @param {Object} parent
 * @param {Object} options
 */
export const addSelectOption = (parent, options) => {
   for (let key in options) {
      const option = document.createElement("option");
      option.value = key;
      option.text = options[key];
      parent.appendChild(option);
   }
};
