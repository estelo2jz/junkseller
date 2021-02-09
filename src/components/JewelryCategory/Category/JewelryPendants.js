import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryPendantz.scss';

// import Pendantz1 from './JewelryImg/pendantz/pendantz1.jpg';
// import Pendantz2 from './JewelryImg/pendantz/pendantz2.jpg';
// import Pendantz3 from './JewelryImg/pendantz/pendantz3.jpg';
// import Pendantz4 from './JewelryImg/pendantz/pendantz4.jpg';
// import Pendantz5 from './JewelryImg/pendantz/pendantz5.jpg';
// import Pendantz6 from './JewelryImg/pendantz/pendantz6.jpg';
// import Pendantz7 from './JewelryImg/pendantz/pendantz7.jpg';
// import Pendantz8 from './JewelryImg/pendantz/pendantz8.jpg';
// import Pendantz9 from './JewelryImg/pendantz/pendantz9.jpg';
// import Pendantz10 from './JewelryImg/pendantz/pendantz10.jpg';
// import Pendantz11 from './JewelryImg/pendantz/pendantz11.jpg';
// import Pendantz12 from './JewelryImg/pendantz/pendantz12.jpg';
// import Pendantz13 from './JewelryImg/pendantz/pendantz13.jpg';
// import Pendantz14 from './JewelryImg/pendantz/pendantz14.jpg';
// import Pendantz15 from './JewelryImg/pendantz/pendantz15.jpg';


function PendantzTemplate({ id, title, image, price, nameID, rating, rateNumber, listPrice }) {
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
    <div className="pendantz-template__container">
      <div className="pendantz-template__img">
        <img src={image} alt="pendantz-product-img" />
      </div>
      <div className="pendantz-template__info">
        <div className="pendantz-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <div className="pendantz-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="pendantz-template__title">
          <p>{title}</p>
        </div>
        {/* <div className="pendantz-template__rating">
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
        </div> */}
      </div>
      <div className="pendantz-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Pendantz() {
  return (
    <div className="pendantz__container">
      <div className="pendantz__heading">
        <p>Pendant's</p>
      </div>
      {/* <div className="pendantz__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="pendantz__category">
        <Link to="/" className="pendantz__category-img">
          <img src="https://www.icebox.com/unsafe/800x300/icebox-jewelry.s3.amazonaws.com/categories/ICEBOX_Header_Necklaces_1.jpg" alt="monitor-category" />
        </Link>
      </div>
      <div className="pendantz__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="pendantz__product-container">
        <PendantzTemplate
          id={uuid()}
          nameID = {"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
        <PendantzTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={"https://d1251d0o0760fi.cloudfront.net/catalog/product/u/n/unique-10k-gold-sneaker-shoe-diamond-pendant-for-men-113ct-by-luxurman_mainye.jpg"}
        />
      </div>
    </div>
  )
}

export default Pendantz;
