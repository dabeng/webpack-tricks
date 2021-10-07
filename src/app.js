import component from './component';

import jsListComp from './jsListComp';
import cssListComp from './cssListComp';
import buildListComp from './buildListComp';

import './style.css';

import './style2.css';

import './image-component';

document.body.appendChild(component());
document.body.appendChild(jsListComp());
document.body.appendChild(cssListComp());
document.body.appendChild(buildListComp());
