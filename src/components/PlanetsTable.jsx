import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';
import { filterData, sortNumericColumns, sortTextColumns } from '../helpers';

function PlanetsTable() {
  const { data, filters,
  } = useContext(PlanetsContext);

  const { filterByName, filterByNumericValues, order } = filters;

  const numericColumns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  let dataFiltered = [];
  if (filterByNumericValues.length > 0) {
    dataFiltered = filterData(data, filterByNumericValues);
  } else {
    dataFiltered = data;
  }

  if (numericColumns.includes(order.column)) {
    dataFiltered = sortNumericColumns(order, dataFiltered);
  } else {
    dataFiltered = sortTextColumns(order, dataFiltered);
  }

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { dataFiltered
            .filter(({ name }) => (
              name.toLowerCase().includes(filterByName.name.toLowerCase())
            ))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}

export default PlanetsTable;
