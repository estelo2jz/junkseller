import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../JewelryStyles/JewelryNecklace.scss';

// import Chain1 from './JewelryImg/chainz/chain1/chain1.jpg'
// import Chain2 from './JewelryImg/chainz/chain2/chain1.jpg'
// import Chain3 from './JewelryImg/chainz/chain3/chain1.jpg'
// import Chain4 from './JewelryImg/chainz/chain4/chain1.jpg'
// import Chain5 from './JewelryImg/chainz/chain5/chain1.jpg'
// import Chain6 from './JewelryImg/chainz/chain6/chain1.jpg'
// import Chain7 from './JewelryImg/chainz/chain7/chain1.jpg'
// import Chain8 from './JewelryImg/chainz/chain8/chain1.jpg'
// import Chain9 from './JewelryImg/chainz/chain9/chain1.jpg'
// import Chain10 from './JewelryImg/chainz/chain10/chain1.jpg'
// import Chain11 from './JewelryImg/chainz/chain11/chain1.jpg'
// import Chain12 from './JewelryImg/chainz/chain12/chain1.jpg'

function NecklaceTemplate({ id, title, image, price, nameID, rating, rateNumber, listPrice }) {
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
    <div className="necklace-template__container">
      <div className="necklace-template__img">
        <img src={image} alt="chainz-product-img" />
      </div>
      <div className="necklace-template__info">
        <div className="necklace-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <div className="necklace-template__id">
            <p>
              {nameID}
            </p>
          </div>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="necklace-template__title">
          <p>{title}</p>
        </div>
      </div>
      <div className="necklace-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function Necklace() {
  return (
    <div className="necklace__container">
      <div className="necklace__heading">
        <p>Necklace's</p>
      </div>
      {/* <div className="necklace__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="necklace__category">
        <Link to="/" className="necklace__category-img">
          <img src="https://www.icebox.com/unsafe/800x300/icebox-jewelry.s3.amazonaws.com/categories/ICEBOX_Header_Necklaces_1.jpg" alt="monitor-category" />
        </Link>
      </div>
      <div className="necklace__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="necklace__product-container">
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
        <NecklaceTemplate
          id={uuid()}
          title="DIAMOND STAR CHAIN"
          price={128.00}
          image={"https://cdn.onecklace.com/products/2250/gold_plated_product_2250_1_450.jpeg"}
          nameID={'JDN090517'}
        />
      </div>
    </div>
  )
}

export default Necklace;
