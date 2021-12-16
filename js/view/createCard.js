export const createCard = (data) => {
  const cardEl = `
  <li class="calendar-events__card card-events">
    <p class="card-events__date">${data.date_range}</p>
    <img class="card-events__logo" src=${data.logo} alt="Логотип события ${data.name}">
    <h2 class="card-events__header">
      ${data.name}
    </h2>
    <p class="card-events__description">
      ${data.brief}
    </p>
    <p class="card-events__address">
      <svg class="card-events__svg" viewBox="0 0 13 18">
        <use xlink:href="./img/sprite.svg#icon__label"></use>
      </svg>
      <span>${data.location}</span>
    </p>
    <a class="card-events__link" href="#">
      <svg class="card-events__svg" viewBox="0 0 13 13">
        <use xlink:href="./img/sprite.svg#icon__link"></use>
      </svg>
      <span>highload.ru</span>
    </a>
    <div class="card-events__footer" >
      <button class="card-events__btn btn">Купить билет</button>
      <a class="card-events__detail" href=${data.uri}>Подробнее</a>
    </div>
  </li>`;

  return cardEl;
};