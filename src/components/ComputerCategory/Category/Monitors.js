import React from 'react';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/Monitors.scss';

function MonitorsTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="monitor-template__container">
      <div className="monitor-template__img">
        <img src={image} alt="monitor-product-img" />
      </div>
      <div className="monitor-template__info">
        <div className="monitor-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="monitor-template__title">
          <p>{title}</p>
        </div>
        <div className="monitor-template__rating">
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
        <div className="monitor-template__btn">
          <button onClick={addToBasket}>Add to basket</button>
        </div>
    </div>
  )
}



function Monitors() {
  return (
    <div className="monitors__container">
      <div className="monitors__heading">
        <p>Monitors</p>
        <p>
          Shop for monitors from top brands includeing
          <a href="#">Dell</a>,
          <a href="#">HP</a>,
          <a href="#">Asus</a>,
          <a href="#">ViewSonic</a>,
          <a href="#">LG</a>,
           and more.
        </p>
      </div>
      <div className="monitors__ads-one">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedMonitors_DT_EN.jpg" alt="ads-image" />
      </div>
      <div className="monitors__category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Home.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_HighPerformance.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Creator.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Work.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Professional.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_BusinessPremium.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Portable.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_ValueGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_EntryGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_EssentialGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_PremiumGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_4KGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_UltraGaming.jpg" alt="monitor-category" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_ExtremeGaming.jpg" alt="monitor-category" />
      </div>
      <div className="monitors__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="BenQ 24 Inch IPS Monitor | 1080P | Proprietary Eye-Care Tech | Ultra-Slim"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/712ZOa8Ze2L._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ViewSonic VX3276-MHD 32 Inch 1080p Frameless Widescreen IPS Monitor"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/516Vq6aI-JL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor"
          price={549.99}
          rateNumber={"1,997"}
          rating={4}
          listPrice={"759.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="HP VH240a 23.8-Inch Full HD 1080p IPS LED Monitor with Built-In"
          price={124.99}
          rateNumber={"19,140"}
          rating={4}
          listPrice="209.99"
          image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Hot new releases</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id = {uuid()} 
          title="AOC C24G1A 24' Curved Frameless Gaming Monitor, FHD 1920x1080"
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81GJkTKuLnL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ASUS TUF Gaming VG27WQ1B 27” Curved Monitor, 1440P WQHD"
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice= {""}
          image="https://images-na.ssl-images-amazon.com/images/I/8167EJxJ8tL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R"
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz"
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Under $25</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="AOC C24G1A 24' Curved Frameless Gaming Monitor, FHD 1920x1080"
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81GJkTKuLnL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ASUS TUF Gaming VG27WQ1B 27” Curved Monitor, 1440P WQHD"
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/8167EJxJ8tL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R"
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz"
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Best Sellers</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="AOC C24G1A 24' Curved Frameless Gaming Monitor, FHD 1920x1080"
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81GJkTKuLnL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ASUS TUF Gaming VG27WQ1B 27” Curved Monitor, 1440P WQHD"
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/8167EJxJ8tL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R"
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz"
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Lightning deals</p>
        {/* <p>See more</p> */}
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="AOC C24G1A 24' Curved Frameless Gaming Monitor, FHD 1920x1080"
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81GJkTKuLnL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ASUS TUF Gaming VG27WQ1B 27” Curved Monitor, 1440P WQHD"
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/8167EJxJ8tL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R"
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz"
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Most wished for</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="AOC C24G1A 24' Curved Frameless Gaming Monitor, FHD 1920x1080"
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81GJkTKuLnL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ASUS TUF Gaming VG27WQ1B 27” Curved Monitor, 1440P WQHD"
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/8167EJxJ8tL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R"
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz"
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Most gifted</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="AOC C24G1A 24' Curved Frameless Gaming Monitor, FHD 1920x1080"
          price={199.99}
          rateNumber={"313,962"}
          rating={5}
          listPrice={"299.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81GJkTKuLnL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ASUS TUF Gaming VG27WQ1B 27” Curved Monitor, 1440P WQHD"
          price={340.99}
          rateNumber={"567"}
          rating={4}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/8167EJxJ8tL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R"
          price={329.99}
          rateNumber={"1,886"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz"
          price={1944.99}
          rateNumber={"1,988"}
          rating={4}
          listPrice="2349.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC._SR360,460.jpg"
        />
      </div>
    </div>
  )
}

export default Monitors;
