import React, { useContext } from 'react';
import ContextPlanets from './ContextPlanets';

export default function Filter() {
  const context = useContext(ContextPlanets);
  const { setInputFilter } = context;

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target: { value } }) => setInputFilter(value) }
        placeholder="Filter by name"
      />
    </div>
  );
}
