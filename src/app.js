import './scss/app.scss';

(function generate() {
    let a = 'World';

    console.log(`Hello ${a}`);

    console.time('DOM generation');

    let documentFragment = document.createDocumentFragment();

    let title = document.createElement('h1');
    let subtitle = document.createElement('small');
    let icon = document.createElement('i');

    icon.classList.add('material-icons');
    icon.textContent = 'devices';

    let onClick = (event) => {
        event.preventDefault();
        alert(event.target.nodeType);
    }

    subtitle.innerHTML = '<a href="">ES6 with SCSS and DOM document Fragment</a>';
    subtitle.addEventListener('click', onClick);

    title.appendChild(icon);
    title.appendChild(document.createTextNode(`Hello ${a}`));
    title.appendChild(subtitle);

    documentFragment.appendChild(title);

    for (let i = 0; i < 10000; i++) {
        let element = document.createElement('p');
        element.textContent = 'Element ' + i;
        documentFragment.appendChild(element);
    }

    document.body.querySelector('.inner').appendChild(documentFragment);

    console.timeEnd('DOM generation');

})()