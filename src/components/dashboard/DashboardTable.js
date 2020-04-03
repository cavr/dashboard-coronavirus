import React from 'react';
import PropTypes from 'prop-types';
import { IntegratedFiltering, IntegratedSorting, SearchState, SortingState } from '@devexpress/dx-react-grid';
import { Grid, SearchPanel, TableHeaderRow, Toolbar, VirtualTable } from '@devexpress/dx-react-grid-material-ui';

import CountryTypeProvider from './CountryTypeProvider';
import DateTypeProvider from './DateTypeProvider';
import { tableLocales } from '../../i18n/es';
import { useTranslation } from 'react-i18next';

const Table = ({ data, columns }) => {
  const { i18n } = useTranslation();

  const giveMeTranslations = (arr) => {
    return arr.reduce((accum, item) => ({ ...accum, [item]: i18n.t(item) }), {});
  };

  const getRowId = (row) => row.countryInfo._id;

  const translations = Object.keys(tableLocales).reduce((accum, key) => {
    return { ...accum, [key]: giveMeTranslations(tableLocales[key]) };
  }, {});

  return <Grid rows={data} columns={columns} getRowId={getRowId}>
    <CountryTypeProvider for={['countryInfo']} />
    <DateTypeProvider for={['updated']} />
    <SortingState defaultSorting={[{ columnName: 'city', direction: 'asc' }]} />
    <SearchState />
    <IntegratedSorting />
    <IntegratedFiltering/>
    <VirtualTable messages={translations.tableMessages}/>
    <TableHeaderRow showSortingControls messages={translations.tableHeaderRowMessage}/>
    <Toolbar />
    <SearchPanel messages={translations.searchPanel} />
  </Grid>;
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  columns: PropTypes.arrayOf(PropTypes.shape({}))

};

export const DashboardTable = React.memo(Table);
