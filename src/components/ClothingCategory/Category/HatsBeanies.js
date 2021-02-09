import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingStyles/HatsBeanies.scss';

function HatsBeaniesTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="hats-beanies-template__container">
      <div className="hats-beanies-template__img">
        <img src={image} alt="apperal-product-img" />
      </div>
      <div className="hats-beanies-template__info">
        <div className="hats-beanies-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="hats-beanies-template__title">
          <p>{title}</p>
        </div>
        <div className="hats-beanies-template__rating">
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
      <div className="hats-beanies-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function HatsBeanies() {
  return (
    <div className="hats-beanies__container">
      <div className="hats-beanies__heading">
        <p>Hats & Beanies</p>
      </div>
      {/* <div className="hats-beanies__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="hats-beanies__category">
        <Link to="/" className="hats-beanies__category-img">
          <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F08%2Fsupreme-fall-winter-2018-hats-tw.jpg?w=960&cbr=1&q=90&fit=max" alt="monitor-category" />
        </Link>
      </div>
      <div className="hats-beanies__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="hats-beanies__product-container">
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="Black Surly Baseball Hat"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://surlybikes.com/uploads/parts/surly-logo-baseball-cap-black-black-CL4989-1000x1000.jpg"
        />
        <HatsBeaniesTemplate
          id={uuid()}
          title="King and Fifth Supply Co. Slouchy Beanie"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://cdn.shopify.com/s/files/1/0824/1887/products/Beanie_For_Men_Black_caf0c3a3-a6b7-49b7-8622-3d911433c263_5000x.jpg?v=1569343990"
        />
      </div>
    </div>
  )
}

export default HatsBeanies;
