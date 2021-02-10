import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import JewelryProductTemplate from '../JewelryCategory/Category/JewelryProductTemplate';
import ClothingJewelryMenu from '../JewelryCategory/JewelryMenu';
import '../../styles/Computer.scss';

function ClothingJewelry() {
  return (
    <div className="products__base">
      <div className="computer__container">
        <div className="computer__container-heading">
          <ClothingJewelryMenu 
            category0="Necklace's"
            category1="Watch's"
            category3="Earring's"
            category2="Pendants"
          />
        </div>
        <div className="computer__container-flex-grid">
          <div className="computer__container-flex-1">
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
            <JewelryProductTemplate
              id={uuid()}
              title="Three Point Cross Pendant 14k"
              price={560.60}
              image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/dd0b6638ea3f949ceb9ae1abc1e3e6ff.jpg"
            />
          </div>
          <div className="jewelry__container">
            <Link to="/jewelry/necklaces" className="jewelry__link-header" >
              <p>Necklaces</p>
            </Link>
            <div className="jewelry__product-container">
              <div className="jewelry__info-header" >
                <p>hello</p>
              </div>
            </div>
          </div>
          <div className="jewelry__container">
            <Link to="/jewelry/watchs" className="jewelry__link-header" >
              <p>Watchs</p>
            </Link>
            <div className="jewelry__product-container">
              <div className="jewelry__info-header" >
                <p>hello</p>
              </div>
            </div>
          </div>
          <div className="jewelry__container">
            <Link to="/jewelry/pendants" className="jewelry__link-header" >
              <p>Pendants</p>
            </Link>
            <div className="jewelry__product-container">
              <div className="jewelry__info-header" >
                <p>hello</p>
              </div>
            </div>
          </div>
          <div className="jewelry__container">
            <Link to="/jewelry/earrings" className="jewelry__link-header" >
              <p>Earrings</p>
            </Link>
            <div className="jewelry__product-container">
              <div className="jewelry__info-header" >
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClothingJewelry;
