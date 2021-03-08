import { createMuiTheme } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: deepPurple,
  },
  typography: {
    fontFamily: ["IRANSans", "Roboto"],
    tab: {
      fontFamily: "IRANSans",
      textTransform: "none",
    },
  },
});
