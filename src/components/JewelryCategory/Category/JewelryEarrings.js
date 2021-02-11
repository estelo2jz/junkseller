import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryEarrings.scss';

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


function EarringsTemplate({ id, title, image, price, rating, nameID,rateNumber, listPrice }) {
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
    <div className="earrings-template__container">
      <div className="earrings-template__img">
        <img src={image} alt="grillz-product-img" />
      </div>
      <div className="earrings-template__info">
        <div className="earrings-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          {/* <div className="earrings-template__id">
            <p>
              {nameID}
            </p>
          </div> */}
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="earrings-template__rating">
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
        <div className="earrings-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="earrings-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Earrings() {
  return (
    <div className="earrings__container">
      <div className="earrings__heading">
        <p>Earring's</p>
      </div>
      {/* <div className="earrings__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="earrings__category">
        <Link to="/" className="earrings__category-img">
          <img src="https://www.icebox.com/unsafe/800x300/icebox-jewelry.s3.amazonaws.com/categories/ICEBOX_Header_Necklaces_1.jpg" alt="monitor-category" />
        </Link>
      </div>
      <div className="earrings__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="earrings__product-container">
        <EarringsTemplate
          id={uuid()}
          title="Ruby Long Dangle"
          rateNumber={657}
          rating={5}
          price={115.99}
          image={"https://pics.angara.com/catalog/product/s/e/se1092rd-rg-aaa-4_3.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={1657}
          rating={4}
          title="18K white Gold Round Diamond Stud Earring"
          price={165.99}
          image={"https://image.brilliantearth.com/media/product_images/LW/BE304RD50_White.JPG"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={157}
          rating={4}
          title="Sterling Silver Trinity Rose Gold"
          price={71.01}
          image={"https://www.shanore.com/img/products/product/1355.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Minnie Mouse Icon Stud Earring"
          price={55.65}
          image={"https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7401057013566"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={2354}
          rating={5}
          title="Baby/Kids Diamond Earrings Screw Back"
          price={245.99}
          image={"https://cdn11.bigcommerce.com/s-thiekn1go9/images/stencil/1280x1280/products/908/1993/baby-diamond-stud-earrings-.12-.20-tcw-14k-gold-screw-back-web__19375.1596148922.jpg?c=2"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={1557}
          rating={4}
          title="Ethical Gold Drop"
          price={234.65}
          image={"https://kimai.com/static/506641a11d180e38bd390175cdfbf6a1/2e23f/felicityyellow.png"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={457}
          rating={4}
          title="Flower Earring Back Large"
          price={195.99}
          image={"https://cdn.shopify.com/s/files/1/0364/7253/products/aurate-earrings-flower-back-large-custom-569_706x918_crop_center.png?v=1542835533"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={125}
          rating={4}
          title="Vintage Alhanbra"
          price={112.99}
          image={"https://www.vancleefarpels.com/content/dam/rcq/vca/16/26/49/7/1626497.png"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={657}
          rating={4}
          title="Safety Pin Earrings"
          price={55.99}
          image={"http://cdn.shopify.com/s/files/1/1847/2245/products/SafetyEarrings.jpg?v=1611268865"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={967}
          rating={4}
          title="18ct Gold Baroque Pearl Hook Drop"
          price={154.99}
          image={"https://www.annoushka.com/dw/image/v2/BCRG_PRD/on/demandware.static/-/Sites-annoushka-master-catalog/default/dw56e19783/images/main/18ct_Gold_Baroque_Pearl_Hook_Drop_Earrings.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={147}
          rating={4}
          title="Clash de Cartier hoop"
          price={35.99}
          image={"https://www.cartier.com/content/dam/rcq/car/19/15/81/7/1915817.png"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={857}
          rating={4}
          title="Burmase Ruby and Diamond Drop Earrings"
          price={115.99}
          image={"https://images.squarespace-cdn.com/content/v1/55ef3559e4b00388d2f61696/1572122577302-JN2170RSDZ6YVU3S6OG9/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/RubyEarrings.jpg?format=1000w"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={57}
          rating={4}
          title="Silver Ear Connector Crystal Stud"
          price={85.99}
          image={"https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwee34d270/images/hi-res/11175_1.jpg?sw=734&sh=734&sm=fit"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={5}
          title="Rose Bud Baby/Children's Earrings"
          price={99.99}
          image={"https://www.tinyblessings.com/pub/media/catalog/product/cache/6b78ac9ed927a3c2db42a3c84dab4ce5/r/o/rose-bud-stud-earrings-for-baby-14k-722_3.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Tiny Pearl Stud Earring"
          price={75.99}
          image={"https://www.bibaandrose.co.uk/wp-content/uploads/2019/08/Tiny-Pearl-Stud.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="BLossom Long Earrings"
          price={165.99}
          image={"https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-blossom-long-earrings-3-golds-and-diamonds-jewelry--Q96413_PM2_Front%20view.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Dew Drop Earrings"
          price={265.99}
          image={"https://www.georgjensen.com/dw/image/v2/BBPS_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3fb4c1c8/images/hi-res/pack__3537835_DEW_DROP_EARRING_144.png?sw=800&sh=800&sm=fit"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Sweet Nothing"
          price={123.12}
          image={"https://www.catbirdnyc.com/media/catalog/product/cache/8ee8cc6bfd443bf2183dad436c39a509/c/a/catbird-sweetnothingearrings-yg-p1-v2.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Elan Earrings"
          price={85.15}
          image={"https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400146_elan_earrings_rg_1.png"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Rhodochrosite Gold Mini Pyramid Charm"
          price={75.75}
          image={"http://cdn.shopify.com/s/files/1/0286/4703/0828/products/rhodochrosite-gold-mini-pyramid-charm-hoop-earrings-earrings-missoma-278120_1024x.jpg?v=1608217307"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Frivole Earrings"
          price={86.99}
          image={"https://www.vancleefarpels.com/content/dam/rcq/vca/18/93/75/4/1893754.png"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="Gold 10MM Hoop Earings"
          price={201.01}
          image={"https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4be67199/images/hi-res/45478_1.jpg?sw=734&sh=734&sm=fit"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title="SoHo Midi X Earrings"
          price={14.21}
          image={"https://cdn.shopify.com/s/files/1/0005/7472/products/SohoMidiEarring_GoldIridescentClearCrystal_2048x2048.jpg?v=1610141512"}
        />
        <EarringsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title=""
          price={55.92}
          image={""}
        />
      </div>
    </div>
  )
}

export default Earrings;
