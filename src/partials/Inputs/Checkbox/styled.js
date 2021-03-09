import styled from 'styled-components';
import propTypes from 'prop-types';

import * as styleVars from '../../../global-styles/variables.js';
import { CheckboxComponent } from './component';

const Checkbox = styled(CheckboxComponent)`
  display: inline-flex;
  align-items: center;
  font-size:  ${props => props.fontSize};

  input {
    position: absolute;
    overflow: hidden;
    opacity: 0;
    z-index: -1;
    width: 0;
    height: 0;
  }
  
  label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    
    &:before {  
      content: '';
      display: inline-block;
      flex-shrink: 0;
      flex-grow: 0;
      width: 1em;
      height: 1em;
      margin-right: ${styleVars.space.sxs};
      font-size: ${styleVars.fontSize.bodyS};
      border: 1px solid ${styleVars.colors.grey};
      border-radius: ${styleVars.borderRadius.ss};
      background-repeat: no-repeat;
      background-position: center .2em;
      background-size: .6em;
    }
  }

  input:checked + label:before {
    border-color: ${styleVars.colors.brand};
    background-color: ${styleVars.colors.brand};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='5' viewBox='0 0 6 5'%3E%3Cpath d='M0 2.441L2.055 4.5 6 .559 5.434 0l-3.38 3.375L.56 1.879z' fill='%23fff'/%3E%3C/svg%3E");
  }
  
  &:hover {
    label:before {
      border-color: ${styleVars.colors.brand};
    }

    input:checked + label:before {
      box-shadow: 0 0 0 .125rem ${styleVars.colors.brand}20;
    }
  }
  
  input:focus {
    + label:before {
      border-color: ${styleVars.colors.brand};
    }

    &:checked + label:before {
      box-shadow: 0 0 0 .125rem ${styleVars.colors.brand}20;
    }
  }
`;

Checkbox.propTypes = {
    fontSize: propTypes.string,
        ...styleVars.fontSize.propTypes
};

Checkbox.defaultProps = {
    fontSize: styleVars.fontSize.bodyS
};

export { Checkbox };