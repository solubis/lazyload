/* global $ */

import './loader.css';
import 'please-wait/build/please-wait.css';
import pleaseWait from 'please-wait';

let loadingScreen = pleaseWait.pleaseWait({
    logo: '',
    backgroundColor: '#fff',
    loadingHtml: `
        <div id="loader-wrapper">
			<div id="loader"></div>
			<div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
		</div>`
});

setTimeout(() => {
    loadApplication();
}, 1000);

function loadApplication() {
    require.ensure(['./app.js'], (require) => {
        require('./app.js');

        loadingScreen.finish();
    });
};