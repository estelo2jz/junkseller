import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import Product from '../Product';
import '../../styles/Electronics.scss';

function Electronics() {
  return (
    <div className="products__base">
      <div className="electronics__container">
        <div className="electronics__container-heading">
          {/* <h1>Electronics</h1> */}
        </div>
        <div className="electronics__container-flex-grid">
          <div className="electronics__container-flex-1">
            <div className="electronics__item-one-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-one-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-one-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              /> 
            </div>
            <div className="electronics__item-one-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-one-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
            <div className="electronics__item-one-container">
              <ElectronicsProductTemplate
                id="123123"
                title=""
                price={119.99}
                rating={4}
                image=""
              />
            </div>
          </div>
          <div className="electronics__container-3-grid">
            <div className="electronics__container-3-grid-grid-1">
              <div className="electronics__item-grid-one-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-one-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />         
              </div>
              <div className="electronics__item-grid-one-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                /> 
              </div>
              <div className="electronics__item-grid-one-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                /> 
              </div>
            </div>
            <div className="electronics__container-3-grid-grid-2">
              <div className="electronics__item-grid-two-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-two-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />        
              </div>
              <div className="electronics__item-grid-two-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-two-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
            </div>
            <div className="electronics__container-3-grid-grid-3">
              <div className="electronics__item-grid-three-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-three-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-three-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-three-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
            </div>
            <div className="electronics__container-4-grid-grid-4">
              <div className="electronics__item-grid-four-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-four-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />        
              </div>
              <div className="electronics__item-grid-four-container">
                <ElectronicsProductTemplate
                  id="123123"
                  title=""
                  price={119.99}
                  rating={4}
                  image=""
                />
              </div>
              <div className="electronics__item-grid-four-container">
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
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default Electronics
