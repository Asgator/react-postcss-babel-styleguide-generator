import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import styles from './button.css';

@CSSModules(styles)
export default class Button extends Component {
    render() {
        const { styles, active, className } = this.props;

        return (
            <div
                className={classnames('button-global', className, {
                    [styles.active]: active
                })}
                styleName="button"
            >
                Press
            </div>
        );
    }
}
