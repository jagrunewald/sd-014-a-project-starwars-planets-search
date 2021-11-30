import { useState, useEffect } from 'react';

const useFilter = (defaultValue, newValue, typeNewValue) => {
  const [filter, setFilter] = useState(defaultValue);

  useEffect(() => {
    setFilter({ ...filter, [typeNewValue]: newValue });
  }, [typeNewValue, newValue]);

  return filter;
};

export default useFilter;
