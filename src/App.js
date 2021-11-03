import React from 'react';
import './App.css';
import Provider from './Provider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
