import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/PremiumJewelry.scss';

import Chain1 from './JewelryImg/chainz/chain1/chain1.jpg'
import Chain2 from './JewelryImg/chainz/chain2/chain1.jpg'
import Chain3 from './JewelryImg/chainz/chain3/chain1.jpg'
import Chain4 from './JewelryImg/chainz/chain4/chain1.jpg'
import Chain5 from './JewelryImg/chainz/chain5/chain1.jpg'
import Chain6 from './JewelryImg/chainz/chain6/chain1.jpg'
import Chain7 from './JewelryImg/chainz/chain7/chain1.jpg'
import Chain8 from './JewelryImg/chainz/chain8/chain1.jpg'
import Chain9 from './JewelryImg/chainz/chain9/chain1.jpg'
import Chain10 from './JewelryImg/chainz/chain10/chain1.jpg'
import Chain11 from './JewelryImg/chainz/chain11/chain1.jpg'
import Chain12 from './JewelryImg/chainz/chain12/chain1.jpg'

import Grillz1 from './JewelryImg/grills/grill1/grill1.jpg';
import Grillz2 from './JewelryImg/grills/grill2/grill1.jpg';
import Grillz3 from './JewelryImg/grills/grill3/grill1.jpg';
import Grillz4 from './JewelryImg/grills/grill4/grill1.jpg';
import Grillz5 from './JewelryImg/grills/grill5/grill1.jpg';
import Grillz6 from './JewelryImg/grills/grill6/grill1.jpg';
import Grillz7 from './JewelryImg/grills/grill7/grill1.jpg';
import Grillz8 from './JewelryImg/grills/grill8/grill1.jpg';
import Grillz9 from './JewelryImg/grills/grill9/grill1.jpg';
import Grillz10 from './JewelryImg/grills/grill10/grill1.jpg';
import Grillz11 from './JewelryImg/grills/grill11/grill1.jpg';
import Grillz12 from './JewelryImg/grills/grill12/grill1.jpg';
import Grillz13 from './JewelryImg/grills/grill13/grill1.jpg';
import Grillz14 from './JewelryImg/grills/grill14/grill1.jpg';

import Watchz1 from './JewelryImg/watchz/watch1/watch1.jpg'
import Watchz2 from './JewelryImg/watchz/watch2/watch1.jpg'
import Watchz3 from './JewelryImg/watchz/watch3/watch1.jpg'
import Watchz4 from './JewelryImg/watchz/watch4/watch1.jpg'
import Watchz5 from './JewelryImg/watchz/watch5/watch1.jpg'
import Watchz6 from './JewelryImg/watchz/watch6/watch1.jpg'
import Watchz7 from './JewelryImg/watchz/watch7/watch1.jpg'
import Watchz8 from './JewelryImg/watchz/watch8/watch1.jpg'
import Watchz9 from './JewelryImg/watchz/watch9/watch1.jpg'
import Watchz10 from './JewelryImg/watchz/watch10/watch1.jpg'
import Watchz11 from './JewelryImg/watchz/watch11/watch1.jpg'
import Watchz12 from './JewelryImg/watchz/watch12/watch1.jpg'
import Watchz13 from './JewelryImg/watchz/watch13/watch1.jpg'
import Watchz14 from './JewelryImg/watchz/watch14/watch1.jpg'
import Watchz15 from './JewelryImg/watchz/watch15/watch1.jpg'
import Watchz16 from './JewelryImg/watchz/watch16/watch1.jpg'
import Watchz17 from './JewelryImg/watchz/watch17/watch1.jpg'
import Watchz18 from './JewelryImg/watchz/watch18/watch1.jpg'
import Watchz19 from './JewelryImg/watchz/watch19/watch1.jpg'

