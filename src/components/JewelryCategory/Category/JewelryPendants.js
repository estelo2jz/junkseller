import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryPendantz.scss';

function PendantsTemplate({ id, title, image, price, rating, nameID,rateNumber, listPrice }) {
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
        <img src={image} alt="grillz-product-img" />
      </div>
      <div className="pendantz-template__info">
        <div className="pendantz-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          {/* <div className="pendantz-template__id">
            <p>
              {nameID}
            </p>
          </div> */}
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="pendantz-template__rating">
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
        <div className="pendantz-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="pendantz-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Pendants() {
  return (
    <div className="pendantz__container">
      <div className="pendantz__heading">
        <p>Earring's</p>
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
        <PendantsTemplate
          id={uuid()}
          title="Purple Amulet"
          rateNumber={657}
          rating={5}
          price={65.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw608a84fe/productimages/main/399185C01_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={1657}
          rating={4}
          title="Small Pink Pave O"
          price={55.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw417dc65d/productimages/main/399097C02_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={157}
          rating={4}
          title="Sparkling Cresent Moon"
          price={50.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwecc942d7/productimages/main/399184C01_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Sname Chain Pattern Open Heart"}
          price={45.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw5e2a00dc/productimages/main/399094C00_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={2354}
          rating={5}
          title={"Harry Potter, Deathly Hallows Dangle Charm"}
          price={85.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw424e816d/productimages/main/799126C01_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={1557}
          rating={4}
          title={"Pave Ball Pendant"}
          price={35.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwd35caa9a/productimages/main/388686C01_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={457}
          rating={4}
          title={"Sparkling Queen Bee"}
          price={55.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw4fe230d4/productimages/main/398840C01_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={125}
          rating={4}
          title={"Regal Key"}
          price={45.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw299f02f8/productimages/main/397725_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={657}
          rating={4}
          title={"Open Centre Pandora Crown O"}
          price={70.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw4f0de3c2/productimages/main/399043C00_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={967}
          rating={4}
          title={"Monents O Silver"}
          price={55.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw64b70051/productimages/main/398256_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={147}
          rating={4}
          title={"Monents O Gold"}
          price={65.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw4f772b0a/productimages/main/368735C00_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={857}
          rating={4}
          title={"Monents O Rose Gold"}
          price={70.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe5235f6e/productimages/main/388256_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={57}
          rating={4}
          title={"Pink Ladybird"}
          price={65.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw249368f9/productimages/main/387909EN160_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={5}
          title={"Single Feather"}
          price={50.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw376ec5ca/productimages/main/397216_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Lucky Four-Leaf Clover"}
          price={50.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw197efcb6/productimages/main/397965NAG_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Sqaure Sparkle Halo"}
          price={90.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw30a9cbba/productimages/main/380378CZ_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
        <PendantsTemplate
          id={uuid()}
          rateNumber={4657}
          rating={4}
          title={"Sparkling Snowflake"}
          price={69.00}
          image={"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe8ec5716/productimages/main/380354CZ_RGB.JPG?sw=400&sh=400&sm=fit&sfrm=png&bgcolor=F5F5F5"}
        />
      </div>
    </div>
  )
}

export default Pendants;
