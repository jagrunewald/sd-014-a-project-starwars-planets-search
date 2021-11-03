import React, { useContext } from 'react';
import filterContext from '../context/filterContext';
import getApiStarWars from '../services/APIStarwars';

function FilterByName() {
  const { filters, setFilters, setData, data } = useContext(filterContext);
  const retApi = [...data];
  console.log(filters);

  const handleChange = async ({ target }) => {
    await setFilters({ ...filters,
      filterByName: {
        name: target.value,
      } });
    if (target.value) {
      const filterPlanets = retApi.filter((planet) => (
        planet.name.toLowerCase().includes(`${target.value.toLowerCase()}`)));
      await setData(
        filterPlanets,
      );
      console.log(data);
    } else {
      await getApiStarWars('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => setData(result));
    }
    console.log(filters.filterByName);
  };

  return (
    <label htmlFor="input-name">
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        id="input-name"
        onChange={ handleChange }
      />
    </label>
  );
}

export default FilterByName;
