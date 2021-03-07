import styled from 'styled-components';
import propTypes from 'prop-types';

import * as vars from '../../global-styles/variables.js';
import { ListComponent } from './component';
import { ListItem } from './ListItem/';

const List = styled(ListComponent)`
  display: flex;
  flex-direction: ${props => props.direction};
  margin: ${props => `calc(-${props.gap}/2)`};

  ${ListItem} {
    padding: ${props => `calc(${props.gap}/2)`};
  }
`;

List.propTypes = {
    direction: propTypes.string,
    ...['column', 'row', 'column-reverse', 'row-reverse'].propTypes,
    gap: propTypes.string,
    ...vars.space.propTypes,
}

List.defaultProps = {
    direction: 'column',
    gap: vars.space.ss,
}

export { List };