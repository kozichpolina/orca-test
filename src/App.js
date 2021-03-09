import { GlobalStyle } from './global-styles';

import { Card } from './partials/Card';
import { Modal } from './partials/Modal';

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
        <Card/>
        <Modal/>
      </div>
  );
}

export default App;
