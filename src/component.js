import _ from 'lodash';

export default (text = 'JavaScript') => {
  const element = document.createElement('h1');

  element.innerHTML = _.join([text, ':)'], ' ');

  return element;
};
