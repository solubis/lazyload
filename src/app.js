import './scss/app.scss';

(function generate() {
    let a = 'World';

    console.log(`Hello ${a}`);

    console.time('DOM generation');

    let title = document.createElement('h1');
    let subtitle = document.createElement('small');
    let icon = document.createElement('i');

    icon.classList.add('material-icons');
    icon.textContent = 'devices';

    subtitle.innerHTML = 'ES6 with SCSS';

    title.appendChild(icon);
    title.appendChild(document.createTextNode(`Hello ${a}`));
    title.appendChild(subtitle);
    document.body.querySelector('.inner').appendChild(title);

    for (let i = 0; i < 1000; i++) {
        let element = document.createElement('p');
        element.textContent = 'Element ' + i;
        document.body.appendChild(element);
    }

    console.timeEnd('DOM generation');

})()