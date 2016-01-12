/* global $ */

import './loader.css';
import 'please-wait/build/please-wait.css';
import splash from 'please-wait';

let loadingScreen = splash.pleaseWait({
    logo: '',
    backgroundColor: '#fff',
    loadingHtml:
    `
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>`
});

setTimeout(() => {
    loadApplication();
});

function loadApplication() {
    require.ensure(['./ng.js'], (require) => {
        require('./ng.js');

        loadingScreen.finish();
    });
};