import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";

function App() {
  return (
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={About} path='/about' />
            <Route component={SinglePost} path='/portfolio/:slug' />
            <Route component={Portfolio} path='/portfolio' />
            <Route component={Blog} path='/blog' />
            <Route component={Resume} path='/resume' />
            <Route component={Contact} path='/contact' />
          </Switch>
      <FooterBar />
      </BrowserRouter>
  )
}

export default App;
