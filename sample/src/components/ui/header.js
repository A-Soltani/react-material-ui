import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import logo from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "7rem",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "IRANSans",
  },
}));

const Header = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handelTabsChange = (newValue) => {
    setCurrentTabIndex(newValue);
  };

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
          >
            <Tab className={classes.tab} label="Home"></Tab>
            <Tab label="Applicant"></Tab>
            <Tab label="About Us"></Tab>
            <Tab label="Contact Us"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
