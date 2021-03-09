import styled from 'styled-components';

import * as styleVars from '../../global-styles/variables.js';
import { CardComponent } from './component';
import { Heading } from '../typo/Heading';
import { Icon } from '../Icon';
import { ButtonIcon } from '../Button';
import { MenuContext } from '../MenuContext';
import { List } from '../List';
import { Text } from '../typo/Text';

CardComponent.Icon = styled(Icon)`
  padding: ${styleVars.space.sm};
`

CardComponent.Dots = styled(ButtonIcon)`
  position: absolute;
  top: .75rem;
  right: ${styleVars.space.sm};
`

CardComponent.Header = styled.div`
  position: relative;
  display: flex;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='34' viewBox='0 0 4 34'%3E%3Cpath d='M215.391 2.627H-.793a9.992 9.992 0 0 0-8.696 5.75L-19.851 28.25A9.992 9.992 0 0 1-28.548 34H-53.33c-5.51 0-10.029-5.18-10.222-11.717l-.306-10.352C-64.056 5.229-59.64-.395-53.994-.63q.17-.007.34-.008l266.381-.57a2.994 2.994 0 0 1 2.714 3.212 3.81 3.81 0 0 1-.05.623z'/%3E%3C/svg%3E") repeat-x 2rem 0/auto 100%,
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='34' viewBox='0 0 54 34'%3E%3Cpath d='M269.391 2.627H53.207a9.992 9.992 0 0 0-8.696 5.75L34.149 28.25A9.992 9.992 0 0 1 25.452 34H.67c-5.51 0-10.029-5.18-10.222-11.717l-.306-10.352C-10.056 5.229-5.64-.395.006-.63q.17-.007.34-.008l266.381-.57a2.994 2.994 0 0 1 2.714 3.212 3.81 3.81 0 0 1-.05.623z'/%3E%3C/svg%3E") no-repeat 0 0/auto 100%;
`

CardComponent.MenuContext = styled(MenuContext)`
  position: absolute; 
  top: .625rem;
  right: .375rem;
`

CardComponent.Body = styled.div`
  overflow: hidden;
  padding: ${styleVars.space.sl};
`

CardComponent.Meta = styled.dl`
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${styleVars.space.sm};
  white-space: nowrap;
`

CardComponent.Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 ${styleVars.space.sl} ${styleVars.space.sl};
`

CardComponent.List = styled(List)`
  overflow: hidden;
  
  ${Text.span} {
    margin-right: ${styleVars.space.ss};
    
    &:last-child {
      margin-right: 0;
    }
  }
`

const Card = styled(CardComponent)`
  position: relative;
  overflow: hidden;
  width:  16.8rem;
  max-width: 100%;
  border-radius: ${styleVars.borderRadius.sm};
  background-color: ${styleVars.colors.grey}10;
  box-shadow: 0 0 10px 0 ${styleVars.colors.black}10;
  
  ${Heading.h3} {
    overflow: hidden;
    max-width: 100%;
    margin: ${styleVars.space.sm} calc(1.5 * ${styleVars.space.sl});
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export { Card };