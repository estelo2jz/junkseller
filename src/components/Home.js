import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import Product from './Product';
import Slider from './Slider';
import ComingSoon from './ComingSoon';


function Home() {
  return (
    <div className="home__container">
      <ComingSoon />
      {/* <Slider /> */}
      {/* <div>
        <h1>Shop By Department </h1>
      </div> */}
      {/* <div className="home__links-container">
        <div className="home__link">
          <Link to="/electronics"><p>Electronics</p></Link>
        </div>
        <div className="home__link">
          <Link to="/computers"><p>Computer</p></Link>
        </div>
        <div className="home__link">
          <Link to="/homegardentools"><p>Home, Garden & Tools</p></Link>
        </div>
        <div className="home__link">
          <Link to="/petsupplies"><p>Pet Supplies</p></Link>
        </div>
        <div className="home__link">
          <Link to="/outdoors"><p>Outdoors</p></Link>
        </div>
        <div className="home__link">
          <Link to="/smarthome"><p>Smart Home</p></Link>
        </div>
        <div className="home__link">
          <Link to="/foodgrocery"><p>Fodd & Grocery</p></Link>
        </div>
        <div className="home__link">
          <Link to="/beautyhealth"><p>Beauty & Health</p></Link>
        </div>
        <div className="home__link">
          <Link to="/toyskidsbaby"><p>Toys, Kids & Baby</p></Link>
        </div>
        <div className="home__link">
          <Link to="/handmade"><p>Handmade</p></Link>
        </div>
        <div className="home__link">
          <Link to="/sports"><p>Sports</p></Link>
        </div>
        <div className="home__link">
          <Link to="/automotiveindustrial"><p>Automotive & Industrial</p></Link>
        </div>
      </div> */}
    </div>
  )
}

export default Home;