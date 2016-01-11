/* global $ */

import './loader.css';
import 'please-wait/build/please-wait.css';
import pleaseWait from 'please-wait';

let loadingScreen = pleaseWait.pleaseWait({
    logo: '',
    backgroundColor: '#4285f4',
    loadingHtml: `
    <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
    `
});


setTimeout(() => {
    loadApplication();
});

function loadApplication() {
    require.ensure(['./app.js'], (require) => {
        require('./app.js');

        loadingScreen.finish();
    });
};