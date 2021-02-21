import React from 'react';
import {Link} from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ComputerStyles/Monitors.scss';
import JumpTo from '../../JumpTo';


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
        <div className="monitor-template__title">
          <p>{title}</p>
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
      <JumpTo 
        path1 = "/computers/harddrives&storage"
        link1 = "/harddrives&storage"
        path2 = "/computers/parts&components"
        link2 = "/parts&components"
        path3 = "/computers/tablet"
        link3 = "/computers&tablets&PC"
        path4 = "/computers/networking"
        link4 = "/networking"
        path5 = "/computers/accessories"
        link5 = "/accessories"
      />
      <div className="monitors__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/computers">
          <p>
            /computers
          </p>
        </Link>
        <p>/monitors</p>
      </div>
      <div className="monitors__heading">
        <p>Monitors</p>
        <p>
          Shop for monitors from top brands includeing
          <a href="/">Dell</a>,
          <a href="/">HP</a>,
          <a href="/">Asus</a>,
          <a href="/">ViewSonic</a>,
          <a href="/">LG</a>,
           and more.
        </p>
      </div>
      <div className="monitors__ads-one">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedMonitors_DT_EN.jpg" alt="ads-image" />
      </div>
      <div className="monitors__category">
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Home.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_HighPerformance.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
         <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Creator.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Work.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Professional.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_BusinessPremium.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_Portable.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_ValueGaming.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_EntryGaming.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_EssentialGaming.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_PremiumGaming.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_4KGaming.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_UltraGaming.jpg" alt="monitor-category" />
        </Link>
        <Link to="/" className="monitors__category-img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Monitors_Storefront_ExtremeGaming.jpg" alt="monitor-category" />
        </Link>
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
          listPrice="239.99"
          image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC._SR360,460.jpg"
        />
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
          listPrice="239.99"
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
        <p>Under $25</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="HDMI+VGA+DVI+Audio Input LCD Controller Board for HSD190MEN4"
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81wHB23jHBL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="2.13inch E-Ink Display HAT, 250x122 Resolution 3.3V/5V Black White"
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image="https://images-na.ssl-images-amazon.com/images/I/613AsBH+HPL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Futurebatt 14V 3A Adapter Charger Power Supply Cable for Samsung"
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71Ighj+sOHL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="VSDISPLAY HD-MI Audio LCD Controller Board Fit to New Arcade1UP 17"
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image="https://images-na.ssl-images-amazon.com/images/I/71GAsSxshgL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="HDMI+VGA+DVI+Audio Input LCD Controller Board for HSD190MEN4"
          price={24.88}
          rateNumber={"771"}
          rating={4}
          listPrice={"35.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81wHB23jHBL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="2.13inch E-Ink Display HAT, 250x122 Resolution 3.3V/5V Black White"
          price={21.32}
          rateNumber={"71"}
          rating={5}
          listPrice={"30.89"}
          image="https://images-na.ssl-images-amazon.com/images/I/613AsBH+HPL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Futurebatt 14V 3A Adapter Charger Power Supply Cable for Samsung"
          price={11.99}
          rateNumber={"128"}
          rating={4}
          listPrice={"15.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71Ighj+sOHL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="VSDISPLAY HD-MI Audio LCD Controller Board Fit to New Arcade1UP 17"
          price={24.99}
          rateNumber={"1,988"}
          rating={5}
          listPrice="34.99"
          image="https://images-na.ssl-images-amazon.com/images/I/71GAsSxshgL._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Best Sellers</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="VIOTEK GFV22CB Ultra-Compact 22-Inch 144Hz Gaming Monitor | 1080P"
          price={139.99}
          rateNumber={"1,432"}
          rating={5}
          listPrice={"209.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71zAgpDdQCL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre E248W-19203R 24' Ultra Thin 75Hz 1080p LED Monitor 2x"
          price={119.99}
          rateNumber={"11,712"}
          rating={4}
          listPrice={"259.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71qCGPWI8aL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG LC24F396FHNXZA 23.5' FHD Curved LED-Lit"
          price={129.99}
          rateNumber={"3,586"}
          rating={4}
          listPrice={"209.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/91ubktnbNVL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="HP Pavilion 22cwa 21.5-Inch Full HD 1080p IPS LED Monitor, Tilt, VGA"
          price={89.99}
          rateNumber={"9,656"}
          rating={4}
          listPrice="99.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81HX5N0RPWL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="VIOTEK GFV22CB Ultra-Compact 22-Inch 144Hz Gaming Monitor | 1080P"
          price={139.99}
          rateNumber={"1,432"}
          rating={5}
          listPrice={"209.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71zAgpDdQCL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre E248W-19203R 24' Ultra Thin 75Hz 1080p LED Monitor 2x"
          price={119.99}
          rateNumber={"11,712"}
          rating={4}
          listPrice={"259.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71qCGPWI8aL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="SAMSUNG LC24F396FHNXZA 23.5' FHD Curved LED-Lit"
          price={129.99}
          rateNumber={"3,586"}
          rating={4}
          listPrice={"209.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/91ubktnbNVL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="HP Pavilion 22cwa 21.5-Inch Full HD 1080p IPS LED Monitor, Tilt, VGA"
          price={89.99}
          rateNumber={"9,656"}
          rating={4}
          listPrice="99.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81HX5N0RPWL._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Lightning deals</p>
        {/* <p>See more</p> */}
      </div>
      <div className="monitors__product-container">
        <div className="monitors__lightning-container">
          <div className="monitors__lightning-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71DaoW6qQgL._AC_SX679_.jpg" alt="lightning-deals-img" />
          </div>
          <div className="monitors__lightning-info">
            <ul>
               <p>Upcoming Deal</p>
              <p>Starts for you in 03:42:28</p>
            </ul>
            <p>
              Portable Monitor, Elecife 15.6 Inch Full HD 1080P USB Type C Computer Monitor, IPS Eyes Care Screen with HDMI for Laptop PC MAC Phone Xbox PS4/5, Dual Speakers, Protective Bag
            </p>
          </div>
        </div>
        <div className="monitors__lightning-container">
          <div className="monitors__lightning-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41o-lfbZigL._AC_SX466_.jpg" alt="lightning-deals-img" />
          </div>
          <div className="monitors__lightning-info">
            <ul>
              <p>Upcoming Deal</p>
              <p>Starts for you in 01:12:08</p>
            </ul>
            <p>
              Portable Gaming Monitor 4K Anmite 15.6 Inch Mobile Computer Display External Display for Xbox PS4 Phone with Speakers Type-C USB-C HDMI IPS UHD 2160P LED Screen
            </p>
          </div>
        </div>
        <div className="monitors__lightning-container">
          <div className="monitors__lightning-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91lsKw6ZMFL._AC_SL1500_.jpg" alt="lightning-deals-img" />
          </div>
          <div className="monitors__lightning-info">
            <ul>
              <p>Upcoming Deal</p>
              <p>Starts for you in 09:53:31</p>
            </ul>
            <p>
              15.6" Portable Monitor, Zissu's Laptop Dual USB C Monitor, Ultra-Slim Full HD 1080P HDR IPS Screen Gaming Monitor, Eye Care 178° Full View Computer
            </p>
          </div>
        </div>
        <div className="monitors__lightning-container">
          <div className="monitors__lightning-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61n9Ehh%2BXLL._AC_SL1500_.jpg" alt="lightning-deals-img" />
          </div>
          <div className="monitors__lightning-info">
            <ul>
              <p>Upcoming Deal</p>
              <p>Starts for you in 10:15:45</p>
            </ul>
            <p>
              Portable Monitor - UPERFECT 17.3" FHD 1080P 100% sRGB, Frameless FreeSync IPS HDR Gaming Display with 90°Adjustable Kickstand, Dual USB C for Laptop, PC, MAC, Surface, Phone, PS3, PS4, Xbox, Switch
            </p>
          </div>
        </div>
      </div>
      <div className="monitors__sub-heading">
        <p>Most wished for</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="Portable Monitor - AUZAI 15.6' Ultra Slim Portable Computer Monitor, FHD"
          price={179.99}
          rateNumber={"791"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/718Vq5-Q8dL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC"
          price={379.99}
          rateNumber={"6,475"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/91lS5yEDH-L._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Portable Monitor - Lepow 15.6 Inch Full HD 1080P USB Type-C Computer"
          price={188.98}
          rateNumber={"7,520"}
          rating={5}
          listPrice={"269.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71m3D2cIgML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide"
          price={278.99}
          rateNumber={"5,432"}
          rating={4}
          listPrice="269.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Portable Monitor - AUZAI 15.6' Ultra Slim Portable Computer Monitor, FHD"
          price={179.99}
          rateNumber={"791"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/718Vq5-Q8dL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC"
          price={379.99}
          rateNumber={"6,475"}
          rating={5}
          listPrice={""}
          image="https://images-na.ssl-images-amazon.com/images/I/91lS5yEDH-L._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Portable Monitor - Lepow 15.6 Inch Full HD 1080P USB Type-C Computer"
          price={188.98}
          rateNumber={"7,520"}
          rating={5}
          listPrice={"269.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71m3D2cIgML._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide"
          price={278.99}
          rateNumber={"5,432"}
          rating={4}
          listPrice="269.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC._SR360,460.jpg"
        />
      </div>
      <div className="monitors__sub-heading">
        <p>Most gifted</p>
        <p>See more</p>
      </div>
      <div className="monitors__product-container">
        <MonitorsTemplate
          id={uuid()}
          title="Acer Nitro XV272U Pbmiiprzx 27' WQHD (2560 x 1440) IPS G-SYNC"
          price={299.99}
          rateNumber={"444"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81Cq+ySZwvL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="GIGABYTE G32QC 32' 165Hz 1440P Curved Gaming Monitor, 2560 x"
          price={349.99}
          rateNumber={"1,249"}
          rating={4}
          listPrice={"369.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71ZdD4CIZVL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre 24' Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA"
          price={129.99}
          rateNumber={"12,101"}
          rating={4}
          listPrice={"369.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/914W+OtJQ-L._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre 20' 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA"
          price={79.97}
          rateNumber={"12,190"}
          rating={4}
          listPrice="369.99"
          image="https://images-na.ssl-images-amazon.com/images/I/617S7xFO58L._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Acer Nitro XV272U Pbmiiprzx 27' WQHD (2560 x 1440) IPS G-SYNC"
          price={299.99}
          rateNumber={"444"}
          rating={4}
          listPrice={"449.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/81Cq+ySZwvL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="GIGABYTE G32QC 32' 165Hz 1440P Curved Gaming Monitor, 2560 x"
          price={349.99}
          rateNumber={"1,249"}
          rating={4}
          listPrice={"369.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/71ZdD4CIZVL._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre 24' Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA"
          price={129.99}
          rateNumber={"12,101"}
          rating={4}
          listPrice={"369.99"}
          image="https://images-na.ssl-images-amazon.com/images/I/914W+OtJQ-L._AC._SR360,460.jpg"
        />
        <MonitorsTemplate
          id={uuid()}
          title="Sceptre 20' 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA"
          price={79.97}
          rateNumber={"12,190"}
          rating={4}
          listPrice="369.99"
          image="https://images-na.ssl-images-amazon.com/images/I/617S7xFO58L._AC._SR360,460.jpg"
        />
      </div>
    </div>
  )
}

export default Monitors;
