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
              title="Men Letter Embroidery Ripped Jeans"
              price={44.99}
              image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="The Oni Embroidered Sukajan Hoodie"
              price={64.99}
              image="https://cdn.shopify.com/s/files/1/2620/5672/products/the-oin-sukajan-hoodie_1024x1024.jpg?v=1513914201"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Astros and Rockets"
              price={24.99}
              image="https://www.click2houston.com/resizer/shAKtyoiIokOwR6Qnhrz2jgb80k=/683x464/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/VYOOI3M23ZGHLAXSFPUQNQSINA.PNG"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Hexagon Quilted Jacket"
              price={24.99}
              image="https://www.porsche-design.com/globalassets/productimages/$p-p1140-456/4046901679507-01_ga_pd_sall_ain_v1.jpg"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="WOMEN'S DINOSAURS CREW SOCKS"
              price={24.99}
              image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HO002575I_051_047852214025_Gray_Heather_FLAT_2000x.png?v=1578479242"
            />
            <ClothingProductTemplate
              id={uuid()}
              title="Flavor Brown Leather"
              price={24.99}
              image="https://images-na.ssl-images-amazon.com/images/I/711tUVoZkbL._AC_UL1249_.jpg"
            />
          </div>
          <div className="clothing__container">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clothing;
