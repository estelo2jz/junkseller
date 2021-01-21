import React from 'react';
import { Link } from 'react-router-dom';
import './HomeGardenToolsMenu.scss';


function HomeGardenMenu(props) {
  return (
    <div className="home-garden-tools-menu">
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/amazonhome">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/appliances">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/artscrafts">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/bedbath">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/collectivefineart">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/discover">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/eventsparty">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/exploreshowroom">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/fineart">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/furniture">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/gardenoutdoor">
          <span>
            {props.category10}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/homedecor">
          <span>
            {props.category11}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/kitchendining">
          <span>
            {props.category12}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/lighting">
          <span>
            {props.category13}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/mattresses">
          <span>
            {props.category14}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/petsupplies">
          <span>
            {props.category15}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/shoproom">
          <span>
            {props.category16}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homegardentools/storageorganization">
          <span>
            {props.category17}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HomeGardenMenu;
