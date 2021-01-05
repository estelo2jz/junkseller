import React from 'react';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/TVVideo.scss';

function TVVideo() {
  return (
    <div className="tv-video__container">
      <div className="tv-video__heading">
        <h1>TV & Video</h1>
      </div>
      <div className="tv-video__ads-image">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedTelevisions_DT_EN.jpg" alt="image" />
      </div>
      <div className="tv-video__tv-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/Value_B084JBTYHJ_Storefront.jpg" alt="image"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/FamilyEntertainment_B0849L2DM3_Storefront.jpg" alt="image"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/AllAround_B084KQLVFH_Storefront.jpg" alt="image"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/Premium_B0817H41YN_Storefront.jpg" alt="image"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/Style_B084RMZJDY_Storefront.jpg" alt="image"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/AlexaVoice_B0851NMSC6_Storefront.jpg" alt="image"/>
      </div>
      <div>
        <div>
          <div className="tv-video__ralated-container">
            <div>
              <h1>Related to Items You've Viewed</h1>
            </div>
            <div className="tv-video__related">
              <div className="tv-video__flex-box">
                <div className="tv-video__product-card">
                  <ElectronicsProductTemplate 
                    id = "123123"
                    title = "Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2019"
                    price = {119.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/41fziVetM7L._AC._SR360,460.jpg"
                  />
                </div>
                <div className="tv-video__product-card">
                  <ElectronicsProductTemplate 
                    id = "123123"
                    title = "TaoTronics Projector Screen with Stand,Indoor Outdoor PVC Projection"
                    price = {102.82}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/91k0fB2gQHL._AC._SR360,460.jpg"
                  />
                </div>
                <div className="tv-video__product-card">
                  <ElectronicsProductTemplate 
                    id = "123123"
                    title = "Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision |"
                    price = {4.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC._SR360,460.jpg"
                  />
                </div>
                <div className="tv-video__product-card">
                  <ElectronicsProductTemplate 
                    id = "123123"
                    title = "Elite Screens Yard Master 2, 120-inch Outdoor Indoor Projector Screen"
                    price = {169.00}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71YY4Vy4xgL._AC._SR360,460.jpg"
                  />
                </div>
                <div className="tv-video__product-card">
                  <ElectronicsProductTemplate 
                    id = "123123"
                    title = "Fire TV Recast, over-the-air DVR, 1 TB, 150 hours, DVR for cord cutters"
                    price = {279.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51zT5SYY21L._AC._SR360,460.jpg"
                  />
                </div>
                <div className="tv-video__product-card">
                  <ElectronicsProductTemplate 
                    id = "123123"
                    title = "Apple TV 4K (32GB, Latest Model)"
                    price = {179.00}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Y-Dulc3bL._AC._SR360,460.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tv-video__featured-category-container">
            <div>
              <h1>Featured categories</h1>  
            </div>
            <div className="tv-video__flex-box">
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/61Tob9ZNFIL._AC_UY218_.jpg"
                featured="Television"
              />
              <FeaturedCategoryTemplate 
                img="https://images-na.ssl-images-amazon.com/images/I/71aqRWD3Z3L._AC._SR360,460.jpg"
                featured="Projectors"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71Bf0PWemQL._AC_UY218_.jpg"
                featured="Projection Screens"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/615rrQfnMqL._AC_UY218_.jpg"
                featured="Satellite Television"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71bGb9jRoGL._AC_UY218_.jpg"
                featured="DVD Players & Recorders"
              />
              <FeaturedCategoryTemplate 
                img="https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg"
                featured="Streaming Media Player"
              />
              <FeaturedCategoryTemplate 
                img="https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SX466_.jpg"
                featured="Video Glasses"
              />
              <FeaturedCategoryTemplate 
                img="https://images-na.ssl-images-amazon.com/images/I/81RMDc4CWYL._AC._SR360,460.jpg"
                featured="Television"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71UzXMoMueL._AC_UY218_.jpg"
                featured="Home Theater Systems"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71hqkeutqTL._AC_UY218_.jpg"
                featured="AV Reveivers & Aplifiers"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/31G58B26TTL._AC_UY218_.jpg"
                featured="VCRs"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/81xoVh9+uNL._AC_UY218_.jpg"
                featured="Blu-ray Players & Recorders"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71zi1++ZB9L._AC_UY218_.jpg"
                featured="Analog-to-Digital (DTV) Convertors"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/61YQyhH4P3L._AC_UY218_.jpg"
                featured="DVD-VCR Combos"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/61zFWtmpPxL._AC_UY218_.jpg"
                featured="TV-DVD Combos"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/61I9kg2KJ3L._AC_UY218_.jpg"
                featured="HD DVD Players"
              />
            </div>
          </div>
          <div className="tv-video__top-rated-container">
            <div>
              <h1>Top rated</h1>
            </div>
            <div className="tv-video__flex-box">
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
          <div className="tv-video__hot-new-container">
            <div>
              <h1>Hot new releases</h1>
            </div>
            <div className="tv-video__flex-box">
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate   
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
          <div className="tv-video__recommended-container">
            <div>
              <h1>Recommended for you</h1>
            </div>
            <div className="tv-video__flex-box">
             <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
          <div className="tv-video__under-container">
            <div>
              <h1>Under $25</h1>
            </div>
            <div className="tv-video__flex-box">
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
          <div className="tv-video__best-seller-container">
            <div>
              <h1>Best sellers</h1>
            </div>
            <div className="tv-video__flex-box">
             <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
          <div className="tv-video__featured-deals-container">
            <div>
              <h1>Featured deals</h1>
            </div>
            <div className="tv-video__flex-box">
             <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
          <div className="tv-video__lightning-deals-container">
            <div>
              <h1>Lightning deals</h1>
            </div>
            <div className="tv-video__flex-box">
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
          <div className="tv-video__most-wished-container">
            <div>
              <h1>Most wished for</h1>
            </div>
            <div className="tv-video__flex-box">
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>        
          <div className="tv-video__most-gifted-container">
            <div>
              <h1>Most gifted</h1>
            </div>
            <div className="tv-video__flex-box">
             <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {1.99}
                  rating = {5}
                  image = ""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TVVideo;
