import React from 'react';
import { Link } from 'react-router-dom';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/VideoGames.scss';
import JumpTo from './JumpTo';

function VideoGames() {
  return (
    <div className="video-games__container">
      <div className="video-games__jump-to">
        <JumpTo 
          path1 = "/electronics/headphones"
          link1 = "headphones"
          path2 = "/electronics/carelectronics"
          link2 = "car-lectronics"
          path3 = "/electronics/cameraphotovideo"
          link3 = "camera&photo&video"
          path4 = "/electronics/electronicsbase"
          link4 = "electronics"
          path5 = "/electronics/musicalinstruments"
          link5 = "musical-instruments"
          path6 = "/electronics/bluetoothwireless"
          link6 = "bluetooth&wireless"
          path7 = "/electronics/wearabletechnology"
          link7 = "wearable-technology"
          path8 = "/electronics/homeaudiotheater"
          link8 = "home&audio&theater"
          path9 = "/electronics/tvvideo"
          link9 = "tv&video"
          path10 = "/electronics/cellphones"
          link10 = "cellphones"
        />
      </div>
      <div className="video-games__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/electronics">
          <p>
            /electronics
          </p>
        </Link>
        <p>/videogames</p>
      </div>
      <div className="video-games__heading">
        <h1>Video Games</h1>
      </div>
      <div className="video-games__featured-brand-container">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/PlayStation750.png" alt="ps" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/XBOX750.png" alt="xbox" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/SWITCH750.png" alt="switch" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/PC750.png" alt="pc" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/NEW/Luna750.jpg" alt="luna" />
      </div>
      <div className="video-games__heading">
        <h1>Explore next-gen consoles</h1>
      </div>
      <div className="video-games__next-gen-ads">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/videogames/PS5_banner_v3.jpg" alt="ps5" />
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital-videogames/vghp/XboxBanner.jpg" alt="xs" />
      </div>
      {/* <div className="video-games__next-gen-ads">
      </div> */}
      <div className="video-games__top-rated-container">
        <div className="video-games__heading">
          <h1>Top rated</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {29.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {47.92}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {29.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {149.00}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {347.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {169.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__hot-new-container">
        <div className="video-games__heading">
          <h1>Hot new releases</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate   
              id = "123123"
              title = ""
              price = {95.67}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = "TCL 4K Smart LED TV, 43' (43S435)"
              price = {228.00}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {19.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {327.50}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {83.19}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__recommended-container">
        <div className="video-games__heading">
          <h1>Recommended for you</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {138.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {119.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {24.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {129.00}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__under-container">
        <div className="video-games__heading">
          <h1>Under $25</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {23.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {19.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {19.99}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {14.99}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {16.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {12.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__best-seller-container">
        <div className="video-games__heading">
          <h1>Best sellers</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {49.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {28.89}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {27.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {29.90}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {46.96}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {37.96}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__featured-deals-container">
        <div className="video-games__heading">
          <h1>Featured deals</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {35.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {20.64}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {20.84}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {92.03}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {65.01}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {28.58}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__lightning-deals-container">
        <div className="video-games__heading">
          <h1>Lightning deals</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {46.73}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {15.29}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {12.74}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {59.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__most-wished-container">
        <div className="video-games__heading">
          <h1>Most wished for</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {99.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {397.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {169.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {79.03}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {99.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {1.99}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
      <div className="video-games__most-gifted-container">
        <div className="video-games__heading">
          <h1>Most gifted</h1>
        </div>
        <div className="video-games__flex-box">
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {37.49}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {128.00}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {119.99}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {69.99}
              rating = {5}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
            <ElectronicsProductTemplate 
              id = "123123"
              title = ""
              price = {29.99}
              rating = {4}
              image = ""
            />
          </div>
          <div className="video-games__product-card">
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
    <div className="back-to-top__container">
      <a className="gotop" href="#">Back to top</a>
    </div>
    </div>
  )
}

export default VideoGames;
