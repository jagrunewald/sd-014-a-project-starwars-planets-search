import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/getPlanets';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByText, setFilterByText] = useState('');

  async function fetchPlanetsList() {
    setIsLoading(true);
    const dataPlanets = await getPlanets();
    setData(dataPlanets);
    setFilteredPlanets(dataPlanets);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPlanetsList();
  }, []);

  useEffect(() => {
    const filtered = data.filter(({ name }) => name.includes(filterByText));
    setFilteredPlanets(filtered);
  }, [data, filterByText]);

  return (
    <PlanetContext.Provider
      value={
        { data, isLoading, filteredPlanets, filterByText, setFilterByText }
      }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetProvider;
