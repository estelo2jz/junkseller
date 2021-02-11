import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryWatchz.scss';

// import Watchz1 from './JewelryImg/watchz/watch1/watch1.jpg'
// import Watchz2 from './JewelryImg/watchz/watch2/watch1.jpg'
// import Watchz3 from './JewelryImg/watchz/watch3/watch1.jpg'
// import Watchz4 from './JewelryImg/watchz/watch4/watch1.jpg'
// import Watchz5 from './JewelryImg/watchz/watch5/watch1.jpg'
// import Watchz6 from './JewelryImg/watchz/watch6/watch1.jpg'
// import Watchz7 from './JewelryImg/watchz/watch7/watch1.jpg'
// import Watchz8 from './JewelryImg/watchz/watch8/watch1.jpg'
// import Watchz9 from './JewelryImg/watchz/watch9/watch1.jpg'
// import Watchz10 from './JewelryImg/watchz/watch10/watch1.jpg'
// import Watchz11 from './JewelryImg/watchz/watch11/watch1.jpg'
// import Watchz12 from './JewelryImg/watchz/watch12/watch1.jpg'
// import Watchz13 from './JewelryImg/watchz/watch13/watch1.jpg'
// import Watchz14 from './JewelryImg/watchz/watch14/watch1.jpg'
// import Watchz15 from './JewelryImg/watchz/watch15/watch1.jpg'
// import Watchz16 from './JewelryImg/watchz/watch16/watch1.jpg'
// import Watchz17 from './JewelryImg/watchz/watch17/watch1.jpg'
// import Watchz18 from './JewelryImg/watchz/watch18/watch1.jpg'
// import Watchz19 from './JewelryImg/watchz/watch19/watch1.jpg'


function WatchzTemplate({ id, title, image, price, nameID,rating, rateNumber, listPrice }) {
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
    <div className="watchz-template__container">
      <div className="watchz-template__img">
        <img src={image} alt="watchz-product-img" />
      </div>
      <div className="watchz-template__info">
        <div className="watchz-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          {/* <div className="watchz-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span> */}
        </div>
        <div className="watchz-template__rating">
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
        <div className="watchz-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="watchz-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Watchz() {
  return (
    <div className="watchz__container">
      <div className="watchz__heading">
        <p>Watch's</p>
      </div>
      {/* <div className="watchz__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="watchz__category">
        <Link to="/" className="watchz__category-img">
          <img src="https://www.icebox.com/unsafe/800x300/icebox-jewelry.s3.amazonaws.com/categories/ICEBOX_Header_Necklaces_1.jpg" alt="monitor-category" />
        </Link>
      </div>
      <div className="watchz__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="watchz__product-container">
        <WatchzTemplate
          id={uuid()}
          nameID = {"CW0001"}
          title="CLASSIC WHITE BLACK"
          price={"95.50"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw50b22d25/images/products/L213.1L.531_fr.jpg?sw=1660&sh=1660"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="AT"
          price={"95.95"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw391787c4/images/products/28000014_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="VICTOR"
          price={"175.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwcbd1668a/images/products/28000123_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="GRIZZLY BROWN"
          price={"115.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwb307ba2b/images/products/28000085_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="ECLIPSE"
          price={"150.50"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwaa602db2/images/products/MV01-G2_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="WHITE SMOKE"
          price={"95.50"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwc322a78f/images/products/28000107_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="STARLIGHT BLACK"
          price={"195.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwc5eb2dbf/images/products/BT01-BB_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="OPAR"
          price={"155.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwf27bce52/images/products/MR01-BLUS_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="DIABLO"
          price={"155.55"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0f54e9e0/images/products/28000125_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="RED SEA"
          price={"152.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw3943e027/images/products/28000073_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="GHOST"
          price={"140.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwbb5d9d74/images/products/MR01-RGGR_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="BALTIC BLUE"
          price={"145.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw61e94c11/images/products/28000076_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="BOURBON ROSE"
          price={"300."}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw9be2cbd4/images/products/AU01-DB_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="SEPIA"
          price={"150.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw14c6608c/images/products/28000084_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="MASON"
          price={"125.25"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw53b1acdb/images/products/MF03-GGR_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="AQUA"
          price={"130.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw40d447aa/images/products/28000079_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="ELOISE"
          price={"160.60"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw75bd942b/images/products/28000062_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="MALIBU MARBLE"
          price={"160.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwbd857552/images/products/MB01-RGMA_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="BELAMAR"
          price={"115.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw919ad61b/images/products/MA01-SNU2_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="HAYDEN"
          price={"125.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw921efbdb/images/products/MF03-RG_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="FIGUEROA"
          price={"115.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw59109dbd/images/products/MB01-RGNA_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="LYNX"
          price={"116.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw872af7f3/images/products/FC01-DR_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="THIRTEEN"
          price={"98.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwced3d176/images/products/TC01-GW_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
        <WatchzTemplate
          id={uuid()}
          nameID={"CW0001"}
          title="BUNRT POPPY"
          price={"112.00"}
          image={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw3d204a0d/images/products/FR01-GOR_fr.jpg?sw=512&sh=512"}
          rating={5}
        />
      </div>
    </div>
  )
}

export default Watchz;
