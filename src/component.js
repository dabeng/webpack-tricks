export default (text = 'JavaScript') => {
  const element = document.createElement('h1');

  element.innerHTML = text;

  return element;
};
