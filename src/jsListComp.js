import jsData from './data-js.xml';

export default () => {
  const element = document.createElement('table');

  element.innerHTML = jsData.frameworks.framework.map(item => `
    <tr>
      <td>${item.name[0]}</td>
      <td>${item.description[0]}</td>
    </tr>
  `);

  return element;
};
