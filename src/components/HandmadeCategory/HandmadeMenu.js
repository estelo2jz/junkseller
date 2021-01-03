import React from 'react';
import { Link } from 'react-router-dom';
import './HandmadeMenu.scss';


function HandmadeMenu(props) {
  return (
    <div className="handmade-menu">
      <div className="handmade-menu-items">
        <Link to="/tvvideo">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/homeaudiotheater">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/cameraphotovideo">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/cellphones">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/headphones">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/videogames">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/bluetoothwireless">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/carelectronics">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/musicalinstruments">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/wearabletechnology">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/electronicsbase">
          <span>
            {props.category10}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/amazonrenewed">
          <span>
            {props.category11}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/carelectronics">
          <span>
            {props.category12}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/musicalinstruments">
          <span>
            {props.category13}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/wearabletechnology">
          <span>
            {props.category14}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/electronicsbase">
          <span>
            {props.category15}
          </span>
        </Link>
      </div>
      <div className="handmade-menu-items">
        <Link to="/amazonrenewed">
          <span>
            {props.category16}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HandmadeMenu;
