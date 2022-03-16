//packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

//styles

//components
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">portfolio</Route>
          <Route path="/contact">contact</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
