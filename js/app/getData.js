export const getData = async () => {
  return await fetch('https://conf.ontico.ru/api/conferences/forCalendar.json')
  .then(res => res.json());
};