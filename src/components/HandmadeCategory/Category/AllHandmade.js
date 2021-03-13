import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/AllHandmade.scss';
import JumpTo from './JumpTo';

function AllHandmade() {
  return (
    <div className="all-handmade__container">
          <JumpTo 
          path1 = "/handmade/kitchen&dining"
          link1 = "kitchen&dining"
          path2 = "/handmade/wedding"
          link2 = "wedding"
          path3 = "/handmade/artwork"
          link3 = "art-work"
          path4 = "/handmade/homedecor"
          link4 = "home-decor"
          path5 = "/handmade/jewelry"
          link5 = "jewelry"
          path6 = "/handmade/handbags&accessories"
          link6 = "handbags&accessories"
          path7 = "/handmade/gifts"
          link7 = "gifts"
          path8 = "/handmade/sellon"
          link8 = "sell-on"
          path9 = "/handmade/clothing&shoes"
          link9 = "clothing&shoes"
          path10 = "/handmade/stationary&partysupplies"
          link10 = "stationary&partysupplies"
          path11 = "/handmade/baby"
          link11 = "baby"
          path12 = "/handmade/toys&games"
          link12 = "toys&games"
          path13 = "/handmade/home&kitchen"
          link13 = "home&kitchen"
          path14 = "/handmade/furniture"
          link14 = "furniture"
          path15 = "/handmade/beauty&grooming"
          link15 = "beauty&grooming"
          path16 = "/handmade/petsupplies"
          link16 = "pet&supplies"
        />
      <div className="all-handmade__history-path">
        <Link to="/handmade">
          <p>
            go back
          </p>
        </Link>
      </div>
      <div className="all-handmade__section-container">
        {/* <div className="ads">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2021/HP/HP_HeaderUpdate_21Q1_D.jpg" alt="ads" />
        </div> */}
        <div className="all-handmade__curated">
          <div className="all-handmade__line-heading">
            <p>Curated collections</p>
          </div>
          <div className="ads">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2021/Campaigns/BHM/HM_HP_BHM_EventTile_D.jpg" alt="ads" />
          </div>
          <div className="all-handmade__curated-container">
            <div className="all-handmade__curated-links">
              <Link>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2020/Homepage/CuratedCollectionTiles/HM_HP_CuratedCollectionTile_CozyColection_2.jpg" alt="cozy-collection" />
              </Link>
            </div>
            <div className="all-handmade__curated-links">
              <Link>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2021/HP/EN_HM_HP_CuratedCollectionTile_2.jpg" alt="best-sellers" />
              </Link>
            </div>
            <div className="all-handmade__curated-links">
              <Link>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2021/HP/HM_HP_CuratedCollectionTile_OfficeDecor_2.jpg" alt="office-decor" />
              </Link>
            </div>
          </div>
        </div>
        <div className="all-handmade__line-heading">
          <p>Shop by category</p>
        </div>
        <div className="all-handmade__category">
          <div className="all-handmade__category-container">
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2019/Homepage/Refresh/R2/Desktop/HP_Main_Category1_D._CB445221137_.jpg" alt="categories" />
              </Link>
            </div>
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2020/Homepage/HM_HP_CatTile_HomeDecor_Desktop._CB1198675309_.png" alt="categories" />
              </Link>
            </div>
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2019/Homepage/Refresh/R2/Desktop/HP_Main_Category3_D._CB445221142_.jpg" alt="categories" />
              </Link>
            </div>
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2019/Homepage/Refresh/R2/Desktop/HP_Main_Category4_D._CB445221142_.jpg" alt="categories" />
              </Link>
            </div>
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2019/Homepage/Refresh/R2/Desktop/HP_Main_Category5_D._CB445221142_.jpg" alt="categories" />
              </Link>
            </div>
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2019/Homepage/Refresh/R2/Desktop/HP_Main_Category6_D._CB445221143_.jpg" alt="categories" />
              </Link>
            </div>
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2019/Homepage/Refresh/R2/Desktop/HP_Main_Category8_D._CB445221140_.jpg" alt="categories" />
              </Link>
            </div>
            <div className="all-handmade__links">
              <Link to="/handmade/allhandmade">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2019/Homepage/Refresh/R2/Desktop/HP_Main_Category7_D._CB445221142_.jpg" alt="categories" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllHandmade
