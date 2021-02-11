import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryNecklace.scss';

// import Grillz1 from './JewelryImg/grills/grill1/grill1.jpg';
// import Grillz2 from './JewelryImg/grills/grill2/grill1.jpg';
// import Grillz3 from './JewelryImg/grills/grill3/grill1.jpg';
// import Grillz4 from './JewelryImg/grills/grill4/grill1.jpg';
// import Grillz5 from './JewelryImg/grills/grill5/grill1.jpg';
// import Grillz6 from './JewelryImg/grills/grill6/grill1.jpg';
// import Grillz7 from './JewelryImg/grills/grill7/grill1.jpg';
// import Grillz8 from './JewelryImg/grills/grill8/grill1.jpg';
// import Grillz9 from './JewelryImg/grills/grill9/grill1.jpg';
// import Grillz10 from './JewelryImg/grills/grill10/grill1.jpg';
// import Grillz11 from './JewelryImg/grills/grill11/grill1.jpg';
// import Grillz12 from './JewelryImg/grills/grill12/grill1.jpg';
// import Grillz13 from './JewelryImg/grills/grill13/grill1.jpg';
// import Grillz14 from './JewelryImg/grills/grill14/grill1.jpg';


function NecklaceTemplate({ id, title, image, price, rating, nameID,rateNumber, listPrice }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket...
    // to manipulate the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        rateNumber: rateNumber,
        listPrice: listPrice
      }
    })
  };
  return (
    <div className="necklace-template__container">
      <div className="necklace-template__img">
        <img src={image} alt="grillz-product-img" />
      </div>
      <div className="necklace-template__info">
        <div className="necklace-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          {/* <div className="necklace-template__id">
            <p>
              {nameID}
            </p>
          </div> */}
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="necklace-template__rating">
          <p>
            {
              Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))
            }
          </p>
          <p>{rateNumber}</p>
        </div>
        <div className="necklace-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="necklace-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Necklace() {
  return (
    <div className="necklace__container">
      <div className="necklace__heading">
        <p>Necklace's</p>
      </div>
      {/* <div className="necklace__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="necklace__category">
        <Link to="/" className="necklace__category-img">
          <img src="https://www.icebox.com/unsafe/800x300/icebox-jewelry.s3.amazonaws.com/categories/ICEBOX_Header_Necklaces_1.jpg" alt="monitor-category" />
        </Link>
      </div>
      <div className="necklace__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="necklace__product-container">
        <NecklaceTemplate
          id={uuid()}
          title={"Bohemia Layered Necklace, Bar Coin Charm"}
          rateNumber={657}
          rating={4}
          price={115.99}
          image={"https://images-na.ssl-images-amazon.com/images/I/71gcKb%2BzmKL._AC_UX385_.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={1657}
          rating={4}
          title={"18K Roses Gold and SIlver necklace"}
          price={165.99}
          image={"https://images-na.ssl-images-amazon.com/images/I/51VfQo5jFZL._AC_UL1000_.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={157}
          rating={4}
          title={"Sabel Silver Infinity necklace"}
          price={71.01}
          image={"https://cdn.shopify.com/s/files/1/0046/4253/7587/products/sabel-collection-necklaces-pendants-sabel-everyday-collection-sterling-silver-infinity-necklace-5gsn1832-5981748101235_800x.jpg?v=1561448701"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Lucy Williams Gold Mini Fang"}
          price={55.65}
          image={"https://cdn.shopify.com/s/files/1/0286/4703/0828/products/lucy-williams-gold-mini-fang-necklace-necklaces-missoma-194534_800x.jpg?v=1581108500"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={2354}
          rating={5}
          title={"Butterfly Necklace"}
          price={245.99}
          image={"http://cdn.shopify.com/s/files/1/1770/7639/products/Butterfly-Necklace-Closeup_grande.jpg?v=1574135502"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={1557}
          rating={4}
          title={"Konpicca Butterfly"}
          price={234.65}
          image={"https://images-na.ssl-images-amazon.com/images/I/51lgSSDAxCL._AC_UL1200_.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={457}
          rating={4}
          title={"Heart Infinity"}
          price={195.99}
          image={"http://www.kay.com/productimages/processed/V-173263308_0_320.jpg?pristine=true"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={125}
          rating={4}
          title={"Sleeping Beauty"}
          price={112.99}
          image={"https://www.catbirdnyc.com/media/catalog/product/cache/8ee8cc6bfd443bf2183dad436c39a509/c/a/catbird-sleepingbeautynecklaceopalsolitaire-yg-p2.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={657}
          rating={4}
          title={"Love Heart Pendant"}
          price={55.99}
          image={"https://www.autumnandmay.co.uk/wp-content/uploads/2019/06/H2471_love_heart_pendant.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={967}
          rating={4}
          title={"Faith Horizon neckalce"}
          price={154.99}
          image={"https://jamesavery.scene7.com/is/image/JamesAvery/NK-544-793189?$detail_wide_1x$"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={147}
          rating={4}
          title={"Infinity Mon Sterling Silver"}
          price={35.99}
          image={"http://www.kay.com/productimages/processed/V-507133902_0_320.jpg?pristine=true"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={857}
          rating={4}
          title={"Lock and Key Lariat"}
          price={115.99}
          image={"https://www.zales.com/productimages/processed/V-20071647_0_400.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={57}
          rating={4}
          title={"Best Friends Pair"}
          price={85.99}
          image={"https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw29892d4d/images/hi-res/04855_1.jpg?sw=734&sh=734&sm=fit"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={5}
          title={"Delicate Vines"}
          price={99.99}
          image={"https://jamesavery.scene7.com/is/image/JamesAvery/NK-580-576973?$browse_wide_1x$"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Cute Necklace"}
          price={75.99}
          image={"https://cdn.shopify.com/s/files/1/0104/6904/8384/products/guiding-gems-necklace-abalone-758714_2000x.jpg?v=1600845822"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Verdura Necklace"}
          price={165.99}
          image={"https://tba.nyc3.digitaloceanspaces.com/wordpress/verdura.com/wp-content/uploads/2019/10/Thirty-Buck-Necklace_Gold-Diamond_LESS-LINKS_20.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Diamond Necklace"}
          price={265.99}
          image={"https://n.nordstrommedia.com/id/sr3/88a0743b-fa71-4dff-a453-8d67f6ed98e2.jpeg?height=684&width=456"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Medallion Necklace"}
          price={45.26}
          image={"https://assets.vogue.com/photos/5f2c56207ba575fbd84838a2/master/w_1280%2Cc_limit/slide_5.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Medical Alert"}
          price={29.99}
          image={"https://www.americanmedical-id.com/media/catalog/product/cache/672cf55ce47a56acd9f527684846a99e/s/p/sp_crystal_pendant_medical_necklace.jpg"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Message in a Bottle"}
          price={56.55}
          image={"https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/diy-message-in-a-bottle-necklaces-12-pcs-~48_6547c"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Leaf Neckalce"}
          price={145.27}
          image={"https://cdn.shopify.com/s/files/1/0992/5528/products/CaptainMarvelNecklacetwotone017-07-925-047-2_large.jpg?v=1597773502"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Pura Vida"}
          price={165.26}
          image={"https://cdn.shopify.com/s/files/1/0297/6313/products/clear-chip-choker-rosegold_02_750x.jpg?v=1611012713"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Mermaid necklace"}
          price={32.56}
          image={"https://cdn.shopify.com/s/files/1/1994/2941/products/103-0354_color_polishedgold_01_1024x1024.jpg?v=1583267550"}
        />
        <NecklaceTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Love Necklace"}
          price={35.65}
          image={"https://cdn.shopify.com/s/files/1/0269/9558/9223/products/A21ENALFORSAS_FRONT_V2.jpg?v=1608132392"}
        />
      </div>
    </div>
  )
}

export default Necklace;
