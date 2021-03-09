import styled from 'styled-components';
import propTypes from 'prop-types';

import * as styleVars from '../../global-styles/variables.js';

import { BoxComponent } from './component';

const Box = styled(BoxComponent)`
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
`;

Box.propTypes = {
    mt: propTypes.string,
    ...styleVars.space.propTypes,
    mb: propTypes.string,
    ...styleVars.space.propTypes,
    ml: propTypes.string,
    ...styleVars.space.propTypes,
    mr: propTypes.string,
    ...styleVars.space.propTypes
};

Box.defaultProps = {
    mt: '0',
    mb: '0',
    ml: '0',
    mr: '0'
};

export { Box };