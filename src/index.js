import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from './components/elements/button';
import Buttons from './components/elements/buttons';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Component: Button</h2>
                    <Button active />
                    <br />
                    <Button />
                </div>
                <br /><br /><br />
                <div>
                    <h2>Component: Buttons + Button</h2>
                    <Buttons>
                        <Button className="PROPS-CLASSNAME" active />
                        <Button />
                    </Buttons>
                </div>
            </div>
        );
    }
}

render((<App />), document.getElementById('app'));
