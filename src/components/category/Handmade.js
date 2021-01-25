import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import HandmadeMenu from '../HandmadeCategory/HandmadeMenu';
import '../../styles/Handmade.scss';

function Handmade() {
  return (
    <div className="products__base">
      <div className="handmade__container">
        <div className="handmade__container-heading">
          <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
              category6="Handbags & Accessories"
              category7="Beauty & Grooming"
              category8="Stationay & Party Supplies"
              category9="Toys & Games"
              category10="Pet Supplies"
              category11="Home Decor"
              category12="Artwork"
              category13="Kitchen & Dining"
              category14="Furniture"
              category15="Baby"
              category16="Sell on JunkSeller"
            />
        </div>
        <div className="handmade__container-flex-grid">
          <div className="handmade__container-flex-1">
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
          </div>
          <div className="handmade__container-3-grid">
            <div className="handmade__container-3-grid-grid-1">
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
            </div>
            <div className="handmade__container-3-grid-grid-2">
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
            </div>
            <div className="handmade__container-3-grid-grid-3">
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
            </div>
            <div className="handmade__container-3-grid-grid-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Handmade;
