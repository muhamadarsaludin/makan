import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.nav-toggle'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('#main-content'),
  icon: document.querySelector('.toggle-icon'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// getDate
const date = new Date();
const year = date.getFullYear();
document.querySelector('.year').innerHTML = year;
