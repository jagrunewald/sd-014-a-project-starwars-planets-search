import React from 'react';
import Input from './generic/Input';
import Select from './generic/Select';
import Button from './generic/Button';

function FormValueNumeric() {
  const testeOptionsColuns = ['option 1', 'option 2', 'option3'];
  const testeOptionsOperadores = ['maior que', 'menor que', 'igual a'];

  return (
    <form>
      <Select
        name="ColunasNumericas"
        setState={ (value) => console.log(value) }
        testId="column-filter"
        options={ testeOptionsColuns }
        value="option 2" // valor do state, no valor inincial deve estar o valor padrao
      />
      <Select
        name="ColunasComparação"
        setState={ (value) => console.log(value) }
        testId="comparison-filter"
        options={ testeOptionsOperadores }
        value="maior que" // valor do state, no valor inincial deve estar o valor padrao
      />
      <Input
        type="number"
        setState={ (value) => console.log(value) }
        testId="value-filter"
        name="valueFilter"
        value={ 2 } // valor do state
      />
      <Button
        testId="button-filter"
        onClick={ () => console.log('função que manipula state') }
        text="Filtrar"
      />
    </form>
  );
}

export default FormValueNumeric;
