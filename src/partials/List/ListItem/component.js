import React from 'react';
import propTypes from 'prop-types';

export const ListItemComponent = ({
    className,
    children
}) => {
    return (
        <li className={className}>
            {children}
        </li>
    );
}

ListItemComponent.propTypes = {
    children: propTypes.any
};

ListItemComponent.defaultProps = {
    children: null
};