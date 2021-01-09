import React from 'react';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import '../ElectronicStyles/AmazonRenewed.scss';

function AmazonRenewed() {
  return (
    <div className="amazon-renewed__container">
      <div className="amazon-renewed__ads-one">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Certified_Refurbished/XCM_Manual_1177452_renewed_guarantee_update_1500x250_Certified_Refurbished_XCM_Manual_1177452_us_certified_refurbished_renewed_guarantee_update_1500x250_1561356491_jpg.jpg" alt="renew-ads" />
      </div>
      <div className="amazon-renewed__heading">
        <h1>Renewed Category</h1>
      </div>
      <div className="amazon-renewed__category-container">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/EN_CR_CategoryTile_DesktopsLaptops_Image._CB518848031_.jpg" alt="renew-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v3._CB507073534_.jpg" alt="renew-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v4._CB507073525_.jpg" alt="renew-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v7._CB507073532_.jpg" alt="renew-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v5._CB507073529_.jpg" alt="renew-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v6._CB507073530_.jpg" alt="renew-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v12._CB507073524_.jpg" alt="renew-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v8._CB507073535_.jpg" alt="renew-category" />
      </div>
      <div className="amazon-renewed__heading">
        <h1>Renewed Electronics</h1>
      </div>
      <div className="amazon-renewed__grid-flex">
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "Apple iPhone XR, 64GB, Black - Fully Unlocked (Renewed)"
            rating = {4}
            price = {363.00}
            image = "https://images-na.ssl-images-amazon.com/images/I/414KiPpTsXL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "Apple iPad Air 2, 64 GB, Space Gray, (Renewed)"
            rating = {4}
            price = {265.20}
            image = "https://images-na.ssl-images-amazon.com/images/I/51eSDQm377L.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "Microsoft Xbox One Kinect Sensor Bar [Xbox One](Renewed)"
            rating = {4}
            price = {199.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/41Ry7kwKYxL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "Lenovo ThinkCentre M93P Tiny Mini Business Desktop Computer, Intel Dual-Core i5-4570T Processor up to 3.60 GHz, 8GB RAM, 240GB SSD, WiFi, Windows 10 Pro (Renewed)"
            rating = {4}
            price = {197.98}
            image = "https://images-na.ssl-images-amazon.com/images/I/410+Mn+qtqL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "JLAB Audio Jbuds Air True Wireless Signature Bluetooth Earbuds, Charging Case, Black, IP55 Sweat Resistance, Bluetooth 5.0 Connection (Renewed)"
            rating = {4}
            price = {29.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/311EleaXm+L.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "Beats by Dr dre Powerbeats2 Wireless In-Ear Bluetooth Headphone with Mic - Black (Renewed)"
            rating = {4}
            price = {69.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/41ZbmWBjD9L.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "GoPro HERO8 Black 4K Waterproof Action Camera - Black (Renewed)"
            rating = {4}
            price = {249.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/31QPKAoxnpL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "Wii Console w/ Bonus Wii Sports Resort & Wii MotionPlus Bundle (Renewed)"
            rating = {4}
            price = {244.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/41i1R6g4GJL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = "Dell OptiPlex 7050 Small Form Factor | Intel Core i5-6600 | 8 GB DDR4 | 500 GB HDD | Wi-Fi | Windows 10 Pro (Renewed)"
            rating = {3}
            price = {459.00}
            image = "https://images-na.ssl-images-amazon.com/images/I/41sS0aziJkL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            rating = {4}
            price = {295.00}
            image = "https://images-na.ssl-images-amazon.com/images/I/41f5DkSgNPL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            rating = {3}
            price = {209.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/41HxEQF35pL.jpg"
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            rating = {4}
            price = {239.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/41+gQ3SfqoL.jpg"
          />
        </div>
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default AmazonRenewed;
