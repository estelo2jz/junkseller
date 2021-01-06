import React from 'react';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/VideoGames.scss';

function VideoGames() {
  return (
    <div className="tv-video__container">
      <div className="tv-video__heading">
        <h1>Video Games</h1>
      </div>
      <div>
        <div>
          <div className="tv-video__featured-category-container">
            <div className="">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/PlayStation750.png" alt="ps" />
            </div>
            <div className="">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/XBOX750.png" alt="xbox" />
            </div>
            <div className="">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/SWITCH750.png" alt="switch" />
            </div>
            <div className="">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/PC750.png" alt="pc" />
            </div>
            <div className="">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/Luna750.jpg" alt="luna" />
            </div>
          </div>
          <div>
            <div>
              <h2>Explore next0gen consoles</h2>
            </div>
            <div>
              <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/videogames/PS5_banner_v3.jpg" alt="ps5" />
              </div>
              <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/XboxBanner.jpg" alt="xs" />
              </div>
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
                  price = {29.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {47.92}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {29.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {149.00}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {347.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {169.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {45.99}
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
                  price = {95.67}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "TCL 4K Smart LED TV, 43' (43S435)"
                  price = {228.00}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {19.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {327.50}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {83.19}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {21.99}
                  rating = {3}
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
                  price = {138.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {119.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {24.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {129.00}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {175.00}
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
                  price = {23.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {19.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {19.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {14.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {16.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {12.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "g"
                  price = {6.34}
                  rating = {4}
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
                  price = {49.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {28.89}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {27.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {29.90}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {46.96}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {37.96}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {29.99}
                  rating = {4}
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
                  price = {35.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {20.64}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {20.84}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {92.03}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {65.01}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {28.58}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {102.82}
                  rating = {4}
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
                  price = {46.73}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {15.29}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {12.74}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {59.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {25.95}
                  rating = {4}
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
                  price = {99.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {397.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {169.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {79.03}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {99.99}
                  rating = {4}
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
                  price = {697.99}
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
                  price = {37.49}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {128.00}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {119.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {69.99}
                  rating = {5}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {29.99}
                  rating = {4}
                  image = ""
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = ""
                  price = {56.99}
                  rating = {3}
                  image = ""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top__container">
        <a className="gotop" href="#">Back to top</a>
      </div>
    </div>
  )
}

export default VideoGames;
