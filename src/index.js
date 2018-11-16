import _ from 'lodash';
import './style.css';
import Icon from './0.jpg';
import print from './print.js'

function component() {
  var element = document.createElement('div');
	// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
	element.appendChild(myIcon);
	element.onclick = print
  return element;
}

document.body.appendChild(component());