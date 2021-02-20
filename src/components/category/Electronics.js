import React from 'react';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import ElectronicsMenu from '../ElectricCategory/ElectronicsMenu';
import '../../styles/Electronics.scss';
import NavBarSubBars from '../NavBarSubBars';

function Electronics() {
  return (
    <div className="products__base">
      <div className="electronics__container">
        <div className="electronics__container-heading">
          <ElectronicsMenu 
              category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
          />
        </div>
        <div className="electronics__container-flex-grid">
          <div className="electronics__container-flex-1">
            <ElectronicsProductTemplate
              id={uuid()}
              title="Apple iPhone XR, 64GB, Black - Fully Unlocked (Renewed)"
              price={337.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/515hAe-J81L._AC_SL1024_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Apple iPad 9.7inch with WiFi 32GB- Space Gray (2017 Model) (Renewed)"
              price={257.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71iCsEpE-xL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="GoPro HERO8 Black 4K Waterproof Action Camera - Black"
              price={249.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71UAtd5yS5L._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Microsoft Xbox One X 1TB Console with Wireless Controller: Xbox One X Enhanced, HDR, Native 4K, Ultra HD (Renewed) (2017 Model)"
              price={487.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/61H3Od2C64L._SL1400_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Apple iMac 21.5in 2.7GHz Core i5 (ME086LL/A) All In One Desktop, 8GB Memory, 1TB Hard Drive, Mac OS X Mountain Lion"
              price={634.67}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71pheYd9W0L._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Apple MacBook Air MD760LL/A 13.3-Inch Laptop (Intel Core i5 Dual-Core 1.3GHz up to 2.6GHz, 4GB RAM, 128GB SSD, Wi-Fi, Bluetooth 4.0)"
              price={499.00}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61oPbujIUkL._AC_SL1000_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Samsung Galaxy Note 10+, 256GB, Aura Glow Silver - Fully Unlocked"
              price={559.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51dWGLdFwcL._AC_SL1200_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="JLAB Audio Jbuds Air True Wireless Signature Bluetooth Earbuds, Charging Case, Black, IP55 Sweat Resistance, Bluetooth 5.0 Connection"
              price={29.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/51Ebrud0SuL._AC_SL1478_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Samsung Galaxy Note 8 N950 Factory Unlocked Phone 64GB Midnight Black"
              price={269.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/615Y7qMu7lL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Arlo - Wireless Home Security Camera System | Night vision, Indoor/Outdoor, HD Video, Wall Mount | Cloud Storage Included | 5 camera kit (VMS3530-100NAR)"
              price={259.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/713RJODrFcL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="HP Flagship Pro Desktop 2018 Computer, Core I5 Up to 3.6GHz, 8GB, 512GB SSD, WiFi, DVD, DP, VGA, USB 3.0, Windows 10 Pro 64 Bit-Multi Language-English/Spanish/French(CI5)"
              price={219.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71I05GnbEZL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Beats Studio3 Wireless Over-Ear Headphones – The Beats Skyline Collection - Midnight Black"
              price={179.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71fm3OiZj4L._AC_SL1500_.jpg"
            />
          </div>
          <div className="electronics__container-3-grid">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electronics
