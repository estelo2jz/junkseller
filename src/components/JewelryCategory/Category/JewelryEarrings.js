import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryEarrings.scss';

// import Grillz1 from './JewelryImg/grills/grill1/grill1.jpg';
// import Grillz2 from './JewelryImg/grills/grill2/grill1.jpg';
// import Grillz3 from './JewelryImg/grills/grill3/grill1.jpg';
// import Grillz4 from './JewelryImg/grills/grill4/grill1.jpg';
// import Grillz5 from './JewelryImg/grills/grill5/grill1.jpg';
// import Grillz6 from './JewelryImg/grills/grill6/grill1.jpg';
// import Grillz7 from './JewelryImg/grills/grill7/grill1.jpg';
// import Grillz8 from './JewelryImg/grills/grill8/grill1.jpg';
// import Grillz9 from './JewelryImg/grills/grill9/grill1.jpg';
// import Grillz10 from './JewelryImg/grills/grill10/grill1.jpg';
// import Grillz11 from './JewelryImg/grills/grill11/grill1.jpg';
// import Grillz12 from './JewelryImg/grills/grill12/grill1.jpg';
// import Grillz13 from './JewelryImg/grills/grill13/grill1.jpg';
// import Grillz14 from './JewelryImg/grills/grill14/grill1.jpg';


function EarringsTemplate({ id, title, image, price, rating, nameID,rateNumber, listPrice }) {
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
    <div className="earrings-template__container">
      <div className="earrings-template__img">
        <img src={image} alt="grillz-product-img" />
      </div>
      <div className="earrings-template__info">
        <div className="earrings-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <div className="earrings-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="earrings-template__title">
          <p>{title}</p>
        </div>
        {/* <div className="earrings-template__rating">
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
      <div className="earrings-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Earrings() {
  return (
    <div className="earrings__container">
      <div className="earrings__heading">
        <p>Earring's</p>
      </div>
      {/* <div className="earrings__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="earrings__category">
        <Link to="/" className="earrings__category-img">
          <img src="https://www.icebox.com/unsafe/800x300/icebox-jewelry.s3.amazonaws.com/categories/ICEBOX_Header_Necklaces_1.jpg" alt="monitor-category" />
        </Link>
      </div>
      <div className="earrings__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="earrings__product-container">
        <EarringsTemplate
          id={uuid()}
          nameID= {"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
        <EarringsTemplate
          id={uuid()}
          nameID={"S505"}
          title="INVISIBLE SET EMERALD"
          price={4000}
          image={"https://www.jessicamccormack.com/media/catalog/product/cache/ce5b8d8d6d6ae23687b53f806bfffa6d/j/e/jessica_mccormack_signature_0.90ct_diamond_gypset_hoop_earrings_wg_1.jpg"}
        />
      </div>
    </div>
  )
}

export default Earrings;