import Pendantz1 from './JewelryImg/pendantz/pendantz1.jpg';
import Pendantz2 from './JewelryImg/pendantz/pendantz2.jpg';
import Pendantz3 from './JewelryImg/pendantz/pendantz3.jpg';
import Pendantz4 from './JewelryImg/pendantz/pendantz4.jpg';
import Pendantz5 from './JewelryImg/pendantz/pendantz5.jpg';
import Pendantz6 from './JewelryImg/pendantz/pendantz6.jpg';
import Pendantz7 from './JewelryImg/pendantz/pendantz7.jpg';
import Pendantz8 from './JewelryImg/pendantz/pendantz8.jpg';
import Pendantz9 from './JewelryImg/pendantz/pendantz9.jpg';
import Pendantz10 from './JewelryImg/pendantz/pendantz10.jpg';
import Pendantz11 from './JewelryImg/pendantz/pendantz11.jpg';
import Pendantz12 from './JewelryImg/pendantz/pendantz12.jpg';
import Pendantz13 from './JewelryImg/pendantz/pendantz13.jpg';
import Pendantz14 from './JewelryImg/pendantz/pendantz14.jpg';
import Pendantz15 from './JewelryImg/pendantz/pendantz15.jpg';


function PremiumJewelryTemplate({ id, title, image, price, nameID, rating, rateNumber, listPrice }) {
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
    <div className="premium-jewelry-template__container">
      <div className="premium-jewelry-template__img">
        <img src={image} alt="chainz-product-img" />
      </div>
      <div className="premium-jewelry-template__info">
        <div className="premium-jewelry-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <div className="premium-jewelry-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="premium-jewelry-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="premium-jewelry-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function PremiumJewelry() {
  return (
    <div className="premium-jewelry__container">
      <div className="premium-jewelry__heading">
        <p>Premium Jewelries</p>
      </div>
      {/* <div className="premium-jewelry__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="premium-jewelry__category">
        <Link to="/" className="premium-jewelry__category-img">
          <img src="" alt="monitor-category" />
        </Link>
      </div>
      <div className="premium-jewelry__sub-heading">
        <p>Diamonds & Chains</p>
        <p>See more</p>
      </div>
      <div className="premium-jewelry__product-container">
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={9128.00}
          image={Chain1}
          nameID={'JDN090517'}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={12580.00}
          nameID={"JDN1611291"}
          image={Chain2}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={15027}
          nameID={"JDN170119"}
          image={Chain3}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="BLACK DIAMOND CHAIN"
          price={9600}
          nameID={"JDN1701148"}
          image={Chain4}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={4475}
          nameID={"JDN40407"}
          image={Chain5}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="BLUE DIAMOND CHAIN"
          price={14220}
          nameID={"JDN6897"}
          image={Chain6}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={15725}
          nameID={"JDN8721"}
          image={Chain7}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="BLUE DIAMOND CHAIN"
          price={12920}
          nameID={"JDN9505"}
          image={Chain8}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={8940}
          nameID={"JDN40206"}
          image={Chain9}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={4750}
          nameID={"N15116"}
          image={Chain10}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="LADY DIAMOND CHAIN"
          price={8544}
          nameID={"N170530"}
          image={Chain11}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          title="DIAMOND CHAIN"
          price={12500}
          nameID={"N170703"}
          image={Chain12}
        />
      </div>

      <div className="premium-jewelry__sub-heading">
        <p>Diamonds & Grills</p>
        <p>See more</p>
      </div>
      <div className="premium-jewelry__product-container">
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={Grillz1}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"S161506-3A"}
          title="SKY BLUE"
          price={24000}
          image={Grillz2}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JDG73-ICE"}
          title="SKATE 8 PIECE"
          price={5162}
          image={Grillz3}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JDG65-BLUE"}
          title="MAGIC 4 ROW"
          price={11200}
          image={Grillz4}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"S161506-1B"}
          title="INVISIBLE"
          price={6400}
          image={Grillz5}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"S2530032-A"}
          title="16 GOLD TEETH"
          price={6000}
          image={Grillz6}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"S105B"}
          title="6 PIECE INVISIBLE"
          price={6050}
          image={Grillz7}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"C1532-1"}
          title="16 TEETH PRONG"
          price={1944.99}
          image={Grillz8}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JDG69-4TH"}
          title="14K PRINCESS CUT"
          price={2742}
          image={Grillz9}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JDG36"}
          title="Shiny Diesel"
          price={78000}
          image={Grillz10}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JD103"}
          title="Spikey Egde"
          price={8800}
          image={Grillz11}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JD102"}
          title="Santa's Grillz"
          price={78000}
          image={Grillz12}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JD101"}
          title="Slick Golden"
          price={98000}
          image={Grillz13}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"JD104"}
          title="Diamond Ruby Piece"
          price={10000}
          image={Grillz14}
        />
      </div>


      <div className="premium-jewelry__sub-heading">
        <p>Diamonds & Watchs</p>
        <p>See more</p>
      </div>
      <div className="premium-jewelry__product-container">
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="Custom Watch 0001"
          price={38000}
          image={Watchz1}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0002"}
          title="Custom Watch 0002"
          price={12000}
          image={Watchz2}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0003"}
          title="Custom Watch 0003"
          price={27000}
          image={Watchz3}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0004"}
          title="Custom Watch 0004"
          price={24000}
          image={Watchz4}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0005"}
          title="Custom Watch 0005"
          price={9000}
          image={Watchz5}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0006"}
          title="Custom Watch 0006"
          price={12000}
          image={Watchz6}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0007"}
          title="Custom Watch 0007"
          price={15000}
          image={Watchz7}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0008"}
          title="Custom Watch 0008"
          price={25000}
          image={Watchz8}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0009"}
          title="Custom Watch 0009"
          price={9000}
          image={Watchz9}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0010"}
          title="Custom Watch 0010"
          price={22990}
          image={Watchz10}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0011"}
          title="Custom Watch 0011"
          price={26400}
          image={Watchz11}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0012"}
          title="Custom Watch 0012"
          price={22990}
          image={Watchz12}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0013"}
          title="Custom Watch 0013"
          price={18500}
          image={Watchz13}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0014"}
          title="Custom Watch 0014"
          price={29990}
          image={Watchz14}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0015"}
          title="Custom Watch 0015"
          price={16940}
          image={Watchz15}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0016"}
          title="Custom Watch 0016"
          price={18600}
          image={Watchz16}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0017"}
          title="Custom Watch 0017"
          price={18000}
          image={Watchz17}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0018"}
          title="Custom Watch 0018"
          price={19800}
          image={Watchz18}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"CW0019"}
          title="Custom Watch 0019"
          price={22500}
          image={Watchz19}
        />
      </div>



      <div className="premium-jewelry__sub-heading">
        <p>Diamonds & Pendants</p>
        <p>See more</p>
      </div>
      <div className="premium-jewelry__product-container">
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Nazareth"}
          title="Jesus Of Nazareth Pendant 14k Yellow Gold"
          price={25000}
          image={Pendantz1}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Lion"}
          title="Striped Mane Lion Pendant - 14k Yellow Gold"
          price={20000}
          image={Pendantz2}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"WhiteJesus"}
          title="Jesus Piece Pendant 14k White Gold"
          price={16000}
          image={Pendantz3}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"RoseJesus"}
          title="Jesus Piece Pendant 14k Rose Gold"
          price={16000}
          image={Pendantz4}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"GoldJesus"}
          title="Jesus Piece Lg Pendant 14k Yellow Gold"
          price={16000}
          image={Pendantz5}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Ghost"}
          title="Ghost Pendant 14k White Gold"
          price={15000}
          image={Pendantz6}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Hamsa"}
          title="Hamsa Pendant 14k Yellow Gold"
          price={15000}
          image={Pendantz7}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Panther"}
          title="Full Body Black Panther Pendant 14k White Gold"
          price={12500}
          image={Pendantz8}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Hands"}
          title="Prayer Hands Pendant 14k Yellow Gold"
          price={12000}
          image={Pendantz9}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Snowboarder"}
          title="Snowboarder Pendant 14k White Gold"
          price={14000}
          image={Pendantz10}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Evil"}
          title="Diamond Evil Cat Pendant - 14k White Gold"
          price={12000}
          image={Pendantz11}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Bear"}
          title="Grizzly Bear Pendant 14k White Gold"
          price={15000}
          image={Pendantz12}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Africa"}
          title="Africa Pendant 14k Yellow Gold"
          price={11000}
          image={Pendantz13}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Crown"}
          title="King Crown Lion Pendant 14k White Gold"
          price={13000}
          image={Pendantz14}
        />
        <PremiumJewelryTemplate
          id={uuid()}
          nameID={"Bubbly"}
          title="Bubbly 3 Row Cross Pendant 14k Yellow Gold"
          price={17000}
          image={Pendantz15}
        />
      </div>
    </div>
  )
}

export default PremiumJewelry;
