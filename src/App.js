import { GlobalStyle } from './global-styles/index';

import { Button } from './partials/Button/index';
import { ButtonText } from './partials/Button/index';
import { Icon } from './partials/Icon/index';
import { iconTypes } from './partials/Icon/index';

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
        Hello world
        <Button icon={iconTypes.trash}>Hello world</Button>
        <Button primary>Hello world</Button>
        <ButtonText icon={iconTypes.trash}>Hello world</ButtonText>
        <Button icon={iconTypes.trash}/>
        <Icon type={iconTypes.trash}/>
      </div>
  );
}

export default App;
