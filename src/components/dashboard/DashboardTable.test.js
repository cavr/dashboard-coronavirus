import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DashboardTable } from './DashboardTable';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key })
}));

describe('Dashboard table test', () => {
  const props = {
    data: [{
      country: 'World',
      countryInfo: { iso2: null, _id: 0 },
      updated: 1586000728088
    },
    {
      country: 'USA',
      countryInfo: { iso2: 'US', _id: 1 },
      updated: 1586000728089
    },
    {
      country: 'Spain',
      countryInfo: { iso2: 'ES', _id: 2 },
      updated: 1586000728092
    }],
    tableColumns: ['country', 'countryInfo', 'updated']
  };

  test('Renders table', async () => {
    const { findByText } = render(<DashboardTable {...props} />);
    const item = await findByText('Spain');
    expect(item.textContent).toBe('Spain');
  });

  test('Renders 4 items with header', async () => {
    const { container } = render(<DashboardTable {...props} />);
    const items = await container.querySelectorAll('tr');
    expect(items.length).toBe(4);
  });

  test('Search table', async () => {
    const { container } = render(<DashboardTable {...props} />);
    const search = container.querySelector('input[type="text"]');

    fireEvent.change(search, { target: { value: 'Spain' } });

    const items = await container.querySelectorAll('tr');

    expect(items.length).toBe(2);
  });

  test('Render flags', async () => {
    const { container } = render(<DashboardTable {...props} />);

    const flags = container.querySelector('.flag-icon-es');

    expect(flags.classList.contains('flag-icon-es')).toBeTruthy();
  });

  test('Render flags', async () => {
    const { container } = render(<DashboardTable {...props} />);

    const flags = container.querySelector('.flag-icon-es');

    expect(flags.classList.contains('flag-icon-es')).toBeTruthy();
  });

  test('Render date-format', async () => {
    const { findAllByTestId } = render(<DashboardTable {...props} tableColumns={['updated']}/>);

    const date = await findAllByTestId('date');

    expect(date[0].textContent).toBe('4/4/2020 ');
  });
});
