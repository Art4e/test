export const getHtmlEl = (nameTagEl, ...arrayAtr) => {

  const objAttribEl = arrayAtr.filter(el => {
    if (isObject(el)) return el;
  })[ 0 ];

  let tegContent = arrayAtr.filter(el => {
    if (!isObject(el) && typeof (el) === `string`) return el;
  })[ 0 ];

  if (tegContent === undefined) tegContent = ``;

  const htmlEl = document.createElement(nameTagEl);
  htmlEl.textContent = tegContent;

  if (objAttribEl) {
    for (const key in objAttribEl) htmlEl.setAttribute(key, objAttribEl[ key ]);
  }

  return htmlEl;
};

const isObject = (value) => {
  return (!!value) && (value.constructor === Object);
};