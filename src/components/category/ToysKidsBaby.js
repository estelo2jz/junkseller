import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import ToysKidsBabyMenu from '../ToysKidsBabyCategory/ToysKidsBabyMenu';
import '../../styles/ToysKidsBaby.scss';

function ToysKidsBaby() {
  return (
    <div className="products__base">
      <div className="toys-kids-baby__container">
        <div className="toys-kids-baby__container-heading">
          <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Amazon Family"
              category5="Amazon Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
              category8="Amazon Launchpad"
              category9="Amazon Elements"
            />
        </div>
        <div className="toys-kids-baby__container-flex-grid">
          <div className="toys-kids-baby__container-flex-1">
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
          <div className="toys-kids-baby__container-3-grid">
            <div className="toys-kids-baby__container-3-grid-grid-1">
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
            <div className="toys-kids-baby__container-3-grid-grid-2">
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
            <div className="toys-kids-baby__container-3-grid-grid-3">
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
            <div className="toys-kids-baby__container-3-grid-grid-3">
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

export default ToysKidsBaby;
