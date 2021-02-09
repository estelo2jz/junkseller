import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { useStateValue } from '../../StateProvider';
import '../ClothingStyles/PantsJeans.scss';

function PantsJeansTemplate({ id, title, image, price, rating, rateNumber, listPrice }) {
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
    <div className="pants-jeans-template__container">
      <div className="pants-jeans-template__img">
        <img src={image} alt="apperal-product-img" />
      </div>
      <div className="pants-jeans-template__info">
        <div className="pants-jeans-template__price">
          <span>
            <p>$</p>
            <p>{price}</p>
          </span>
          <span>
            <p>{listPrice}</p>
          </span>
        </div>
        <div className="pants-jeans-template__title">
          <p>{title}</p>
        </div>
        {/* <div className="pants-jeans-template__rating">
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
      <div className="pants-jeans-template__btn">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
}



function PantsJeans() {
  return (
    <div className="pants-jeans__container">
      <div className="pants-jeans__heading">
        <p>Pants & Jeans</p>
      </div>
      {/* <div className="pants-jeans__ads-one">
        <img src="" alt="ads-image" />
      </div> */}
      <div className="pants-jeans__category">
        <Link to="/" className="pants-jeans__category-img">
          <img src="https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/o0kVgpwXTIOvYLSreGBs" alt="monitor-category" />
        </Link>
      </div>
      <div className="pants-jeans__sub-heading">
        <p>Top rated</p>
        <p>See more</p>
      </div>
      <div className="pants-jeans__product-container">
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Men Floral Embroidery Ripped Skinny Jeans"
          price={118.69}
          rateNumber={"8,576"}
          rating={5}
          listPrice={""}
          image="https://img.ltwebstatic.com/images3_pi/2020/10/17/16029193603fc9fafd20f8d943df376a8edef1ed2b_thumbnail_900x.webp"
        />
        <PantsJeansTemplate
          id={uuid()}
          title="Black Diamond Sharp"
          price={198.99}
          rateNumber={"3,873"}
          rating={5}
          listPrice={"209.99"}
          image="https://op2.0ps.us/original/opplanet-black-diamond-sharp-end-womens-snow-shell-pants-black-extra-small-aphu53015xsm1-main"
        />
      </div>
    </div>
  )
}

export default PantsJeans;
