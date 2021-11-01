import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planet }) {
  return (
    <tr>
      <td data-testid="planet-name">{planet.name}</td>
      { Object.values(planet).slice(1).map(
        (value, index) => <td key={ index }>{value}</td>,
      )}
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default TableRow;
