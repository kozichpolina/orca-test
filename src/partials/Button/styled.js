import styled from 'styled-components';

import * as vars from '../../global-styles/variables.js';
import { ButtonComponent } from './component';
import { Icon } from '../Icon/index';

const ButtonBase = styled(ButtonComponent)`
  display: inline-flex;
  align-items: center;
  font-size: ${vars.fontSize.bodyS};
  transition-duration: ${vars.transition.duration};
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
  padding: ${vars.units.sm} ${vars.units.sl};
  background-color: ${props => props.primary ? vars.colors.brand : vars.colors.white};
  color: ${props => props.primary ? vars.colors.white : vars.colors.black};
  text-transform: uppercase;
  border: 1px solid ${props => props.primary ? "transparent" : `${vars.colors.grey}50`};
  border-radius: ${vars.borderRadius.ss};
  transition-property: color, box-shadow;
  
  &:hover,
  &:focus {
    color: ${props => props.primary ? vars.colors.white : vars.colors.brand};
    box-shadow: 0 0 0 2px ${vars.colors.brand}20;
    
    ${Icon} {
      fill: ${props => props.primary ? vars.colors.white : vars.colors.brand};
    }
  }

  ${Icon} { //:not:only-child is bad for performance
    margin-right: ${vars.units.ss};
    
    &:only-child { 
      margin-right: 0;
    }
  }
`;

const ButtonText = styled(ButtonBase)`
  background-color: transparent;
  color: ${vars.colors.black};
  transition-property: color;
  
  &:hover,
  &:focus {
    color: ${vars.colors.brand};

    ${Icon} {
      fill: ${vars.colors.brand};
    }
  }

  ${Icon} { //:not:only-child is bad for performance
    margin-right: ${vars.units.ss};

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
      fill: ${vars.colors.brand};
    }
  }
`;

export {Button, ButtonText, ButtonIcon};