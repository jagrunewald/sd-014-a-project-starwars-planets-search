import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import requestAPI from './requestAPI';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAPI = async () => {
    setIsLoading(true);
    const response = await requestAPI();
    setData(response);
    setIsLoading(false);
  };

  return (
    <PlanetsContext.Provider value={ { data, isLoading, fetchAPI } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
