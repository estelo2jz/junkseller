import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingStyles/Jackets.scss';

function JacketsTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="jackets-template__container">
      <div className="jackets-template__img">
        <img src={image} alt="apperal-product-img" />
      </div>
      <div className="jackets-template__info">
        <div className="jackets-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="jackets-template__title">
          <p>{title}</p>
        </div>
        <div className="jackets-template__rating">
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
      <div className="jackets-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Jackets() {
  return (
    <div className="jackets__container">
      <div className="jackets__heading">
        <p>Jackets</p>
      </div>
      {/* <div className="jackets__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="jackets__category">
        <Link to="/" className="jackets__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div>
      <div className="jackets__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="jackets__product-container">
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Solid Flap Pocket Denim Jacket"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/08/16021414412c1d018e07e13f058c98585cddea07a5_thumbnail_900x.webp"
        />
        <JacketsTemplate
          id={uuid()}
          title="Men Ripped Solid Denim Jacket"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0033/4757/8993/products/hypest-fit-outerwear-black-s-interstellar-bomber-jacket-16324940791921_2000x.png?v=1609726561"
        />
      </div>
    </div>
  )
}

export default Jackets;
