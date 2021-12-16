import {
  getHtmlEl,
  getData,
  createCard
} from './re-export.js';

const isertData = async () => {
  const containerEl = document.querySelector(`#app`);
  const itemsEl = getHtmlEl('ul',{class: 'container calendar-events__container'});
  let htmlEl = '';
  const data = await getData();

  for (const card of data.result) {
    htmlEl += createCard(card);
  }

  itemsEl.innerHTML = htmlEl;
  containerEl.append(itemsEl);
};

isertData();