import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import FoodGroceryMenu from '../FoodGroceryCategory/FoodGroceryMenu';
import '../../styles/FoodGrocery.scss';

function FoodGrocery() {
  return (
    <div className="products__base">
      <div className="grocery-food__container">
        <div className="grocery-food__container-heading">
          <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Fresh"
              category2="Whole Foods"
              category3="Pantry"
              // category4="Launchpad Food"
              // category5="Subscribe & Save"
              // category6="Wickedly Prime"
              // category7="Pay with SNAP EBT"
            />
        </div>
        <div className="grocery-food__container-flex-grid">
          <div className="grocery-food__container-flex-1">
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
            />  \ 
          </div>
          <div className="grocery-food__container-3-grid">
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodGrocery;
