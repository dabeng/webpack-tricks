export default (text = 'Hello, OrgChart') => {
  const element = document.createElement('h1');

  element.innerHTML = text;

  return element;
};
