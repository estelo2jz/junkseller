import React from 'react';
import { uuid } from 'uuidv4';
import ClothingProductTemplate from '../ClothingCategory/Category/ClothingProductTemplate';
import ClothingMenu from '../ClothingCategory/ClothingMenu';
import '../../styles/Computer.scss';

function Clothing() {
  return (
    <div className="products__base">
      <div className="computer__container">
        <div className="computer__container-heading">
          <ClothingMenu
            category0="Shirts & Tees"
            category1="Pants & Jeans"
            category2="Hoodies & Sweaters"
            category3="Jackets"
            category4="Hats & Beanies"
            category5="Backpacks"
            category6="Socks"
          />
        </div>
        <div className="computer__container-flex-grid">
          <div className="computer__container-flex-1">
            <ClothingProductTemplate
              id={uuid()}
              title="Empyre Perception Light Blue T-Shirt"
              price={24.99}
              image="https://image.s5a.com/is/image/saks/0400099215887_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Empyre Perception Light Blue T-Shirt"
              price={24.99}
              image="https://image.s5a.com/is/image/saks/0400099215887_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Empyre Perception Light Blue T-Shirt"
              price={24.99}
              image="https://image.s5a.com/is/image/saks/0400099215887_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Empyre Perception Light Blue T-Shirt"
              price={24.99}
              image="https://image.s5a.com/is/image/saks/0400099215887_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Empyre Perception Light Blue T-Shirt"
              price={24.99}
              image="https://image.s5a.com/is/image/saks/0400099215887_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Empyre Perception Light Blue T-Shirt"
              price={24.99}
              image="https://image.s5a.com/is/image/saks/0400099215887_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Empyre Perception Light Blue T-Shirt"
              price={24.99}
              image="https://image.s5a.com/is/image/saks/0400099215887_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            />
          </div>
          <div className="computer__container-3-grid">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clothing;
