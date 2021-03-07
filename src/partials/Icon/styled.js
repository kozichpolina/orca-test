import styled from 'styled-components';
import propTypes from 'prop-types';

import * as vars from '../../global-styles/variables.js';
import { IconComponent } from './component';

const Icon = styled(IconComponent)`
  display: inline-flex;
  fill: ${props => props.inverse? vars.colors.white : vars.colors.grey};
  
  svg {
    width: ${props => props.size};
    height: ${props => props.size};
    transition-property: fill;
    transition-duration: ${vars.transition.duration};
  }
`;

Icon.propTypes = {
    size: propTypes.string,
    ...vars.iconSize.propTypes,
    inverse: propTypes.bool
}

Icon.defaultProps = {
    size: vars.iconSize.sm,
    inverse: false
}

export { Icon };