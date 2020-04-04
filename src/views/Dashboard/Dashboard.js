import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DashboardTable } from '../../components/dashboard';
import useDashboard from './useDashboard';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto'
  }
});

const Dashboard = () => {
  const classes = useStyles();

  const { countries } = useDashboard();

  return <Paper  className={classes.root}>
    <DashboardTable data={countries} />
  </Paper>;
};

export default Dashboard;
