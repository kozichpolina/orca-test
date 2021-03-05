import styled from 'styled-components';

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

export { Icon };