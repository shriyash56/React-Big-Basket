import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
import Header from "./components/header";
import Slider from "./components/slider";
import Cards from "./components/cards";
import Login from "./components/login";
import Logout from "./components/logout";


function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/logout" exact component={Logout}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home=()=>(
  
    <div>
      <Header/>
      <Slider/>
      <Cards/>
    </div>
  
)


export default App;
