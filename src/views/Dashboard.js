import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import { DashboardFilter } from '../components/dashboard/DashboardFilter';
import FlagIcon from '../components/common/FlagIcon';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto'
  }
});

const Dashboard = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  const retrieveData = async () => {
    const result = await axios.get('https://corona.lmao.ninja/countries');

    result && result.data && setData(result.data);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const columns =
      ['country', 'cases', 'todayCases',
        'deaths', 'todayDeaths', 'recovered', 'active',
        'critical', 'casesPerOneMillion', 'deathsPerOneMillion'];

  return <Paper className={classes.root}><Typography variant="caption">Dashboard</Typography>
    <DashboardFilter onFilterChange={() => console.log('CHange')} ></DashboardFilter>
    <div className={classes.tableWrapper}>
      <Table stickyHeader>
        <TableHead >
          <TableRow>
            <TableCell>

            </TableCell>
            {
              columns.map((column, index) =>
                <TableCell key={index}>
                  {column.toUpperCase()}
                </TableCell>
              )
            }
            <TableCell>Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.country}>
              {row.countryInfo.iso2 &&
              <TableCell>
                <FlagIcon code={row.countryInfo.iso2.toLowerCase()} size="2x" />
              </TableCell>}
              {
                columns.map((column, index) =>
                  <TableCell key={`${column} ${row.countryInfo._id}`}>
                    {row[column]}
                  </TableCell>
                )
              }
              <TableCell>
                {new Date(row.updated).toLocaleDateString('en-US')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </Paper>;
};

export default Dashboard;
