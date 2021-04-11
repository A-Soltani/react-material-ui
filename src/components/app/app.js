import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainLayout from "./../layout/main-layout";
import theme from "../../theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}></Route>
          <Route
            exact
            path="/applicant"
            component={() => <div>Applicnat</div>}
          ></Route>
          <Route exact path="/about" component={() => <div>About</div>}></Route>
          <Route
            exact
            path="/contact"
            component={() => <div>Contact</div>}
          ></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
