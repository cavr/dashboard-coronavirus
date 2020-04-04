import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import moxios from 'moxios';

import api from '../../api/api.config';

import Dashboard from './Dashboard';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key })
}));

describe('Dashboard table test', () => {
  beforeEach(function () {
    moxios.install(api);
  });

  afterEach(function () {
    moxios.uninstall();
  });

  const props = {
    data: [{
      country: 'World',
      countryInfo: { _id: null, iso2: null, iso3: null, lat: 0, long: 0, flag: 'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/unknow.png' },
      cases: 1133453,
      todayCases: 16810,
      deaths: 60379,
      todayDeaths: 1221,
      recovered: 236000,
      active: 837074,
      critical: 39599,
      casesPerOneMillion: 145,
      deathsPerOneMillion: 7.7,
      updated: 1586000728088
    },
    {
      country: 'USA',
      countryInfo: { _id: 840, iso2: 'US', iso3: 'USA', lat: 38, long: -97, flag: 'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png' },
      cases: 277607,
      todayCases: 446,
      deaths: 7406,
      todayDeaths: 14,
      recovered: 12283,
      active: 257918,
      critical: 5787,
      casesPerOneMillion: 839,
      deathsPerOneMillion: 22,
      updated: 1586000728089
    },
    {
      country: 'Spain',
      countryInfo: { _id: 724, iso2: 'ES', iso3: 'ESP', lat: 40, long: -4, flag: 'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/es.png' },
      cases: 124736,
      todayCases: 5537,
      deaths: 11744,
      todayDeaths: 546,
      recovered: 34219,
      active: 78773,
      critical: 6416,
      casesPerOneMillion: 2668,
      deathsPerOneMillion: 251,
      updated: 1586000728092
    }]
  };

  test('Renders table', (done) => {
    const { findByText } = render(<Dashboard {...props} />);
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: props.data
      });
      const item = await findByText('Spain');

      expect(item.textContent).toBe('Spain');

      done();
    });
  });

  test('Renders all elements in table', (done) => {
    const {  container } = render(<Dashboard {...props} />);
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: props.data
      });
      const trs = container.querySelectorAll('tr');
      expect(trs.length).toBe(4);
      done();
    });
  });
});
