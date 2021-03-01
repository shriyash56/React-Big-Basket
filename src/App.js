import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
import React, { lazy, Suspense } from "react";

const Header = lazy(()=> import("./components/header"));
const Slider = lazy(()=>import("./components/slider"));
const Cards = lazy(()=>import("./components/cards"));
const Login = lazy(()=>import("./components/login"));
const Signup = lazy(()=>import("./components/signup"));
const Footer = lazy(()=>import("./components/footer"));



function App() {

  return (
    <Router>
    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
          <Route path="/React-Big-Basket" exact component={Home}/>
          <Route path="/React-Big-Basket/login" exact component={Login}/>
          <Route path="/React-Big-Basket/signup" exact component={Signup}/>
      </Switch>
    </Suspense>
    </div>
    </Router>
  );
}

const Home=()=>(
  
    <div>
      <Header/>
      <Slider/>
      <Cards/>
      <Footer/>
    </div>
  
)


export default App;
