import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, IconButton, makeStyles, Button, ButtonGroup } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../images/Logo';
import FlagIcon from '../common/FlagIcon';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    position: 'relative'
  },
  flags: {
    display: 'flex',
    width: '100px',
    justifyContent: 'space-between',
    position: 'absolute',
    left: '70%;'
  }
}));

export const TopBar = ({ mobileOpen, setMobileOpen }) => {
  const classes = useStyles();

  const { i18n } = useTranslation();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <div className={classes.logo} >
          <Logo />
        </div>
        <ButtonGroup classes={{ root: classes.flags }}>
          <Button onClick={() => i18n.changeLanguage('en')}>
            <FlagIcon code='us' size="2x" />
          </Button>
          <Button onClick={() => i18n.changeLanguage('es')}>
            <FlagIcon code='es' size="2x" />
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar >
  );
};

TopBar.propTypes = {
  mobileOpen: PropTypes.bool,
  setMobileOpen: PropTypes.func
};
