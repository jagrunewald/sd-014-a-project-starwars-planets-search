import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppContext from '../context/AppContext';

import Loading from './Loading';

export default function Table() {
  const {
    data,
    getData,
    filters,
  } = useContext(AppContext);
  const { filterByName } = filters;

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Lógica da pessoa colega Leonardo Bermejo */
  const filteredData = data.filter((planet) => {
    if (filterByName !== '') {
      return planet.name.toLowerCase().includes(filterByName.name.toLowerCase());
    }
    return planet;
  });

  const { loading } = useContext(AppContext);
  if (loading) return <Loading />;
  return (
    <table>
      <thead>
        <tr>
          { Object.keys(data[0]).map((category) => (
            <th key={ uuidv4() }>
              { category }
            </th>
          )) }
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet) => {
          const planetInfo = Object.values(planet);
          return (
            <tr key={ uuidv4() }>
              { planetInfo.map((info) => (
                <td
                  key={ uuidv4() }
                  className="m-3"
                >
                  {info}
                </td>
              )) }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
