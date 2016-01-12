import {dom, element} from 'deku';
import Component from './component.jsx';

import './scss/app.scss';

let render = dom.createRenderer(document.body.querySelector('.inner'));



let App = {
    render({ props, children, context, path }) {
        let array = [];

        for (let i = 0; i< props.items; i++) {
            array.push(
                <p>Element {i}</p>
            )
        }
        return <div><Component></Component>{array}</div>;
    }
}

console.time('DOM generation');

render(
  <App items={10000}>
  </App>
)

console.timeEnd('DOM generation');