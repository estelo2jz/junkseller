import React from 'react';
import { Link } from 'react-router-dom';
import './HandmadeMenu.scss';


function HandmadeMenu(props) {
  return (
    <div className="handmade-menu">
      <div className="handmade-menu-items">
        <Link to="/handmade/allhandmade">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/gifts">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/jewelry">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/home&kitchen">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/wedding">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/clothing&shoes">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/handbags&accessories">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/beauty&grooming">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/stationary&partysupplies">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/toys&games">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/petsupplies">
          <span>
            {props.category10}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/homedecor">
          <span>
            {props.category11}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/artwork">
          <span>
            {props.category12}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/kitchen&dining">
          <span>
            {props.category13}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/furniture">
          <span>
            {props.category14}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/baby">
          <span>
            {props.category15}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/handmade/sellon">
          <span>
            {props.category16}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HandmadeMenu;
