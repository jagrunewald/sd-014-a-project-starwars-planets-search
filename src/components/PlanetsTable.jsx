import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function PlanetsTable() {
  const { data, filters } = useContext(PlanetsContext);

  const filterPlanets = () => {
    const { filterByName, filterByNumericValues } = filters;
    const { column, comparison, value } = filterByNumericValues[0];

    const filteredPlanets = data
      .filter(({ name }) => (
        name.toLowerCase().includes(filterByName.name.toLowerCase())
      ))
      .filter((planet) => {
        if (!value) return planet;
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') return planet[column] === value;
        console.log(planet);
        return planet;
      });
    return filteredPlanets;
  };

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
          { filterPlanets().map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
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
