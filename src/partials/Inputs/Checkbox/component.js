import React from 'react';
import propTypes from 'prop-types';

export const CheckboxComponent = ({
    className,
    label,
    id
}) => {
    return (
        <div className={className}>
            <input id={id} type="checkbox" name="option" value="value"/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

CheckboxComponent.propTypes = {
    label: propTypes.string,
    id: propTypes.string
};

CheckboxComponent.defaultProps = {
    label: null,
    id: null
};