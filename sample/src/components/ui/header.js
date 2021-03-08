import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "4rem",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "10px",
  },
}));

const Header = (props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handelTabsChange = (event, newValue) => {
    setCurrentTabIndex(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && currentTabIndex !== 0)
      setCurrentTabIndex(0);
    else if (window.location.pathname === "/applicant" && currentTabIndex !== 1)
      setCurrentTabIndex(1);
    else if (window.location.pathname === "/about" && currentTabIndex !== 2)
      setCurrentTabIndex(2);
    else if (window.location.pathname === "/contact" && currentTabIndex !== 3)
      setCurrentTabIndex(3);
  }, [currentTabIndex]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <img src={logo} alt="app logo" className={classes.logo} />
          <Typography variant="h6">Application Process</Typography>

          <Tabs
            value={currentTabIndex}
            onChange={handelTabsChange}
            className={classes.tabContainer}
            indicatorColor="primary"
          >
            <Tab
              className={classes.tab}
              label="Home"
              component={Link}
              to="/"
            ></Tab>
            <Tab
              className={classes.tab}
              label="Applicant"
              component={Link}
              to="/applicant"
            ></Tab>
            <Tab
              className={classes.tab}
              label="About Us"
              component={Link}
              to="/about"
            ></Tab>
            <Tab
              className={classes.tab}
              label="Contact Us"
              component={Link}
              to="/contact"
            ></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
