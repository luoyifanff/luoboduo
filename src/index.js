import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import router from './router';
import registerServiceWorker from './registerServiceWorker';

document.documentElement.style.fontSize = document.documentElement.clientWidth / 640*100 + 'px';
console.log();

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
