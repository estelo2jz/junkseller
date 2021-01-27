import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../ComputerStyles/ComputerTablet.scss';
import '../ComputerStyles/ComputerTabletTemplate.scss';
import '../ComputerStyles/Upcoming.scss';
import { useStateValue } from '../../StateProvider';

function ComputerTabletTemplate({ id, title, image, price, rating, rateNumber, soldBy, listPrice }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket...
    // to manipulate the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        rateNumber: rateNumber,
        soldBy: soldBy,
        listPrice: listPrice
      }
    })
  };
  return (
    <div key="id" className="computer-tablet-template__container">
      <div className="computer-tablet-template__left-container">
        <div className="computer-tablet-template__img">
          <img src={image} alt="computer-product-image" />
        </div>
      </div>
      <div className="computer-tablet-template__right-container">
        <div className="computer-tablet-template__title">
          <p>{title}</p>
        </div>
        <div className="computer-tablet-template__price">
          <p> $ {price}</p>
          <p>List: {listPrice}</p>
        </div>
        <div className="computer-tablet-template__desc">
          <p>{soldBy}</p>
        </div>
        <div className="computer-tablet-template__rating">
          <div className="computer-tablet-template__rating-stars">
            {
              Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))
            }
          </div>
          <p>{rateNumber}</p>
        </div>
        <div className="computer-tablet-template__btn">
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </div>
  )
}

function Upccoming() {
  return (
    <div className="upcoming__container">
      <div className="upcoming__top">
        <div className="upcoming__img">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71gEjv5GXJL._AC_SL1500_.jpg" alt="upcoming-img" />
        </div>
        <p>early access deal</p>
      </div>
      <div className="upcoming__bottom">
        <div className="upcoming__info">
          <p>
            Full HD 1080P AutoFocus Webcam with Microphones & Privacy Cover,USB Video Web Cam for Computers PC Laptop Desktop,Web Camera for Live Streaming,Conference Study Video Calling and Chatting,Skype
          </p>
          <p>Starts for you in 48:30</p>
          <p>Get access to this deal 30 minutes earlier with <span>Member Access</span>.</p>
        </div>
      </div>
    </div>
  )
}

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
        <Link to="/computers/monitors" className="computer-tablet__handpick-item"><p>monitors</p></Link>
        <Link to="#" className="computer-tablet__handpick-item"><p>gaming</p></Link>
      </div>

      <div className="computer-tablet__section-heading">
        <p>Deals in Computers & Accessories</p>
      </div>
      <div className="computer-tablet__section">
        <div className="tabbed">
          <input type="radio" name="tabs" id="tab_one" checked />
          <label for="tab_one" >All available</label>
          <input type="radio" name="tabs" id="tab_two" checked />
          <label for="tab_two" >Upcoming</label>
          <input type="radio" name="tabs" id="tab_three" checked />
          <label for="tab_three" >Missed</label>
          <input type="radio" name="tabs" id="tab_four" checked />
          <label for="tab_four" >Watched Deals</label>
          <div className="tabs">
            <div className="tabs-template__outer-container">
              <div className="tabs-template__container">
                <ComputerTabletTemplate 
                  id={uuid()}
                  title="NETGEAR Nighthawk Smart Wi-Fi Router, R6700 - AC1750 Wireless Speed Up to 1750 Mbps | Up to 1500 Sq Ft Coverage & 25 Devices | 4 x 1G Ethernet and 1 x 3"
                  price={76.49}
                  rateNumber={"66,695"}
                  rating={5}
                  listPrice="$23.50 (24% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/61FA9BbugzL._AC_SL1500_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control and QoS"
                  price={56.99}
                  rateNumber={"167,320"}
                  rating={4}
                  listPrice="$59.99 (5% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="TP-Link Deco Mesh WiFi System(Deco M5) –Up to 5,500 sq. ft. Whole Home Coverage and 100+ Devices,WiFi Router/Extender Replacement, Parental"
                  price={149.99}
                  rateNumber={"167,320"}
                  rating={4}
                  listPrice="$182.99 (21% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/611EW6z8sZL._AC_SL1500_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="NETGEAR 8-Port Gigabit Ethernet Unmanaged Switch (GS308) - Home Network Hub, Office Ethernet Splitter, Plug-and-Play, Fanless Metal Housing, Desktop or Wall"
                  price={17.99}
                  rateNumber={"167,320"}
                  rating={5}
                  listPrice="$27.99 (36% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/71Ik6OnO2OL._AC_SL1500_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="TP-Link AC1200 Gigabit WiFi Router (Archer A6) - 5GHz Gigabit Dual Band MU-MIMO Wireless Internet Router, Supports Beamforming, Guest WiFi and AP mode, Long..."
                  price={42.99}
                  rateNumber={"167,320"}
                  rating={4}
                  listPrice="$49.99 (14% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/61vPhw-7BxL._AC_SL1500_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="TP-Link AX1800 Dual-Band Wi-Fi 6 Smart Router Archer AX21, Works with Alexa – A Certified for Humans Device"
                  price={99.99}
                  rateNumber={"167,320"}
                  rating={4}
                  listPrice="$129.99 (23% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/61O4qvVY6XL._AC_SL1492_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="Powlaken for Surface Pro Charger 65W, Compatible with Surface Pro 3/4/5/6/7 Power Supply Adapter, Compatible for Both Microsoft Surface Book Laptop/Tablet,..."
                  price={22.36}
                  rateNumber={"167,320"}
                  rating={4}
                  listPrice="$26.95 (17% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/61zBs%2B1yERL._AC_SL1500_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="TP-Link Deco Mesh WiFi System (Deco S4) – Up to 5,500 Sq.ft. Coverage, WiFi Router and Extender Replacement, Gigabit Ports, Seamless Roaming, Parental..."
                  price={134.99}
                  rateNumber={"167,320"}
                  rating={5}
                  listPrice="$149.99 (10% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/71GGwvCrW1L._AC_SL1500_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="NETGEAR Nighthawk Cable Modem Wi-Fi Router Combo C7000-Compatible with Cable Providers Including Xfinity by Comcast, Spectrum, Cox for Cable Plans Up to 400 Mbps | AC1900 Wi-Fi Speed | DOCSIS 3.0"
                  price={169.99}
                  rateNumber={"167,320"}
                  rating={5}
                  listPrice="$209.99 (19% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/71AWauXOUOL._AC_SL1350_.jpg"
                />
                <ComputerTabletTemplate
                  id={uuid()}
                  title="USB C Hub Adapter for MacBook Pro 13 15 16 inch 2020 2019 2018 2017 2016,with Thunderbolt 3 5K 60HZ, 4K HDMI,100W PD, 2 USB 3.0 and SD TF Card Readers, Multiport Dongle for MacBook Air 2020 2019 2018"
                  price={25.49}
                  rateNumber={"167,320"}
                  rating={5}
                  listPrice="$36.99 (31% off)"
                  soldBy="Ships from and sold by JunkSeller."
                  image="https://images-na.ssl-images-amazon.com/images/I/71ijB54TBwL._AC_SL1500_.jpg"
                />
              </div>
            </div>
            <div className="tabs-template__outer-container">
              <div className="tabs-template__upcoming">
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
                <Upccoming />
              </div>
            </div>
            <div className="tabs-template__outer-container">
              <div className="tabs-template__container">

              </div>
            </div>
            <div className="tabs-template__outer-container">
              <div className="tabs-template__container">
                <Upccoming />
              </div>
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

      {/* <div className="computer-tablet__box-one-container">
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
      </div> */}


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
