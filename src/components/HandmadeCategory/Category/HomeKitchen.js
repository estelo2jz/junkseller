import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HomeKitchen.scss';
function HomeKitchen() {
  return (
    <div className="home-kitchen__container">
      <div className="home-kitchen__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/home&kitchen</p>
      </div>
      <div className="home-kitchen__section">
        <div className="home-kitchen__heading">
          <p>Home & Kitchen</p>
          <p>Unique, handcrafted home decor, artwork, kitchen accessories & more.</p>
        </div>
        <div className="home-kitchen__header">
          <p>Shop by Category</p>
        </div>
        <div className="home-kitchen__section-outer">
          <div className="home-kitchen__section-categories">
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>home decor</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>artwork</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>kitchen & dining</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>furniture</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>lighting</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>bath</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>pet bowls & feeders</p>
            </Link>
            <Link to="/handmade/home&kitchen" className="home-kitchen__links">
              <p>bedding</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeKitchen
