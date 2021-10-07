import component from './component';

import jsListComp from './jsListComp';
import cssListComp from './cssListComp';
import buildListComp from './buildListComp';

import './style.css';

import './style2.css';

import './image-component';

import jsData from './data-js.xml';
import cssData from './data-css.csv';
import buildData from './data-build.json';

console.log(jsData);
console.log(cssData);
console.log(buildData);

document.body.appendChild(component());
document.body.appendChild(jsListComp());
document.body.appendChild(cssListComp());
document.body.appendChild(buildListComp());
