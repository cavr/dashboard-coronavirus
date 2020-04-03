import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

import DateFormatter from './DateFormatter';

const DateTypeProvider = props => <DataTypeProvider
  formatterComponent={DateFormatter}
  {...props}
/>
;

export default DateTypeProvider;
