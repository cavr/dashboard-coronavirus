import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

import NumberFormatter from './NumberFormatter';

const NumberTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={NumberFormatter}
    {...props}
  />
);

export default NumberTypeProvider;
