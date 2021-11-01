import React from 'react';
import Table from './Components/Table';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
