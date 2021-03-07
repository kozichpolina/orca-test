import React from 'react';
import propTypes from 'prop-types';

import { List } from '../List';
import { ButtonIcon } from '../Button';

import * as vars from '../../global-styles/variables.js';
import { iconTypes } from '../Icon';

export const MenuContextComponent = ({
    children,
    className
}) => {
    return (
        <div className={className}>
            <ButtonIcon icon={iconTypes.cross} ariaLabel="Close"/>
            <form>
                <List gap={vars.space.sm}>
                    {children}
                </List>
            </form>
        </div>
    );
}

MenuContextComponent.propTypes = {
    children: propTypes.any
};

MenuContextComponent.defaultProps = {
    children: null
};