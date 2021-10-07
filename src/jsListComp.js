import jsData from './data-js.xml';

export default () => {
  const element = document.createElement('ul');

  element.innerHTML = jsData.frameworks.framework.map(item => `
    <li>
      ${item.name[0]} -- ${item.description[0]}
    </li>
  `).join('');

  return element;
};
