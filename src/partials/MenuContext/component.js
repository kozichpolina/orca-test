import React from 'react';
import PropTypes from 'prop-types';

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
                <List gap={vars.units.sm}>
                    {children}
                </List>
            </form>
        </div>
    );
}

MenuContextComponent.propTypes = {
    children: PropTypes.any
};

MenuContextComponent.defaultProps = {
    children: null
};