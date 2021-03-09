import React from 'react';
import propTypes from 'prop-types';

import { Icon, iconTypes } from '../Icon/index';

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
    let output;

    if (href) {
        output = (
            <a href={href}
               className={className}
               aria-label={ariaLabel}
               onClick={props.onClick}>
                {getChildren(props)}
            </a>
        );
    } else {
        output = (
            <button type="button"
                className={className}
                aria-label={ariaLabel}
                onClick={props.onClick}>
                {getChildren(props)}
            </button>
        );
    }
    return output;
}

ButtonComponent.propTypes = {
    children: propTypes.any,
    href: propTypes.string,
    primary: propTypes.bool,
    icon: propTypes.string,
        ...iconTypes.propTypes
};

ButtonComponent.defaultProps = {
    children: null,
    href: null,
    primary: null,
    icon: null
};