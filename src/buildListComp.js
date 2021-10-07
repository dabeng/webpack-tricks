import buildData from './data-build.json';

export default () => {
  const element = document.createElement('ul');

  element.innerHTML = buildData.map(item => `
    <li>
      ${item.name} -- ${item.description}
    </li>
  `).join('');

  return element;
};
