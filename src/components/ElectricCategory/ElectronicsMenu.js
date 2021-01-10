import React from 'react';
import { Link } from 'react-router-dom';
import './ElectronicsMenu.scss';
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

function ElectronicsMenu(props) {
  return (
      <div className="electronics-menu">
        <div className="electronics-menu-items">
          <Link className="category-one" to="/tvvideo">
            <label>
              {props.category0}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-two" to="/homeaudiotheater">
          <label>
            {props.category1}
          </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-three" to="/cameraphotovideo">
            <label>
              {props.category2}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-four" to="/cellphones">
            <label>
              {props.category3}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-five" to="/headphones">
            <label>
              {props.category4}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-six" to="/videogames">
            <label>
              {props.category5}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-seven" to="/bluetoothwireless">
            <label>
              {props.category6}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-eight" to="/carelectronics">
            <label>
              {props.category7}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-nine" to="/musicalinstruments">
            <label>
              {props.category8}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-ten" to="/wearabletechnology">
            <label>
              {props.category9}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-eleven" to="/electronicsbase">
            <label>
              {props.category10}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-twelve" to="/amazonrenewed">
            <label>
              {props.category11}
            </label>
          </Link>
        </div>
      </div>
  )
}

export default ElectronicsMenu;
