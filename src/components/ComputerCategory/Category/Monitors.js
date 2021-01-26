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
      <div>
        <p>Hot new releases</p>
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
        <MonitorsTemplate
          id={uuid()}
          title="AOC C32G2 32' Curved Frameless Gaming Monitor FHD, 1500R"
          price={293.98}
          rateNumber={"18,057"}
          rating={4}
          listPrice={"349.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71jiNX9VBlL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="ASUS VL249HE 23.8” Eye Care Monitor, 1080P Full HD, 75Hz, IPS, Adaptive"
          price={109.99}
          rateNumber={"12"}
          rating={4}
          listPrice={"200.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71XRX0tFRcL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="HP V20 HD+ Monitor | 19.5-inch Diagonal HD+ Computer Monitor"
          price={79.99}
          rateNumber={"115"}
          rating={4}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/81KcQCMTTfL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="MSI QHD Rapid-IPS Gaming Non-Glare Super Narrow Bezel 1ms 2560 x 1440 165Hz Refresh Rate Adjustable Arm G-Sync Compatible 27”"
          price={397.78}
          rateNumber={"7"}
          rating={4}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/61HDGsI1VpL._AC_SL1024_.jpg"
        />
      </div>
    </div>
  )
}

export default Monitors;
