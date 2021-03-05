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
                {children && <span>{children}</span>}
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export const ButtonComponent = ({
    href,
    className,
    ariaLabel,
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
            <button type="button" className={className} aria-label={ariaLabel}>
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