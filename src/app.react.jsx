import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component.react.jsx';

import './scss/app.scss';

let App = React.createClass({
    render() {
        let array = [];

        for (let i = 0; i< 1000; i++) {
            array.push(
                <p key={i}>Element {i}</p>
            )
        }
        return <div><Component/>{array}</div>;
    }
})

console.time('DOM generation');

ReactDOM.render(
    <App/>,
    document.body.querySelector('.inner')
)

console.timeEnd('DOM generation');