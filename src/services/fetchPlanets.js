export default async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');

  return (
    response.ok
      ? response.json()
      : new Error('A requisição falhou')
  );
}
