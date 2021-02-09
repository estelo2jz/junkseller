import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingStyles/Backpacks.scss';

function BackpacksTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="backpacks-template__container">
      <div className="backpacks-template__img">
        <img src={image} alt="apperal-product-img" />
      </div>
      <div className="backpacks-template__info">
        <div className="backpacks-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="backpacks-template__title">
          <p>{title}</p>
        </div>
        <div className="backpacks-template__rating">
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
      <div className="backpacks-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Backpacks() {
  return (
    <div className="backpacks__container">
      <div className="backpacks__heading">
        <p>Backpacks</p>
      </div>
      {/* <div className="backpacks__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="backpacks__category">
        {/* https://gearmashers.com/wp-content/uploads/2018/03/Best-Commuter-Backpacks-For-Cyclists.jpg */}
        <Link to="/clothing/backpacks" className="backpacks__category-img">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-commuter-backpacks-1603396681.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="monitor-category" />
        </Link>
      </div>
      <div className="backpacks__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="backpacks__product-container">
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
        <BackpacksTemplate
          id={uuid()}
          title="Heritage Backpack"
          price={78.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://herschel.com/content/dam/herschel/products/10007/10007-03271-OS_01.jpg.sthumbnails.1000.1250.jpg"
        />
        <BackpacksTemplate
          id={uuid()}
          title="adidas Originals Urban Utility III Backpack"
          price={47.75}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images.footlocker.com/is/image/EBFL2/EV7558_a1?wid=630&hei=630&fmt=png-alpha"
        />
      </div>
    </div>
  )
}

export default Backpacks;
