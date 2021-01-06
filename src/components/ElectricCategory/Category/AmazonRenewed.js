import React from 'react';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import '../ElectronicStyles/AmazonRenewed.scss';

function AmazonRenewed() {
  return (
    <div className="amazon-renewed__container">
      <div>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Certified_Refurbished/XCM_Manual_1177452_renewed_guarantee_update_1500x250_Certified_Refurbished_XCM_Manual_1177452_us_certified_refurbished_renewed_guarantee_update_1500x250_1561356491_jpg.jpg" alt="renew-ads" />
      </div>
      <div className="amazon-renewed__header">
        <div className="amazon-renewed__heading">
          <h1>Renewed Electronics</h1>
        </div>
        <div className="amazon-renewed__category-container">
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/EN_CR_CategoryTile_DesktopsLaptops_Image._CB518848031_.jpg" alt="renew-category" />
          </div>
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v3._CB507073534_.jpg" alt="renew-category" />
          </div>
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v4._CB507073525_.jpg" alt="renew-category" />
          </div>
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v7._CB507073532_.jpg" alt="renew-category" />
          </div>
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v5._CB507073529_.jpg" alt="renew-category" />
          </div>
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v6._CB507073530_.jpg" alt="renew-category" />
          </div>
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v12._CB507073524_.jpg" alt="renew-category" />
          </div>
          <div className="amazon-renewed__image-container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-certifiedrefurbished/UK_Amazon-Renewed-1052644_20-6-2017_670x700-v8._CB507073535_.jpg" alt="renew-category" />
          </div>
        </div>
      </div>
      <div className="amazon-renewed__grid-flex">
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
          />
        </div>
        <div className="amazon-renewed__grid-item">
          <ElectronicsProductTemplate 
            id = "123123"
            title = ""
            price = {29.99}
            rating = {4}
            image = ""
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
