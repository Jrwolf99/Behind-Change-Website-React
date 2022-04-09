//packages
import { Switch, Route, useLocation } from "react-router-dom";

//styles

//components
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
