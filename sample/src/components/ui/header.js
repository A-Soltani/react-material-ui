import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

import logo from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "7rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <img src={logo} alt="app logo" className={classes.logo} />
          <Typography variant="h6">Application Process</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
