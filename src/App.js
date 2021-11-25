import React from 'react';
import './App.css';

import PlanetsProvider from './context/PlanetsContext';
import PlanetTable from './components/PlanetTable';

function App() {
  return (
    <PlanetsProvider>
      <PlanetTable />
    </PlanetsProvider>
  );
}

export default App;
