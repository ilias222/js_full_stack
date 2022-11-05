"use strict";

const lloremText = document.querySelector('.lorem_text__item');
const lloremContainer = document.querySelector('.lorem_text__itemSucces');
lloremContainer.textContent = lloremText.textContent.replace(/'+/g, '"');
lloremContainer.textContent = lloremText.textContent.replace(/'\B|\B'/g, '"');