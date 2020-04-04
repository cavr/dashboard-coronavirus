import React from 'react';
import PropTypes from 'prop-types';
import { IntegratedFiltering, IntegratedSorting, SearchState, SortingState } from '@devexpress/dx-react-grid';
import { Grid, SearchPanel, TableHeaderRow, Toolbar, VirtualTable } from '@devexpress/dx-react-grid-material-ui';

import CountryTypeProvider from './CountryTypeProvider';
import DateTypeProvider from './DateTypeProvider';
import { tableLocales } from '../../i18n/es';
import { useTranslation } from 'react-i18next';
import NumberTypeProvider from './NumberTypeProvider';

const columns = ['countryInfo',
  'country', 'cases', 'todayCases',
  'deaths', 'todayDeaths', 'recovered',
  'deathsPerOneMillion', 'updated'];

const Table = ({ data, tableColumns }) => {
  const { t } = useTranslation();

  const columnsWithTitle = tableColumns.map(column => ({ name: column, title: t(column) }));

  const giveMeTranslations = (arr) => {
    return arr.reduce((accum, item) => ({ ...accum, [item]: t(item) }), {});
  };

  const getRowId = (row) => row.countryInfo._id;

  const translations = Object.keys(tableLocales).reduce((accum, key) => {
    return { ...accum, [key]: giveMeTranslations(tableLocales[key]) };
  }, {});

  return <Grid rows={data} columns={columnsWithTitle} getRowId={getRowId}>
    <CountryTypeProvider for={['countryInfo']} />
    <DateTypeProvider for={['updated']} />
    <NumberTypeProvider for={['cases', 'todayCases',
      'deaths', 'todayDeaths', 'recovered',
      'deathsPerOneMillion']}/>
    <SortingState />
    <SearchState />
    <IntegratedSorting />
    <IntegratedFiltering/>
    <VirtualTable messages={translations.tableMessages}/>
    <TableHeaderRow showSortingControls messages={translations.tableHeaderRowMessage}/>
    <Toolbar />
    <SearchPanel messages={translations.searchPanel} />
  </Grid>;
};

Table.defaultProps = {
  tableColumns: columns
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  tableColumns: PropTypes.arrayOf(PropTypes.shape({}))

};

export const DashboardTable = React.memo(Table);
