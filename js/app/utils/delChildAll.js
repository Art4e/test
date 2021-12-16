export const delChildAll = (parentEl) => {
  while (parentEl.firstChild) {
    parentEl.firstChild.remove();
  }
};