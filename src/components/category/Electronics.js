import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import ElectronicsMenu from '../ElectricCategory/ElectronicsMenu';
import '../../styles/Electronics.scss';

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
              id="123123"
              title=""
              price={120.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            {/* <div className="electronics__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>  */}
          </div>
          <div className="electronics__container-3-grid">
            <div className="electronics__container-3-grid-grid-1">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__container-3-grid-grid-2">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__container-3-grid-grid-3">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__container-3-grid-grid-3">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electronics
