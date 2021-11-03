import React from 'react';
import SearchByFilters from './SearchByFilters';
import SearchByName from './SearchByName';

export default function SearchBar() {
  return (
    <form>
      <p className="searchBarTitle">Vasculhe a galáxia, Padawan!</p>
      <SearchByName />
      <SearchByFilters />
    </form>
  );
}
