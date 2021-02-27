import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../ComputerStyles/ComputerTablet.scss';
import '../ComputerStyles/ComputerTabletTemplate.scss';
import '../ComputerStyles/Upcoming.scss';
import { useStateValue } from '../../StateProvider';
import JumpTo from './JumpTo';

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
          <img src={image} alt="computer-product" />
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

function Upccoming({upImage, upTitle, upTime}) {
  return (
    <div className="upcoming__container">
      <div className="upcoming__top">
        <div className="upcoming__img">
          <img src={upImage} alt="upcoming-img" />
        </div>
        <p>early access deal</p>
      </div>
      <div className="upcoming__bottom">
        <div className="upcoming__info">
          <p>{upTitle}</p>
          <p>Starts for you at {upTime}</p>
          <p>Get access to this deal 30 minutes earlier with <span>Member Access</span>.</p>
        </div>
      </div>
    </div>
  )
}

function ComputerTablet() {
  return (
    <div className="computer-tablet__container">
      <div className="computer-tablet__jump-to">
        <JumpTo 
          path1 = "/computers/harddrives&storage"
          link1 = "hard-drives&storage"
          path2 = "/computers/parts&components"
          link2 = "parts&components"
          path3 = "/computers/accessories"
          link3 = "accessories"
          path4 = "/computers/networking"
          link4 = "networking"
          path5 = "/computers/monitors"
          link5 = "monitors"
        />
      </div>
      <div className="computer-tablet__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/computers">
          <p>
            /computers
          </p>
        </Link>
        <p>/computers&tablets&PC</p>
      </div>
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
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/71VO3hIy7ZL._AC_SL1500_.jpg"
                  upTitle= "Laptop Backpack with USB Charging Port,Slim Travel Backpack with Laptop Compartment for Men and Women,Water Resistant College School BookBag Computer Bag for Girls and Boys Fits 15.6 In Laptop, Blue"
                  upTime = "7:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/71syj0gvm6L._SL1500_.jpg"
                  upTitle = "Cat8 Ethernet Cable 25 ft, High Speed Outdoor Indoor & in Wall LAN Internet Flat Cable, Weatherproof&UV Resistant, 40Gbps 2000Mhz Solid Cat 8 Heavy"
                  upTime = "9:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/91m0qe0%2BsQL._AC_SL1500_.jpg"
                  upTitle= "Voova 11.6-12 Inch Laptop Sleeve Case Cover, Water Resistant Computer Protective Bag Compatible with MacBook Air 11, Mac 12,Surface Pro X 7 6 5 4,Samsung Asus Acer Chromebook 3 4 R11 with Handle,Khaki"
                  upTime = "10:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/616jZEMvxVL._AC_SL1200_.jpg"
                  upTitle= "Mini PC Beelink U57 Intel Core i5-5257u Processor(up to 3.10 GHz) Windows 10 Pro,8G DDR3/512G SSD High Performance Business Mini Computer,4K UHD,2.4G/5G Dual WiFi,BT4.2,Dual HDMI Ports"
                  upTime = "7:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/61Nqnyk2XEL._AC_SL1500_.jpg"
                  upTitle= "Golvery Wireless Headphones for TV Watching Listening w/Transmitter Adapter, Rechargeable Over Ear Bluetooth Headset Stereo Hearing Set Ideal for Seniors, Plug n Play, No Audio Delay, 15H Playtime"
                  upTime = "8:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/71j2DPXfHaL._AC_SL1500_.jpg"
                  upTitle= "KRISLOG for iPhone Charger, MFi Certified Lightning Cable 10Ft 6Ft×2 3Ft×2 Braided iPhone Cable Data Sync Transfer Cord Compatible with iPhone 11 Pro Max/XS MAX/XR/XS/X/8/7/Plus/6S 5-Pack Updated"
                  upTime = "10:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/51VSlutsg9L._AC_SL1080_.jpg"
                  upTitle= "livho 2 Pack Blue Light Blocking Glasses, Computer Reading/Gaming/TV/Phones Glasses for Women Men,Anti Eyestrain & UV Glare (Light Blcak+Clear)"
                  upTime = "12:00 am"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/71eUB2EqoML._AC_SL1500_.jpg"
                  upTitle= "ACEPC T11 Mini PC Windows 10 Pro, 8GB DDR3/128GB eMMC Fanless Mini Computer Intel Atom Z8350 Desktop Computer Support Dual Display, 4K HD, Bluetooth 4.2, Gigabit LAN, Dual Band WiFi"
                  upTime = "06:00 am"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/61FotETvF1L._AC_SL1500_.jpg"
                  upTitle= "Stylus Pen for iPad Compatible with Apple Pencil 2 Generation for iPad/Pro 2018/2019/2020 with Palm Rejection White"
                  upTime = "02:00 am"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/61Q1ciCSyjL._AC_SL1000_.jpg"
                  upTitle = "Mirabox USB3.0 HDMI Video Capture Card, 1080P 60FPS HD Game Capture Device Cam Link with HDMI Passthrough Work with DSLR Xbox PS4 Nintendo Switch for OBS"
                  upTime = "06:00 am"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/614uA6BT8hL._AC_SL1200_.jpg"
                  upTitle= "Beelink GTR Mini PC Windows 10 Pro,AMD Ryzen 7 3750H Processor(up to 4GHz) 8GB DDR4 256GB NVMe SSD,Radeon Vega 8 Graphics,WiFi 6,Bluetooth 5.0,Dual Gigabit"
                  upTime = "08:00 am"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/81EaFVru57L._AC_SL1500_.jpg"
                  upTitle= "USB C Cable/Type C to USB Fast Charging Cord [Pack of 5], Gold-Plated & Nylon Braided (10ft + 6.5ft + 2x3.3ft + 1ft) for Samsung Galaxy S8/Plus, Nexus"
                  upTime = "07:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/71awKlTeZWL._SL1500_.jpg"
                  upTitle = "ABKONCORE HR120 RGB Fans, 3 Pack 120mm Computer Fans, 5V ARGB Motherboard SYNC/Remote Controller, Ajustable Fan Speed and Color, Hydro Bearing Case Fan"
                  upTime = "06:00 am"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/615a-okh1rL._AC_SL1500_.jpg"
                  upTitle= "Webcam with Microphone for Desktop, DEPSTECH 2K QHD USB Web Cam with Auto Light Correction, Desktop Computer Camera Streaming Camera for Video Conferencing"
                  upTime = "08:00 am"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/61CdiF59R1L._AC_SL1200_.jpg"
                  upTitle = "Travel Laptop Backpack,Extra Large Anti Theft College School Backpack for Men and Women with USB Charging Port,Water Resistant Big Business Computer"
                  upTime = "12:00 pm"
                />
                <Upccoming
                  upImage= "https://images-na.ssl-images-amazon.com/images/I/71QNSGP13DL._AC_SL1280_.jpg"
                  upTitle = "Portable Monitor - Lepow Upgraded 15.6 Inch 1920 x 1080 Full HD IPS Eye Care Second Screen Ultra-Slim Computer Game Display with Mini HDMI Type-C Port"
                  upTime = "06:00 am"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/61bgaGVfevL._AC_SL1500_.jpg"
                  upTitle="USB Docking Station,UOEOS 13 in 1 Triple Display 3.0 USB C Laptop Docking Station Dual Monitor with HDMI & DVI/VGA 5 USB 3.0 Ports,Gigabit Ethernet"
                  upTime="09:00 am"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/61qwyYns9UL._AC_SL1200_.jpg"
                  upTitle="Cordless Air Duster, KEYNICE 2-in-1 Dust Cleaner and Vacuum, 6000mAh Battery, 40W Fast Charging, Powerful 36000 RPM, Electric Air Blower for Cleaning"
                  upTime="03:00 pm"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/71ZQU-BAACL._AC_SL1500_.jpg"
                  upTitle="Kids Tablet 7 Android Kids Tablet Toddler Tablet Kids Edition Tablet with WiFi Dual Camera Childrens Tablet 1GB + 16GB Parental Control, Google Play Store"
                  upTime="12:00 pm"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/71vrvhtKAuL._AC_SL1500_.jpg"
                  upTitle="Laptop Stand,Laptop Holder Riser Computer Stand,Aluminum 7Angles Adjustable Ergonomic Non-Slip Ventilated Desktop Holder, Compatible with MacBook Air Pro"
                  upTime="05:00 am"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/61m8hZUKfRL._AC_SL1500_.jpg"
                  upTitle="TeckNet 2.4G Rechargeable Wireless Vertical Ergonomic Optical Mouse with USB Nano Receiver, 800 / 1200 /1600 /2000 /2400DPI, 5 Buttons for Laptop, MacBook"
                  upTime="09:00 pm"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/61VdXnSWYOL._AC_SL1500_.jpg"
                  upTitle="S40 Mini PC Stick Intel Celeron N4000(up to 2.6GHz) Windows 10 Pro Mini Computer Stick, DDR4 4GB+64GB eMMC, UHD 4K@60Hz, Dual Band WiFi, HDMI&Mini DP"
                  upTime="02:00 am"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/61C9FoLzjeL._AC_SL1200_.jpg"
                  upTitle="USB C to USB Adapter, JSAUX [0.5ft 2 Pack] Type C 3.0 OTG Cable On The Go Type C Male to USB A Female Adapter Compatible with MacBook Pro 2018 2017,Samsung"
                  upTime="04:00 am"
                />
                <Upccoming
                  upImage="https://images-na.ssl-images-amazon.com/images/I/61bpR2XdcWL._AC_SL1000_.jpg"
                  upTitle="BV-Tech 6 Port PoE+ Switch (4 PoE+ Ports with 2 Ethernet Uplink and Extend Function) – 60W – 802.3at + 1 High Power PoE Port| Desktop Fanless"
                  upTime="08:00 pm"
                />
              </div>
            </div>
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
