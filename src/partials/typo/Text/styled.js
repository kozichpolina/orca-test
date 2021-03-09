import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import * as styleVars from '../../../global-styles/variables';

const stylesEllipsis = `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
`

const TextFactory = ( factoryProps ) => {
    const {
        tag
    } = factoryProps;

    const TextComponent = ({
        children,
        className
    }) => React.createElement(tag, {className}, children);

    return styled(TextComponent)`
      color: ${props => props.secondary ? styleVars.colors.grey : "inherit"};
      font-size:  ${props => props.fontSize};
      margin-bottom: ${props => props.mb};

      ${props => props.overflow === 'ellipsis' ?
              stylesEllipsis
      : ""
      }
    `;
};

const Text = TextFactory({ tag: 'p' });
Text.p = Text;
Text.span = TextFactory({ tag: 'span' });

Text.propTypes = {
    children: propTypes.any.isRequired,
    secondary: propTypes.bool,
    fontSize: propTypes.string,
    ...styleVars.fontSize.propTypes,
    mb: propTypes.string,
    ...styleVars.space.propTypes
}

Text.defaultProps = {
    children: null,
    secondary: false,
    fontSize: styleVars.fontSize.bodyM,
    mb: 0
}

export { Text };