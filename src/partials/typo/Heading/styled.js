import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import * as vars from '../../../global-styles/variables'

const headingFactory = ( factoryProps ) => {
    const { tag } = factoryProps;

    const HeadingComponent = ({
         children,
         className
     }) => React.createElement(tag, {className}, children);

    return styled(HeadingComponent)`
      font-size: ${vars.fontSize[tag]};
      font-weight: normal;
  `;
};

const Heading = headingFactory({ tag: 'h1' });

Heading.h1 = Heading;

for (let i = 2; i <= 6; i++) {
    const subHeadingTag = `h${i}`;

    Heading[subHeadingTag] = headingFactory({ tag: subHeadingTag });
}

Heading.propTypes = {
    children: propTypes.any.isRequired
}

Heading.defaultProps = {
    children: null
};

/** @component */
export { Heading };
