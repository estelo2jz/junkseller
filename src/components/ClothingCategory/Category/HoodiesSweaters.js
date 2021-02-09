import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingStyles/HoodiesSweaters.scss';

function HoodiesSweatersTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="hoodies-sweaters-template__container">
      <div className="hoodies-sweaters-template__img">
        <img src={image} alt="apperal-product-img" />
      </div>
      <div className="hoodies-sweaters-template__info">
        <div className="hoodies-sweaters-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="hoodies-sweaters-template__title">
          <p>{title}</p>
        </div>
        <div className="hoodies-sweaters-template__rating">
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
      <div className="hoodies-sweaters-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function HoodiesSweaters() {
  return (
    <div className="hoodies-sweaters__container">
      <div className="hoodies-sweaters__heading">
        <p>Hoodies & Sweaters</p>
      </div>
      {/* <div className="hoodies-sweaters__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="hoodies-sweaters__category">
        <Link to="/" className="hoodies-sweaters__category-img">
          <img src="https://hmg-prod-io.hearstapps.com/images/hoodies-unisex-1524081405.jpg?crop=2000,1000,x0,y0,safe&width=1200&auto=webp" alt="monitor-category" />
        </Link>
      </div>
      <div className="hoodies-sweaters__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="hoodies-sweaters__product-container">
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Quealent Hoodie"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/51dOIny2yXL._AC_UX385_.jpg"
        />
        <HoodiesSweatersTemplate
          id={uuid()}
          title="Chunky Knit Sweater"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590000859-sweaters-hm2-1590000846.jpg"
        />
      </div>
    </div>
  )
}

export default HoodiesSweaters;
