import styled from 'styled-components';

import * as styleVars from '../../global-styles/variables.js';
import { MenuContextComponent } from './component';
import { ButtonIcon } from '../Button';

const MenuContext = styled(MenuContextComponent)`
  position: relative;
  padding: ${styleVars.space.sl} ${styleVars.space.sm} ${styleVars.space.sm};
  border-radius: ${styleVars.borderRadius.ss};
  background: ${styleVars.colors.white};
  box-shadow: 0 0 10px 0 ${styleVars.colors.black}10;

  ${ButtonIcon} {
    position: absolute;
    top: ${styleVars.space.sxs};
    right: ${styleVars.space.sxs};
  }
`;

export { MenuContext };