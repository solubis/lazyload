import React from 'react';

let log = event => {
    event.preventDefault();
    alert(event.target.nodeName);
}

function render () {
    return (
    <h1>
        <i className="material-icons">devices</i>
        Hello World
        <small>
            <a href='' onClick={log}>ES6 with SCSS and Deku.js</a>
        </small>
    </h1>
    )
}

export default React.createClass({render});