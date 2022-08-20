import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import routes from "routes";

import Sidebar from "components/Sidebar";
import Route from "components/Route";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <Switch>
          {routes.map((r) => (
            <Route key={r.name} path={r.path} exact routeInfo={r} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
