import React from 'react';
import { Link } from 'react-router-dom';
import '../ComputerStyles/ComputerTablet.scss';

function ComputerTablet() {
  return (
    <div className="computer-tablet__container">
      <div className="computer-tablet__category">
        <Link to="#" className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Laptops</span>
          </div>
        </Link>
        <Link to="#" className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Desktops</span>
          </div>
        </Link>
        <Link to="#" className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>PC Gaming</span>
          </div>
        </Link>
        <Link to="/computers/monitors" className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Monitors</span>
          </div>
        </Link>
        <Link to="#" className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Tablets</span>
          </div>
        </Link>
        <Link to="#" className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Computer Accessories</span>
          </div>
        </Link>
        <Link to="#" className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Networking</span>
          </div>
        </Link>
        {/* <div className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Computer Components</span>
          </div>
        </div> */}
        <div className="computer-tablet__category-item">
          <div className="computer-tablet__category-heading">
            <span>Storage & Hard Drives</span>
          </div>
        </div>
      </div>

      <div className="computer-tablet__ads-one">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Consumer_Electronics/XCM_Manual_1500x90_1206714_1206714_US_CE_HANDPICKED_cg_18ef4ff1_9741_4ff5_b302_c3a8551a04d8_jpg_LOWER_QL85_.jpg" alt="ads" />
      </div>

      <div className="computer-tablet__handpick">
        <Link to="#" className="computer-tablet__handpick-item"><p>laptops</p></Link>
        <Link to="#" className="computer-tablet__handpick-item"><p>desktops</p></Link>
        <Link to="#" className="computer-tablet__handpick-item"><p>monitors</p></Link>
        <Link to="#" className="computer-tablet__handpick-item"><p>gaming</p></Link>
      </div>

      <div className="computer-tablet__section-heading">
        <p>Deals in Computers & Accessories</p>
      </div>
      <div className="computer-tablet__section">
        <div class="tabbed">
          <input type="radio" name="tabs" id="tab_one" checked />
          <label for="tab_one" >All available</label>
          <input type="radio" name="tabs" id="tab_two" checked />
          <label for="tab_two" >Upcoming</label>
          <input type="radio" name="tabs" id="tab_three" checked />
          <label for="tab_three" >Missed</label>
          <input type="radio" name="tabs" id="tab_four" checked />
          <label for="tab_four" >Watched Deals</label>
          <div class="tabs">
            <div>
              <h2>All available</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>
            <div>
              <h2>Upcoming</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
             </div>
            <div>
              <h2>Missed</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>
            <div>
              <h2>Watched Deals</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="computer-tablet__product-container">
        <div className="computer-tablet__product-heading">
          <p>Deals in Computers & Accessories</p>
        </div>
        <div className="computer-tablet__product-tabs">
          <ul>
            <li>All available</li>
            <li>Upcoming</li>
            <li>Missed</li>
            <li>Watch Deals</li>
          </ul>
        </div>
      </div> */}

      <div className="computer-tablet__box-one-container">
        <div className="computer-tablet__box-one-one">
          <div className="computer-tablet__box-one-img">
            <img className="responsive" src="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC._SR360,460.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Laptops</span>
          </div>
        </div>
        <div className="computer-tablet__box-one-two">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81PeBrTfhnL._AC_SL1500_.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Dektops</span>
          </div>
        </div>
        <div className="computer-tablet__box-one-three">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71S31CWSs3L._AC._SR360,460.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>CPU</span>
          </div>
        </div>
        <div className="computer-tablet__box-one-four">
          <div className="computer-tablet__box-one-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81l9Y%2BQKyRL._AC_SL1500_.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Monitors</span>
          </div>
        </div>
      </div>


      {/* <div className="computer-tablet__box-two-container">
        <div className="computer-tablet__box-two-one">
          <div className="computer-tablet__box-two-img">
            <img className="responsive" src="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC._SR360,460.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Laptops</span>
          </div>
        </div>
        <div className="computer-tablet__box-two-two">
          <div className="computer-tablet__box-two-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81PeBrTfhnL._AC_SL1500_.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Dektops</span>
          </div>
        </div>
        <div className="computer-tablet__box-two-three">
          <div className="computer-tablet__box-two-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71S31CWSs3L._AC._SR360,460.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>CPU</span>
          </div>
        </div>
        <div className="computer-tablet__box-two-four">
          <div className="computer-tablet__box-two-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81l9Y%2BQKyRL._AC_SL1500_.jpg" alt="product-image" />
          </div>
          <div className="computer-tablet__span">
            <span>Monitors</span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ComputerTablet;
