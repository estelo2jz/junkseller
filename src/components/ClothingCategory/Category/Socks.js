import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingStyles/Socks.scss';

function SocksTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="socks-template__container">
      <div className="socks-template__img">
        <img src={image} alt="apperal-product-img" />
      </div>
      <div className="socks-template__info">
        <div className="socks-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="socks-template__title">
          <p>{title}</p>
        </div>
        <div className="socks-template__rating">
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
      </div>
      <div className="socks-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Socks() {
  return (
    <div className="socks__container">
      <div className="socks__heading">
        <p>Socks</p>
      </div>
      {/* <div className="socks__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="socks__category">
        <Link to="/" className="socks__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/I/8180QyEZIlL._AC_UL1500_.jpg" alt="monitor-category" />
        </Link>
      </div>
      <div className="socks__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="socks__product-container">
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S IMPRESSION, SUNRISE CREW SOCKS"
          price={12.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM400050I_238_047852257381_Blush_FLAT_2000x.png?v=1578485026"
        />
        <SocksTemplate
          id={uuid()}
          title="MEN'S GRAND CANYON CREW SOCKS"
          price={7.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HM600125I_468_UPC_047852212960_UPC_Light_Blue_2000x.png?v=1578693584"
        />
      </div>
    </div>
  )
}

export default Socks;
