import React from 'react';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import ClothingJewelryMenu from '../JewelryCategory/JewelryMenu';
import '../../styles/Computer.scss';

function Clothing() {
  return (
    <div className="products__base">
      <div className="computer__container">
        <div className="computer__container-heading">
          <ClothingJewelryMenu
            category0="Apperal"
            category1="CLothing"
            category2="Clothing"
            category3="Clothing"
          />
        </div>
        <div className="computer__container-flex-grid">
          <div className="computer__container-flex-1">
            <ElectronicsProductTemplate
              id={uuid()}
              title="Lenovo Legion 5 Gaming Laptop, 15.6' FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black"
              price={996.60}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81w%2B3k4U8PL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB"
              price={949.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71vFKBpKakL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="ASUS TUF Gaming VG27VH1B 27” Curved Monitor, 1080P Full HD"
              price={268.91}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81i6G0uoctL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="ROG Strix GA15DH Gaming Desktop PC, AMD Ryzen 7 3800X, GeForce"
              price={1829.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81mIQ527wEL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Blade Hawks RGB Gaming Mouse Pad, LED Soft Extra Extended Large Mouse"
              price={16.60}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51ybekXvQLL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Lenovo Flex 5 14' 2-in-1 Laptop, 14.0' FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
              price={671.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit"
              price={39.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="MSI GS75 STEALTH-242 17.3-inch 144Hz FHD - Intel i7-9750H 6-Core - NVIDIA RTX 2080 Max Q 8GB - 32GB DDR4 - 1TB Solid State Drive - Win10H"
              price={1849.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/513IMp-dM8L._AC_SL1000_.jpg"
            />
          </div>
          <div className="computer__container-3-grid">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clothing;
