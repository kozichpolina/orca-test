import React from 'react';
import PropTypes from 'prop-types';

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
    children: PropTypes.any
};

ListItemComponent.defaultProps = {
    children: null
};