import React, {useState} from 'react';
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
    const [isModalOpen, setModalIsOpen] = useState(false);

    return (
      <div style={styleTemporary}>
        <GlobalStyle/>
        <Card onModalOpen={()=>{setModalIsOpen(true)}}/>
          {
            isModalOpen &&
            <Modal onModalClose={()=>{setModalIsOpen(false)}}/>
          }
      </div>
  );
}

export default App;
