import React from 'react';
import FilterProvider from './context/FilterProvider';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <FilterProvider>
      <Home />
    </FilterProvider>
  );
}

export default App;
