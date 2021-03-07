import styled from 'styled-components';

import * as styleVars from '../../global-styles/variables.js';
import { MenuContextComponent } from './component';
import { ButtonIcon } from '../Button';

const MenuContext = styled(MenuContextComponent)`
  position: relative;
  padding: ${styleVars.space.sl} ${styleVars.space.sm} ${styleVars.space.sm};
  box-shadow: 0 0 10px 0 ${styleVars.colors.black}10;

  ${ButtonIcon} {
    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

export { MenuContext };