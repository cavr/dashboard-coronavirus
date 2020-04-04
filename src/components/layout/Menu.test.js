import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { menuConf as items } from '../../menuConf';
import { Menu } from './Menu';
import { history } from '../../history';

describe('Menu ', () => {
  const props = {
    items,
    mobileOpen: true,
    setMobileOpen: jest.fn()
  };

  test('Menu should appears', async () => {
    const { findByText } = render(
      <Router history={history}>
        <Menu {...props} />
      </Router>
    );

    const dashboardMenuEntry = await findByText('Dashboard');
    expect(dashboardMenuEntry.textContent).toBe('Dashboard');
  });
  test('Menu should have link', async () => {
    const { findByRole } = render(
      <Router history={history}>
        <Menu {...props} />
      </Router>
    );

    const link = await findByRole('button');

    expect(link.getAttribute('href')).toBe('/dashboard');
  });

  test('Menu should close', async (done) => {
    props.setMobileOpen = (open) => {
      expect(open(false)).toBe(true);
      done();
    };

    render(
      <Router history={history}>
        <Menu {...props} />
        <div data-testid="div" />
      </Router>
    );

    const outer = document.querySelector('.MuiBackdrop-root');

    await fireEvent.click(outer);
  });
});
