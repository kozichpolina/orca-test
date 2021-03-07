import React from 'react';
import propTypes from 'prop-types';
import { ListItem } from './ListItem';

export const ListComponent = ({
    className,
    children
}) => {
    return (
        <ul className={className}>
            {React.Children.map(children, child => (
                <ListItem>
                    {child}
                </ListItem>
            ))}
        </ul>
    );
}

ListComponent.propTypes = {
    children: propTypes.any
};

ListComponent.defaultProps = {
    children: null
};