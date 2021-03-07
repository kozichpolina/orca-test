import styled from 'styled-components';
import propTypes from 'prop-types';

import * as styleVars from '../../global-styles/variables.js';
import { IconComponent } from './component';

const Icon = styled(IconComponent)`
  display: inline-flex;
  fill: ${props => props.inverse? styleVars.colors.white : styleVars.colors.grey};
  
  svg {
    width: ${props => props.size};
    height: ${props => props.size};
    transition-property: fill;
    transition-duration: ${styleVars.transition.duration};
  }
`;

Icon.propTypes = {
    size: propTypes.string,
    ...styleVars.iconSize.propTypes,
    inverse: propTypes.bool
}

Icon.defaultProps = {
    size: styleVars.iconSize.sm,
    inverse: false
}

export { Icon };