import styled from 'styled-components';
import propTypes from 'prop-types';

import * as styleVars from '../../global-styles/variables.js';

import { ButtonComponent } from './component';
import { Icon } from '../Icon/index';

const ButtonBase = styled(ButtonComponent)`
  display: inline-flex;
  align-items: center;
  font-size: ${props => props.size};
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
  padding: ${styleVars.space.ss} ${styleVars.space.sl};
  background-color: ${props => props.primary ? styleVars.colors.brand : styleVars.colors.white};
  color: ${props => props.primary ? styleVars.colors.white : styleVars.colors.black};
  text-transform: uppercase;
  justify-content: center;
  border: 1px solid ${props => props.primary ? "transparent" : `${styleVars.colors.grey}50`};
  border-radius: ${styleVars.borderRadius.ss};
  min-width: 6.25rem;
  transition-property: color, box-shadow;
  
  &:hover,
  &:focus {
    color: ${props => props.primary ? styleVars.colors.white : styleVars.colors.brand};
    box-shadow: 0 0 0 .125rem ${props => props.primary ? `${styleVars.colors.brand}20` : `${styleVars.colors.grey}10`};
    
    ${Icon} {
      fill: ${props => props.primary ? styleVars.colors.white : styleVars.colors.brand};
    }
  }

  ${Icon} {
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

  ${Icon} {
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

Button.propTypes = {
    size: propTypes.string,
    ...styleVars.fontSize.propTypes
};

Button.defaultProps = {
    size: styleVars.fontSize.bodyS
};

export {Button, ButtonText, ButtonIcon};