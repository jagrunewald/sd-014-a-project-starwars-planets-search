import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../api/getApi';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  });

  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [state, setState] = useState({
    column: 'population',
    comparison: 'greater',
    value: '',
  });

  const data = {
    planets,
    setPlanets,
    filter,
    setFilter,
    options,
    setOptions,
    state,
    setState,
  };

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getApi();
      setPlanets(response.results);
    };
    fetchApi();
  }, []);

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
