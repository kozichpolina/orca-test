import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon/index';

const getChildren = (props) => {
    const {
        children,
        icon
    } = props;

    if (icon) {
        return (
            <React.Fragment>
                <Icon type={icon}/>
                {children}
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

//TODO: Add aria-label if only icon

export const ButtonComponent = ({
    href,
    className,
    ...props
}) => {
    let output = null;

    if (href) {
        output = (
            <a href={href} className={className}>
                {getChildren(props)}
            </a>
        );
    } else {
        output = (
            <button type="button" className={className}>
                {getChildren(props)}
            </button>
        );
    }
    return output;
}

ButtonComponent.propTypes = {
    children: PropTypes.any,
    href: PropTypes.string,
    primary: PropTypes.bool
};

ButtonComponent.defaultProps = {
    children: null,
    href: null,
    primary: null
};