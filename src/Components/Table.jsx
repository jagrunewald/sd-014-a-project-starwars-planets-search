import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function Table() {
  const { data, PlanetFetch, filtrado } = useContext(PlanetsContext);

  useEffect(() => {
    PlanetFetch();
  }, []);

  const resultadoFiltro = () => {
    if (filtrado.length > 0) {
      return filtrado;
    }
    return data;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation period</th>
          <th>orbital period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {resultadoFiltro().map((item) => (
          <tr key={ item.name }>
            <td>{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
