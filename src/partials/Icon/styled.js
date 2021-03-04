import styled from 'styled-components';
import propTypes from 'prop-types';

import * as vars from '../../global-styles/variables.js';
import { IconComponent } from './component';

const Icon = styled(IconComponent)`
  display: inline-flex; 
  fill: ${vars.colors.grey};
  
  svg {
    transition-property: fill;
    transition-duration: ${vars.transition.duration};
  }
`;

Icon.propTypes = {
    width: propTypes.string,
    ...vars.units.propTypes,
    height: propTypes.string,
    ...vars.units.propTypes
}

Icon.defaultProps = {
    width: vars.units.sl,
    height: vars.units.sl
}

export { Icon };