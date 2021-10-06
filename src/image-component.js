import image from './logo.svg';

const img = document.createElement('img');
img.src = image;
img.classList.add('logo');
document.body.appendChild(img);
