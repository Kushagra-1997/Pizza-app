import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
