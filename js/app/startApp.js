import {
  getData
} from '../re-export.js';

export const startApp = (wrapEl, dellId = false) => {
  return getData('https://conf.ontico.ru/api/conferences/forCalendar.json');
};