import { GlobalStyle } from './global-styles';

import * as vars from './global-styles/variables';

import { Button } from './partials/Button/index';
import { ButtonText } from './partials/Button/index';
import { ButtonIcon } from './partials/Button/index';
import { Icon } from './partials/Icon';
import { iconTypes } from './partials/Icon';
import { MenuContext } from './partials/MenuContext';
import { List } from './partials/List';

const styleTemporary = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "flex-start",
    padding: "100px"
}

function App() {
  return (
      <div style={styleTemporary}>
        <GlobalStyle/>
        <Button icon={iconTypes.trash}>Hello world</Button>
        <Button primary>Hello world</Button>
        <ButtonText icon={iconTypes.trash}>Hello world</ButtonText>
        <Button icon={iconTypes.trash}/>
        <ButtonIcon icon={iconTypes.trash} ariaLabel="Delete"/>
        <Icon type={iconTypes.trash}/>
        <MenuContext>
            <ButtonText icon={iconTypes.files}>Duplicate</ButtonText>
            <ButtonText icon={iconTypes.pencil}>Edit</ButtonText>
            <ButtonText icon={iconTypes.trash}>Delete</ButtonText>
        </MenuContext>
        <List direction='row'>
          <ButtonText icon={iconTypes.files}>Duplicate</ButtonText>
          <ButtonText icon={iconTypes.pencil}>Edit</ButtonText>
          <ButtonText icon={iconTypes.trash}>Delete</ButtonText>
        </List>
        <List direction='row-reverse' gap={vars.space.sl}>
          <ButtonText icon={iconTypes.files}>Duplicate</ButtonText>
          <ButtonText icon={iconTypes.pencil}>Edit</ButtonText>
          <ButtonText icon={iconTypes.trash}>Delete</ButtonText>
        </List>
      </div>
  );
}

export default App;
