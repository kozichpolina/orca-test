import styled from 'styled-components';

import * as styleVars from '../../global-styles/variables.js';

import { ModalComponent } from './component';
import { ButtonIcon } from '../Button';
import { Heading } from '../typo/Heading';

ModalComponent.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: ${styleVars.colors.brandBlack}30;
`

ModalComponent.Header = styled.div`
  position: relative;
  display: flex;
  padding: ${styleVars.space.sm} ${styleVars.space.sl};
  border-bottom: 1px solid ${styleVars.colors.brandBlack}10;

  ${Heading.h2} {
    line-height: 1.5;
  }
  ${ButtonIcon} {
    position: absolute;
    top: 50%;
    right: ${styleVars.space.sxs};
    transform: translate(-50%, -50%);
  }
`

ModalComponent.FormBody = styled.div`
  padding:  ${styleVars.space.sl} 0 calc(1.5 * ${styleVars.space.sl});
`

ModalComponent.Form = styled.form`
  padding: 0 ${styleVars.space.sl};
`

ModalComponent.FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-top: 1px solid ${styleVars.colors.brandBlack}10;
  padding: ${styleVars.space.sl} 0;
`

const Modal = styled(ModalComponent)`
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 29.1rem;
  max-width: 100%;
  max-height: 100%;
  background: ${styleVars.colors.white};
  border-radius: ${styleVars.borderRadius.sm};
`;

export { Modal };