import React from 'react';
import { uuid } from 'uuidv4';
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
          <div className="computer__container-3-grid">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClothingJewelry;
