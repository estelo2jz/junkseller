import React from 'react';
import { Link } from 'react-router-dom';
import './HomeGardenToolsMenu.scss';


function HomeGardenMenu(props) {
  return (
    <div className="home-garden-tools-menu">
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/home">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/appliances">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/arts&crafts">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/bed&bath">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/collective&fineart">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/discover">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/events&partysupplies">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/exploreshowroom">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/fineart">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/furniture">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/garden&outdoor">
          <span>
            {props.category10}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/homedecor">
          <span>
            {props.category11}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/kitchen&dining">
          <span>
            {props.category12}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/lighting">
          <span>
            {props.category13}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/mattresses">
          <span>
            {props.category14}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/petsupplies">
          <span>
            {props.category15}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/shoproom">
          <span>
            {props.category16}
          </span>
        </Link>
      </div>
      <div className="home-garden-tools-menu-items">
        <Link to="/home&garden&tools/storage&organization">
          <span>
            {props.category17}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HomeGardenMenu;
