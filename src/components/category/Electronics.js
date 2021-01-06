import React from 'react';
import Product from '../Product';
import '../../styles/Electronics.scss';

function Electronics() {
  return (
    <div className="products__base">
      <div className="electronics__container">
        <div className="electronics__container-heading">
          <h1>Electronics</h1>
        </div>
        <div className="electronics__container-flex-grid">
          <div className="electronics__container-flex-1">
            <div className="electronics__item-one-container">
              <Product 
                id = "123123"
                title = "LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
                price = {549.99}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
              />
            </div>
            <div className="electronics__item-one-container">
              <Product 
                id = "123123"
                title = "Acer Predator Triton 500 PT515-52-73L3 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2070 SUPER, 15.6' FHD NVIDIA G-SYNC Display, 300Hz, 16GB Dual-Channel DDR4, 512GB NVMe SSD, RGB Backlit KB"
                price = {1659.99}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/71HWQq7dX2L._AC_SL1500_.jpg"
              /> 
            </div>
            <div className="electronics__item-one-container">
              <Product 
                  id = "123123"
                  title = "ASUS ROG Rapture GT-AX11000 AX11000 Tri-Band 10 Gigabit WiFi 6 Gaming Router, 2.5 Gb LAN port, AiProtection Lifetime Internet Security, Aimesh Compatible, Easy App setup, 802.11Ax"
                  price = {449.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71zLTz2duHL._AC_SL1500_.jpg"
              />   
            </div>
            <div className="electronics__item-one-container">
              <Product 
                id = "123123"
                title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Silver (4th Generation)"
                price = {1449.99}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
              />
            </div>
            <div className="electronics__item-one-container">
              <Product 
                id = "123123"
                title = "ColoWorld Remanufactured 63XL Ink Cartridge Combo Pack Replacement for HP 63XL 63 XL Work with HP Officejet 5255 5258 3830 3834 Envy 4520 4153 4650 Deskjet 1112 3639 3636 Printer (1 Black 1 Tri-Color)"
                price = {39.65}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/71XdYh3D07L._AC_SL1500_.jpg"
              /> 
            </div>
            <div className="electronics__item-one-container">
              <Product 
                  id = "123123"
                  title = "iBUYPOWER Gaming PC Computer Desktop Element MR 9320 (Intel i7-10700F 2.9GHz, NVIDIA GTX 1660 Ti 6GB, 16GB DDR4 RAM, 240GB SSD, 1TB HDD, Wi-Fi ready, Windows 10 Home)"
                  price = {1352.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/715zrA5cmLL._AC_SL1500_.jpg"
              />  
            </div>
          </div>
          <div className="electronics__container-3-grid">
            <div className="electronics__container-3-grid-grid-1">
              <div className="electronics__item-grid-one-container">
                <Product 
                  id = "123123"
                  title = "AMD Ryzen 9 3900X 12-core, 24-thread unlocked desktop processor with Wraith Prism LED Cooler"
                  price = {546.88}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71S31CWSs3L._AC_SL1093_.jpg"
                />
              </div>
              <div className="electronics__item-grid-one-container">
                <Product 
                  id = "123123"
                  title = "Klipsch Synergy Black Label B-100 Bookshelf Speakers"
                  price = {699.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/51w32vF7xgL._AC_SL1143_.jpg"
                />          
              </div>
              <div className="electronics__item-grid-one-container">
                <Product
                    id = "123123"
                    title = "USB 3.0 Universal Laptop Docking Station, Acodot Dual Monitor Dock for Windows Equipped with Dual HDMI and DVI/VGA, 6 USB 3.0 Ports, Gigabit Ethernet, Audio"
                    price = {64.58}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/616Vux27VAL._AC_SL1500_.jpg"
                />  
              </div>
              <div className="electronics__item-grid-one-container">
                <Product 
                    id = "123123"
                    title = "Dell 452-BCYT D6000 Universal Dock, Black, Single"
                    price = {163.71}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71E9yyx0pbL._AC_SL1500_.jpg"
                />  
              </div>
            </div>
            <div className="electronics__container-3-grid-grid-2">
              <div className="electronics__item-grid-two-container">
              <Product 
                  id = "123123"
                  title = "CyberPower CP1500PFCLCD PFC Sinewave UPS System, 1500VA/1000W, 12 Outlets, AVR, Mini Tower Black"
                  price = {209.95}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71mhftPO1dL._AC_SL1500_.jpg"
                />
              </div>
              <div className="electronics__item-grid-two-container">
                <Product 
                  id = "123123"
                  title = "Echo Show 5 -- Smart display with Alexa – stay connected with video calling - Charcoal"
                  price = {49.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61G86qzw%2BwL._AC_SL1000_.jpg"
                />          
              </div>
              <div className="electronics__item-grid-two-container">
                <Product 
                    id = "123123"
                    title = "Yamaha NS-AW150BL 2-Way Indoor/Outdoor Speakers (Pair, Black) - Wired"
                    price = {399.99}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81rj65QqF0L._AC_SL1500_.jpg"
                />  
              </div>
              <div className="electronics__item-grid-two-container">
                <Product 
                    id = "123123"
                    title = "ASUS UX534FTC-AS77 ZenBook 15 Laptop, 15.6” UHD 4K NanoEdge Display, Intel Core i7-10510U, GeForce GTX 1650, 16GB, 512GB PCIe SSD, ScreenPad 2.0, Amazon Alexa Compatible, Windows 10, Icicle Silver"
                    price = {1148.58}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81W7WT%2BOmsL._AC_SL1500_.jpg"
                />  
              </div>
            </div>
            <div className="electronics__container-3-grid-grid-3">
              <div className="electronics__item-grid-three-container">
              <Product 
                  id = "123123"
                  title = "Apple Magic Keyboard for iPad Air (4th Generation) and iPad Pro 11-inch - US English"
                  price = {289.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71fYV0JMoYL._AC_SL1500_.jpg"
                />
              </div>
              <div className="electronics__item-grid-three-container">
                <Product 
                  id = "123123"
                  title = "New Apple iPhone 12 Pro Max (128GB, Pacific Blue) [Locked] + Carrier Subscription"
                  price = {1099.99}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71MHTD3uL4L._FMwebp__.jpg"
                />
              </div>
              <div className="electronics__item-grid-three-container">
                <Product 
                    id = "123123"
                    title = "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black"
                    price = {278.00}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
                />  
              </div>
              <div className="electronics__item-grid-three-container">
                <Product 
                    id = "123123"
                    title = "HP LaserJet Pro M29w Wireless All-in-One Laser Printer, Works with Alexa (Y5S53A)"
                    price = {299.99}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71N7y7DHrCL._AC_SL1500_.jpg"
                />  
              </div>
            </div>
            <div className="electronics__container-4-grid-grid-4">
              <div className="electronics__item-grid-four-container">
              <Product 
                  id = "123123"
                  title = "Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2019 release"
                  price = {19.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61Zdp5vTn4L._AC_SL1000_.jpg"
                />
              </div>
              <div className="electronics__item-grid-four-container">
                <Product 
                  id = "123123"
                  title = "TaoTronics Projector Screen with Stand, TT-HP020 Indoor Outdoor Movie Projection Screen 4K HD with Wrinkle-Free Design (Easy to Clean, 1.1Gain, 160° Viewing Angle & Includes A Carry Bag)"
                  price = {99.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71hOdTAlxQL._AC_SL1500_.jpg"
                />          
              </div>
              <div className="electronics__item-grid-four-container">
                <Product 
                    id = "123123"
                    title = "1080P Projector - Artlii Energon 2 Full HD WiFi Bluetooth Projector Support 4K, 7000L 300' Display, Compatible with HDMI, iPhone, Android for Home Theater, PPT Presentation"
                    price = {229.49}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/713DuHr6LJL._AC_SL1500_.jpg"
                />  
              </div>
              <div className="electronics__item-grid-four-container">
                <Product 
                    id = "123123"
                    title = "LG 50UN7300PUF Alexa BuiltIn 50Inch 4K Ultra HD Smart LED TV 2020"
                    price = {396.99}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81RMDc4CWYL._AC_SL1500_.jpg"
                />  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default Electronics
