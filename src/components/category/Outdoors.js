import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import OutdoorsMenu from '../OutdoorsCategory/OutdoorsMenu';
import '../../styles/Outdoors.scss';

function Outdoors() {
  return (
    <div className="products__base">
      <div className="outdoors__container">
        <div className="outdoors__container-heading">
         <OutdoorsMenu 
              category0="Outdoor Clothing" 
              category1="Camping & Hiking"
              category2="Climbing"
              category3="Cycling"
              category4="Scooters, Skates & Skateboards"
              category5="Water Sports"
              category6="Winter Sports"
              category7="Accessories"
              category8="All Outdoor Recreation"
            />
        </div>
        <div className="outdoors__container-flex-grid">
          <div className="outdoors__container-flex-1">
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
          <div className="outdoors__container-3-grid">
            <div className="outdoors__container-3-grid-grid-1">
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
            <div className="outdoors__container-3-grid-grid-2">
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
            <div className="outdoors__container-3-grid-grid-3">
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
            <div className="outdoors__container-3-grid-grid-3">
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

export default Outdoors;
