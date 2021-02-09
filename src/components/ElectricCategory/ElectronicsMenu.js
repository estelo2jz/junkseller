import React from 'react';
import { Link } from 'react-router-dom';
import './ElectronicsMenu.scss';
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

function ElectronicsMenu(props) {
  return (
      <div className="electronics-menu">
        <div className="electronics-menu-items">
          <Link className="category-one" to="/electronics/tvvideo">
            <label>
              {props.category0}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-two" to="/electronics/homeaudiotheater">
          <label>
            {props.category1}
          </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-three" to="/electronics/cameraphotovideo">
            <label>
              {props.category2}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-four" to="/electronics/cellphones">
            <label>
              {props.category3}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-five" to="/electronics/headphones">
            <label>
              {props.category4}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-six" to="/electronics/videogames">
            <label>
              {props.category5}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-seven" to="/electronics/bluetoothwireless">
            <label>
              {props.category6}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-eight" to="/electronics/carelectronics">
            <label>
              {props.category7}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-nine" to="/electronics/musicalinstruments">
            <label>
              {props.category8}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-ten" to="/electronics/wearabletechnology">
            <label>
              {props.category9}
            </label>
          </Link>
        </div>
        <div className="electronics-menu-items">
          <Link className="category-eleven" to="/electronics/electronicsbase">
            <label>
              {props.category10}
            </label>
          </Link>
        </div>
      </div>
  )
}

export default ElectronicsMenu;
