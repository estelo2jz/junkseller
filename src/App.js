import './App.css';
import './styles/main.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

import Electronics from './components/category/Electronics';
import Computers from './components/category/Computers';
import SmartHome from './components/category/SmartHome';
import HomeGardenTools from './components/category/HomeGardenTools';
import PetSupplies from './components/category/PetSupplies';
import FoodGrocery from './components/category/FoodGrocery';
import BeautyHealth from './components/category/BeautyHealth';
import ToysKidsBaby from './components/category/ToysKidsBaby';
import Handmade from './components/category/Handmade';
import Sports from './components/category/Sports';
import Outdoors from './components/category/Outdoors';
import AutomotiveIndustrial from './components/category/AutomotiveIndustrial';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* <Header /> */}
            <NavBar />
            <Checkout />
          </Route>
          <Route path="/login">
            {/* <Header /> */}
            <NavBar />
            <h1>Login</h1>
          </Route>
          <Route exact path="/">
            {/* <Header /> */}
            <NavBar />
            <Home />
          </Route>
          <Route path="/electronics" component={Electronics}>
            <NavBar />
            <Electronics />
          </Route>
          <Route path="/computers" component={Computers}>
            <NavBar />
            <Computers />
          </Route>
          <Route path="/smarthome" component={SmartHome}>
            <NavBar />
            <SmartHome />
          </Route>
          <Route path="/homegardentools" component={HomeGardenTools}>
            <NavBar />
            <HomeGardenTools />
          </Route>
          <Route path="/petsupplies" component={PetSupplies}>
            <NavBar />
            <PetSupplies />
          </Route>
          <Route path="/foodgrocery" component={FoodGrocery}>
            <NavBar />
            <FoodGrocery />
          </Route>
          <Route path="/beautyhealth" component={BeautyHealth}>
            <NavBar />
            <BeautyHealth />
          </Route>
          <Route path="/toyskidsbaby" component={ToysKidsBaby}>
            <NavBar />
            <ToysKidsBaby />
          </Route>
          <Route path="/handmade" component={Handmade}>
            <NavBar />
            <Handmade />
          </Route>
          <Route path="/sports" component={Sports}>
            <NavBar />
            <Sports />
          </Route>
          <Route path="/outdoors" component={Outdoors}>
            <NavBar />
            <Outdoors />
          </Route>
          <Route path="/automotiveindustrial" component={AutomotiveIndustrial}>
            <NavBar />
            <AutomotiveIndustrial />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
