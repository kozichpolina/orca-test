import React from 'react';
import propTypes from 'prop-types';

import { List } from '../List';
import { ListItem } from '../List/ListItem';
import { ButtonIcon } from '../Button';

import * as styleVars from '../../global-styles/variables.js';
import { iconTypes } from '../Icon';

export const MenuContextComponent = ({
    children,
    className,
    onClose
}) => {
    return (
        <div className={className}>
            <ButtonIcon
                icon={iconTypes.cross}
                ariaLabel="Close"
                onClick={onClose}
            />
            <form>
                <List gap={styleVars.space.sm}>
                    {React.Children.map(children, child => (
                        <ListItem>
                            {child}
                        </ListItem>
                    ))}
                </List>
            </form>
        </div>
    );
}

MenuContextComponent.propTypes = {
    children: propTypes.any.isRequired,
    onClose: propTypes.element
};

MenuContextComponent.defaultProps = {
    children: null,
    onClose: null
};