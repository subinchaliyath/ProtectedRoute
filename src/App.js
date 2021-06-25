import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Secret from "./components/Secret";
import ProtectedRoute from "./components/ProtectedRoute";

const username = "subin";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" render={() => <Home username={username} />} />
        <ProtectedRoute exact path="/secret">
          <Secret username={username} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
