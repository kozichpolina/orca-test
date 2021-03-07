import styled from 'styled-components';

import * as styleVars from '../../global-styles/variables.js';
import { ButtonComponent } from './component';
import { Icon } from '../Icon/index';

const ButtonBase = styled(ButtonComponent)`
  display: inline-flex;
  align-items: center;
  font-size: ${styleVars.fontSize.bodyS};
  transition-duration: ${styleVars.transition.duration};
  user-select: none;

  button& {
    cursor: pointer;
  }

  ${Icon} svg {
    width: 1.2em;
    height: 1.2em;
  }
`;

const Button = styled(ButtonBase)`
  padding: ${styleVars.space.sm} ${styleVars.space.sl};
  background-color: ${props => props.primary ? styleVars.colors.brand : styleVars.colors.white};
  color: ${props => props.primary ? styleVars.colors.white : styleVars.colors.black};
  text-transform: uppercase;
  border: 1px solid ${props => props.primary ? "transparent" : `${styleVars.colors.grey}50`};
  border-radius: ${styleVars.borderRadius.ss};
  transition-property: color, box-shadow;
  
  &:hover,
  &:focus {
    color: ${props => props.primary ? styleVars.colors.white : styleVars.colors.brand};
    box-shadow: 0 0 0 2px ${styleVars.colors.brand}20;
    
    ${Icon} {
      fill: ${props => props.primary ? styleVars.colors.white : styleVars.colors.brand};
    }
  }

  ${Icon} { //:not:only-child is bad for performance
    margin-right: ${styleVars.space.ss};
    
    &:only-child { 
      margin-right: 0;
    }
  }
`;

const ButtonText = styled(ButtonBase)`
  background-color: transparent;
  color: ${styleVars.colors.black};
  transition-property: color;
  
  &:hover,
  &:focus {
    color: ${styleVars.colors.brand};

    ${Icon} {
      fill: ${styleVars.colors.brand};
    }
  }

  ${Icon} { //:not:only-child is bad for performance
    margin-right: ${styleVars.space.ss};

    &:only-child {
      margin-right: 0;
    }
  }
`;

const ButtonIcon = styled(ButtonBase)`
  background-color: transparent;
  
  &:hover,
  &:focus {
    ${Icon} {
      fill: ${styleVars.colors.brand};
    }
  }
`;

export {Button, ButtonText, ButtonIcon};