import message from './message';
// import './style-css.css';
import './style-scss.scss';

const paragraph = document.createElement('p');
paragraph.innerHTML = message;
document.body.prepend(paragraph);
