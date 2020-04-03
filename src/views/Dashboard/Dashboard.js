import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DashboardTable } from '../../components/dashboard';
import useDashboard from './useDashboard';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto'
  }
});

const columns = ['countryInfo', 'country', 'cases', 'todayCases',
  'deaths', 'todayDeaths', 'recovered',
  'deathsPerOneMillion', 'updated'];

const Dashboard = () => {
  const classes = useStyles();

  const { i18n } = useTranslation();

  const { countries } = useDashboard();

  const columnsWithTitle = columns.map(column => ({ name: column, title: i18n.t(column) }));

  return <Paper className={classes.root}>
    <DashboardTable columns={columnsWithTitle} data={countries} />
  </Paper>;
};

export default Dashboard;
