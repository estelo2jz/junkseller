import React from 'react';
import { Link } from 'react-router-dom';
import './ElectronicsMenu.scss';
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

function ElectronicsMenu(props) {
  return (
      <div className="electronics-menu">
        <div className="electronics-menu-items">
          <Link class="active" to="/tvvideo">
            <span>
              {props.category0}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/homeaudiotheater">
          <span>
            {props.category1}
          </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/cameraphotovideo">
            <span>
              {props.category2}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/cellphones">
            <span>
              {props.category3}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/headphones">
            <span>
              {props.category4}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/videogames">
            <span>
              {props.category5}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/bluetoothwireless">
            <span>
              {props.category6}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/carelectronics">
            <span>
              {props.category7}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/musicalinstruments">
            <span>
              {props.category8}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/wearabletechnology">
            <span>
              {props.category9}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/electronicsbase">
            <span>
              {props.category10}
            </span>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link to="/amazonrenewed">
            <span>
              {props.category11}
            </span>
          </Link>
        </div>
      </div>
  )
}

export default ElectronicsMenu;