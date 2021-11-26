import React from 'react';
import { Header, Table } from './Components';
import FilterProvider from './Context/FilterProvinder';

import './App.css';

function App() {
  return (
    <>
      <FilterProvider>
        <Header />
        <Table />
      </FilterProvider>
    </>
  );
}

export default App;
