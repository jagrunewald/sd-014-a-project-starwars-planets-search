import React, { useContext } from 'react';
import MyContext from '../context/Context';

const FilterName = () => {
  const { filters: { filterByName: { name } }, setName } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => setName({
    filters: {
      ...name.filters,
      filterByName: {
        name: value,
      } },
  });

  return (
    <div>
      <input
        value={ name }
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
};

export default FilterName;
