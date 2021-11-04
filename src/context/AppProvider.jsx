import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [results, setResults] = useState([]);
  const [fullResults, setFullResults] = useState([]);
  const contextValue = {
    results,
    setResults,
    fullResults,
    setFullResults,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
};

AppProvider.defaultProps = {
  children: PropTypes.node,
};

export default AppProvider;
