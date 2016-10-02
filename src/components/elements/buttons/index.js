import React from 'react';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import styles from './buttons.css';

@CSSModules(styles)
export default class Buttons extends React.Component {
    renderButton = (Button) => {
        return React.cloneElement(Button, {
            className: classnames(Button.className, this.props.styles.button)
        });
    }

    render() {
        return (
            <div styleName="buttons">
                {React.Children.map(this.props.children, this.renderButton)}
            </div>
        );
    }
}
