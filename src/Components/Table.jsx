import React, { useState, useEffect, useContext } from 'react';
import FilterContext from './Context/FilterContext';

function Table() {
  const [planets, setPlanets] = useState([]);
  const [tableHeadData, setTableHeadData] = useState([]);

  let filteredPlanets = [...planets];

  useEffect(() => {
    const fetchAPI = async () => {
      const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(API_URL);
      const { results } = await response.json();
      const resultsWithoutResidents = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(resultsWithoutResidents);
      setTableHeadData(Object.keys(resultsWithoutResidents[0]));
    };
    fetchAPI();
  }, []);

  const tableHead = () => (
    <thead>
      <tr>
        { tableHeadData.map((column, index) => (
          <th key={ index }>{column}</th>
        ))}
      </tr>
    </thead>
  );

  const { filters: { filterByName: { name } } } = useContext(FilterContext);
  if (name) {
    filteredPlanets = filteredPlanets.filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase())
    );
  }

  return (
    <table>
      { tableHead() }
      <tbody>
        { filteredPlanets.map((planet, index) => (
          <tr key={ index }>
            {tableHeadData.map((column, dataindex) => (
              <td key={ dataindex }>{ planet[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
