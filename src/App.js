import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
import React, { lazy, Suspense } from "react";
import Loading from "./images/loading.gif"
import Header from "./components/header";
import Slider from "./components/slider";
import Cards  from "./components/cards";
import Login from "./components/login";
import Signup from "./components/signup";
import Footer from "./components/footer";


const Lazy = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ default: () => <Resource /> });
      }, 5000);
    })
);
const Resource = () => (
  <>
    <Header />
    <Slider />
    <Cards />
    <Footer />
  </>
);


function App() {

  return (
    <Router>
    <div className="App">
    <Suspense fallback={
     <div>
     <img src={Loading} className="loading-gif" alt="loading..."></img>
   </div>
    }>
      <Switch>
          <Route path="/React-Big-Basket" exact component={Lazy}/>
          <Route path="/React-Big-Basket/login" exact component={Login}/>
          <Route path="/React-Big-Basket/signup" exact component={Signup}/>
      </Switch>
    </Suspense>
    </div>
    </Router>
  );
}


export default App;
