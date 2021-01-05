import React from 'react';
import { Link } from 'react-router-dom';
import './HomeGardenToolsMenu.scss';


function HomeGardenMenu(props) {
  return (
    <div className="home-garden-tools-menu">
      <div className="home-garden-tools-menu-items">
        <Link to="/amazonhome">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/appliances">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/artscrafts">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/bedbath">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/collectivefineart">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/discover">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/eventsparty">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/exploreshowroom">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/fineart">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/furniture">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/gardenoutdoor">
          <span>
            {props.category10}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/homedecor">
          <span>
            {props.category11}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/kitchendining">
          <span>
            {props.category12}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/lighting">
          <span>
            {props.category13}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/mattresses">
          <span>
            {props.category14}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/petsupplies">
          <span>
            {props.category15}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/shoproom">
          <span>
            {props.category16}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/storageorganization">
          <span>
            {props.category17}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HomeGardenMenu;
