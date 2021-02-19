import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ClothingShoes.scss';
import HandmadeProductTemplate from './HandmadeProductTemplate';


function ClothingShoes() {
  return (
    <div className="clothing-shoes__container">
      <div className="clothing-shoes__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/clothing&shoes</p>
      </div>
      <div className="clothing-shoes__section-outer">
        <div className="clothing-shoes__heading">
          <p>The Wedding Shop</p>
          <p>Unique, handcrafted home decor, artwork, kitchen accessories & more.</p>
        </div>
        <div className="clothing-shoes__header">
          <p>Shop by category</p>
        </div>
        <div className="clothing-shoes__section-category">
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/71XnpLa%2BCcL._SY500_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Women</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_clothing._CB463969227_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Men</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/91UbVTEvLhL._SY500_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Accessories</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/612m5REyWVL.jpg" alt="clothing-shoes" />
            </Link>
            <p>Shoes</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://m.media-amazon.com/images/G/01/handmade/StorefrontMerch/Q2Flip/sbc_clothgirls._CB463974842_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Girls</p>
          </div>
          <div className="clothing-shoes__section-links">
            <Link to="/handmade/clothing&shoes">
              <img src="https://images-na.ssl-images-amazon.com/images/I/61l-5-yVh9L._SY500_.jpg" alt="clothing-shoes" />
            </Link>
            <p>Boys</p>
          </div>
        </div>
      </div>
      <div className="clothing-shoes__header">
        <p>Collections we love</p>
      </div>
      <div className="clothing-shoes__products">
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
        <HandmadeProductTemplate
          id={uuid()}
          image={"https://images-na.ssl-images-amazon.com/images/I/41cTvKu1plL.jpg"}
          title="Stylish Cotton Face Mask with Filter Pocket, Handmade Floral Plaid design facemasks for women"
          brandName="HOPE LOVE SHINE"
          rating={4}
          rateNumber={"792"}
          shipping={"Free Shipping"}
          price={"13.99"}
          arrivalEst={"Thursday, Feb 18"}
        />
      </div>
    </div>
  )
}

export default ClothingShoes
