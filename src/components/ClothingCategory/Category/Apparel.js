import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingStyles/Apperal.scss';

function ApparelTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="apparel-template__container">
      <div className="apparel-template__img">
        <img src={image} alt="apperal-product-img" />
      </div>
      <div className="apparel-template__info">
        <div className="apparel-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="apparel-template__title">
          <p>{title}</p>
        </div>
        <div className="apparel-template__rating">
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
      <div className="apparel-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Apparel() {
  return (
    <div className="apparel__container">
      <div className="apparel__heading">
        <p>Shirts & Tees</p>
      </div>
      {/* <div className="apparel__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      {/* <div className="apparel__category">
        <Link to="/" className="apparel__category-img">
          <img src="https://pbs.twimg.com/media/DnY4D1QWwAAtySO.jpg" alt="monitor-category" />
        </Link>
      </div> */}
      <div className="apparel__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="apparel__product-container">
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
        <ApparelTemplate
          id={uuid()}
          title="Men Angel & Letter Print Tee"
          price={18.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://img.ltwebstatic.com/images3_pi/2020/07/02/1593674333879c0a567020cb740da7b3d04fd88a66_thumbnail_900x.webp"}
        />
        <ApparelTemplate
          id={uuid()}
          title="The Simpsons Little & Big Boys Crew Neck Short Sleeve Graphic T-Shirt"
          price={28.99}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image={"https://s7d9.scene7.com/is/image/JCPenney/DP0318202011000872M?hei=550&wid=550&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1"}
        />
      </div>
    </div>
  )
}

export default Apparel;
