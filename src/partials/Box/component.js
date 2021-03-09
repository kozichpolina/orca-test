import React from 'react';
import propTypes from 'prop-types';

export const BoxComponent = ({
    children,
    className
}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

BoxComponent.propTypes = {
    children: propTypes.any
};

BoxComponent.defaultProps = {
    children: null
};