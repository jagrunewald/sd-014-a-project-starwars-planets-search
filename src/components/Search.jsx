import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Search() {
  const { filters, setFilters, filterPlanetsByName } = useContext(StarWarsContext);

  const handleChange = (e) => {
    filterPlanetsByName(e.target.value);
    setFilters({ ...filters, filterByName: e.target.value });
  };

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Pesquisar..."
        value={ filters.filterByName }
        onChange={ handleChange }
      />
    </section>
  );
}

export default Search;
