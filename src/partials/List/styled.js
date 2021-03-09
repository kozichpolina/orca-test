import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import * as styleVars from '../../global-styles/variables';
import { ListItem } from './ListItem';

const listFactory = ( factoryProps ) => {
    const {
        tag
    } = factoryProps;

    const ListComponent = ({
        children,
        className
    }) => React.createElement(tag, {className}, children);

    return styled(ListComponent)`
      display: flex;
      flex-direction: ${props => props.direction};
      flex-wrap: wrap;
      margin: ${props => `calc(-${props.gap}/2)`};
      
      ${ListItem} {
        padding: ${props => `calc(${props.gap}/2)`};
      }
    `;
};

const List = listFactory({ tag: 'ul' });
List.ul = List;
List.ol = listFactory({ tag: 'ol' });

List.propTypes = {
    children: propTypes.any.isRequired,
    direction: propTypes.string,
    ...['column', 'row', 'column-reverse', 'row-reverse'].propTypes,
    gap: propTypes.string,
    ...styleVars.space.propTypes,
}

List.defaultProps = {
    children: null,
    direction: 'column',
    gap: styleVars.space.ss,
}

export { List };