import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import ComputerMenu from '../ComputerCategory/ComputerMenu';
import '../../styles/Computer.scss';

function Computers() {
  return (
    <div className="products__base">
      <div className="computer__container">
        <div className="computer__container-heading">
          <ComputerMenu 
              category0="Computers, Tablets & PC" 
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Drives & Storage"
              category5="Computer Parts & Components"
              category6="Printers & Ink"
              category7="Software"
              category8="Office & School Supllies"
              category9="Trade In Your Electronics"
          />
        </div>
        <div className="computer__container-flex-grid">
          <div className="computer__container-flex-1">
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
            {/* <div className="computer__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="computer__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="computer__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="computer__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="computer__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="computer__item-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>  */}
          </div>
          <div className="computer__container-3-grid">
            <div className="computer__container-3-grid-grid-1">
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
            <div className="computer__container-3-grid-grid-2">
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
            <div className="computer__container-3-grid-grid-3">
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
            <div className="computer__container-3-grid-grid-3">
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

export default Computers;
