import React from 'react';

import Table from '../components/Table';
import FilterInput from '../components/FilterInput';
import NumericFilters from '../components/NumericFilters';
import FiltersList from '../components/FiltersList';
import SortForm from '../components/SortForm';

function ListPlanetPage() {
  return (
    <main>
      <h1>Star Wars Planet Searcher</h1>
      <FilterInput />
      <NumericFilters />
      <FiltersList />
      <SortForm />
      <Table />
    </main>
  );
}

export default ListPlanetPage;
