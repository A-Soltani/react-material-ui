import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./ui/theme";
import Header from "../components/ui/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
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
}

export default App;
