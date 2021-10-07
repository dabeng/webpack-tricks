import cssData from './data-css.csv';

export default () => {
  const element = document.createElement('ul');

  element.innerHTML = cssData.map(item => `
    <li>
      ${item[0]} -- ${item[1]}
    </li>
  `).join('');

  return element;
};
