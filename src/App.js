import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Home/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/Home/AboutMe/AboutMe";
import Blogs from "./Components/Blogs/Blogs";
import Blog from "./Components/Blogs/Blog.js";
import AllProjects from "./Components/AllProjects/AllProjects";
import DetailsOne from "./Components/Details/DetailsOne";
import DetailsTwo from "./Components/Details/DetailsTwo";
import DetailsThree from "./Components/Details/DetailsThree";
import DetailsFour from "./Components/Details/DetailsFour";
import About from "./Components/About/About";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/allProjects">
            <AllProjects />
          </Route>
          <Route path="/aboutMe">
            <AboutMe />
          </Route>
          <Route path="/Blogs">
            <Blogs />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/detailsOne">
            <DetailsOne />
          </Route>
          <Route path="/detailsTwo">
            <DetailsTwo />
          </Route>
          <Route path="/detailsThree">
            <DetailsThree />
          </Route>
          <Route path="/detailsFour">
            <DetailsFour />
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="about">
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
