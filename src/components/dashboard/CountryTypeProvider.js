import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

import CountryFormatter from './CountryFormatter';

const CountryTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CountryFormatter}
    {...props}
  />
);

export default CountryTypeProvider;
