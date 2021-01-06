import React from 'react';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/CameraPhotoVideo.scss';

function CameraPhotoVideo() {
  return (
    <div className="tv-video__container">
      <div className="tv-video__heading">
        <h1>Camera, Photo & Video</h1>
      </div>
      <div>
        <div>
          <div className="tv-video__featured-category-container">
            <div>
              <h1>Featured categories</h1>  
            </div>
            <div className="tv-video__flex-box">
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/61NPMBpOU2L._AC_UY218_.jpg"
                featured="Accessories"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/81T6hx8XDTL._AC_UY218_.jpg"
                featured="Video"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71ZcdiDEU1L._AC_UY218_.jpg"
                featured="Lighting Studio"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/716JVo5F8oL._AC_UY218_.jpg"
                featured="Video Surveillance"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71SeIiJC-WL._AC_UY218_.jpg"
                featured="Binoculars & Scopes"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/91HnWaCgcuL._AC_UY218_.jpg"
                featured="Bags & Cases"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/510gNC8PV8L._AC_UY218_.jpg"
                featured="Film Photography"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/71tGMtL2Y4L._AC_UY218_.jpg"
                featured="Tripods & Monopods"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/715KblPZchL._AC_UY218_.jpg"
                featured="Underwater Photography"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/61WEBCKCDWL._AC_UY218_.jpg"
                featured="Falshes"
              />
              <FeaturedCategoryTemplate 
                img="https://images-na.ssl-images-amazon.com/images/I/51NBMySL3sL._AC_SX184_.jpg"
                featured="Digital Cameras"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/51kdorxfZqL._AC_UY218_.jpg"
                featured="Lenses"
              />
              <FeaturedCategoryTemplate 
                img="https://images-na.ssl-images-amazon.com/images/I/71L7Abx808L._AC_SX466_.jpg"
                featured="Simulated Cameras"
              />
              <FeaturedCategoryTemplate 
                img="https://m.media-amazon.com/images/I/81wYdbMAP7L._AC_UY218_.jpg"
                featured="Printers & Scanners"
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
                  title = "Introducing Fire TV Stick Lite with Alexa Voice Remote Lite (no TV"
                  price = {29.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/51Da2Z+FTFL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range"
                  price = {47.92}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Google Chromecast (3rd Generation)"
                  price = {29.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/81rOtfzI0QL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Apple TV (32GB, 4th generation)"
                  price = {149.00}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/41LpF5n38kL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "SAMSUNG 43-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR"
                  price = {347.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition"
                  price = {169.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/41VCva3xinL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "USX MOUNT Full Motion TV Wall Mount for Most 47-84 inch Flat"
                  price = {45.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71jcxZXEaGL._AC._SR360,460.jpg"
                />
              </div>
            </div>
          </div>
          <div>
           <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_ORIGIN_1270534_1388561_US_us_ce_camera_3413668_750x447_en_US.jpg" alt="ads-image" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/2pack/ce_camera_2pack_desktop_amazonbasics.jpg" alt="ads-image" />
           </div>
           <div>
             <h2>Shop by Brand</h2>
             <div>
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_canon.png" alt="brand-image" />
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_fujifilm.png" alt="brand-image" />
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_sony.png" alt="brand-image" />
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1222794_1163159_US_us_ce_camera_brandfarm_3069759_230x80_null_en_US.jpg" alt="brand-image" />
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_olympus.png" alt="brand-image" />
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_nikon.png" alt="brand-image" />
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
                  title = "Roku Ultra 2020 | Streaming Media Player HD/4K/HDR/Dolby Vision"
                  price = {95.67}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/81Jc5Hf41JL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "TCL 4K Smart LED TV, 43' (43S435)"
                  price = {228.00}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71hkz1X+LgL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "TP-Link USB WiFi Adapter for Desktop PC, AC1300Mbps USB 3.0 WiFi"
                  price = {19.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/414EnmcsFjL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "TCL 4K Smart LED TV, 50' (50S435)"
                  price = {327.50}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/714hn7q7WxL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "LG BP175 Blu-Ray DVD Player, with HDMI Port Bundle (Comes with a 6"
                  price = {83.19}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/418C0wu9DML._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Replacement Remote for Fire TV Stick, Fire TV Stick 4K & Fire TV Stick Lite"
                  price = {21.99}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61xIeJFGaVL._AC._SR360,460.jpg"
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
                  title = "TaoTronics Projector Screen with Stand, TT-HP020 Indoor Outdoor"
                  price = {138.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71hOdTAlxQL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Projector Screen with Stand 100 inch - Indoor and Outdoor Projection"
                  price = {119.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91NstomHSTL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Sideclick Remotes SC2-FT16K Universal Remote Attachment for Amazon"
                  price = {24.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71SvmExX45L._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Vamvo Outdoor Indoor Projector Screen with Stand Foldable Portable"
                  price = {129.00}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71bej4zekBL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Projector Screen with Stand, Upgraded 3 Layers 120 inch 4K HD 16:9"
                  price = {175.00}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61sj5mju4VL._AC._SR360,460.jpg"
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
                  title = "Full Motion TV Monitor Wall Mount Bracket Articulating Arms Swivels"
                  price = {23.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71zPlLF3w-L._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Roku Voice Remote (Official) for Roku Players and Roku TVs"
                  price = {19.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71SEgNJxRmL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Tilting TV Wall Mount Bracket Low Profile for Most 23-55 Inch LED, LCD"
                  price = {19.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61XwAsbn71L._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "RCA to HDMI,AV to HDMI Converter,ABLEWE 1080P Mini RCA Composite CVBS"
                  price = {14.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61kxUH1ZRSL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "WALI Universal TV Stand Table Top for Most 22 to 65 inch LCD Flat Screen"
                  price = {16.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/715cK8BTg2L._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "avedio links HDMI Splitter 1 in 2 Out, 4K HDMI Splitter for Dual Monitors"
                  price = {12.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/716I5dAuOCL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "RC280 Replacement Remote Applicable for TCL Roku TV with Netflix Sling"
                  price = {6.34}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61E2DRD56gL._AC._SR360,460.jpg"
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
                  title = "Fire TV Stick 4K with all-new Alexa Voice Remote, streaming media player"
                  price = {49.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/51Dmg3tGpbL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Roku Express | HD Streaming Media Player with High Speed HDMI"
                  price = {28.89}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/81+0dqbDGWL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Mounting Dream UL Listed TV Mount for Most 37-70 Inches TVs, Universal Tilt"
                  price = {27.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71VOIPqcJTL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "U MUST HAVE Amplified HD Digital TV Antenna Long 180 Miles Range"
                  price = {29.90}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/915YXVMH6qL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Full Motion TV Wall Mount Bracket Dual Articulating Arms Swivels Tilts Rotation"
                  price = {46.96}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71inkA2txkL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "TV Wall Mount Bracket Full Motion Dual Swivel Articulating Arms"
                  price = {37.96}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/619ISmnZK3L._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Mounting Dream Full Motion TV Wall Mount for Most 26-55 Inch TVs"
                  price = {29.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/712V3dBfluL._AC._SR360,460.jpg"
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
                  title = "Mini DVD Player, DVD CD/Disc Player for TV with HDMI/AV Output, HDMI/AV Cables Included, HD 1080P Supported Built-in PAL/NTSC System USB Input"
                  price = {35.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61qp67eI4eL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Universal TV Stand - Table Top TV Stand for 32-47 Inch LCD LED TVs - Height Adjustable TV Base Stand with Tempered Glass Base & Wire Management"
                  price = {20.64}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61DRLfmrVDL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Full Motion TV Wall Mount Dual Swivel Articulating Tilt 6 Arms TV Bracket for 37-70' LED, OLED, 4K Flat/Curved TVs "
                  price = {20.84}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71uFsg6T1kL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Abdtech Portable Outdoor Movie Screen, 120 inch 3D Projector Screen Frame Foldable Movie Screen for Projectors "
                  price = {92.03}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61a1uKJquEL._AC_SL1000_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Projector Screen with Stand 100 inch Portable Projection Screen 16:9 4K HD Rear Front Projections Movies Screen with Carry Bag for Indoor Outdoor Home"
                  price = {65.01}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71NO0x7vDjL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Everstone Heavy Duty Single Stud TV Wall Mount Bracket for Most 32-80 Inch LED,LCD,OLED,Plasma Flat Screen,Curved TVs,with Full Motion Articulating Arm"
                  price = {28.58}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71x-ns2WZvL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "TaoTronics Projector Screen with Stand,Indoor Outdoor PVC Projection Screen 4K HD 100'' 16: 9 Wrinkle-Free Design(Easy to Clean, 1.1Gain, 160° Viewing"
                  price = {102.82}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91k0fB2gQHL._AC_SL1500_.jpg"
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
                  title = "PERLESMITH Full Motion TV Wall Mount for 37-80 Inch Flat Curved TVs with Smooth Tilts Swivel & Extends - Dual Articulating Arms Wall Mount TV Bracket"
                  price = {46.73}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71INH2K3wKL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "PERLESMITH Fixed TV Wall Mount Bracket Low Profile for 32-82 inch LED, LCD,and OLED Flat Screen TVs - Fits 16”- 24” Wood Studs"
                  price = {15.29}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61JNvejgFaL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "BLUE STONE Tilt TV Wall Mount Bracket for Most 32-65 Inch LED LCD OLED Flat Screen TVs/Curved TVs, Low Profile, Up to VESA 400x400 and 165 LBS"
                  price = {12.74}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61n2MrNMsML._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "PERLESMITH TV Tripod Stand-Portable TV Stand for 23-55 Inch LED LCD OLED Flat Screen TVs-Height Adjustable Display Floor TV Stand with VESA 400x400mm"
                  price = {59.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/612lAJXcFkL._AC_SL1500_.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Universal TV Stand Base Tabletop TV Stand for 26 to 55 Inch TVs -Height Adjustable TV Base Stand with Tempered Glass Base & Wire Management"
                  price = {25.95}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71Ml4u4O59L._AC_SL1500_.jpg"
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
                  title = "WiFi Projector,VILINICE 5000L Mini Outdoor Movie Projector ,Portable Phone"
                  price = {99.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/715l4w-zFUL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR"
                  price = {397.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Insignia Smart HD TV - Fire TV Edition"
                  price = {169.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/51YUcT86d4L._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "DR. J Professional HI-04 Mini Projector Outdoor Movie Projector"
                  price = {79.03}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/718A7339wbL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Mini Projector for iPhone, ELEPHAS 2020 WiFi Movie Projector with Synchronize"
                  price = {99.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71asgWsMZyL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Philips Hue Play HDMI Sync Box, HDMI 4K Splitter, 4 HDMI in 1 Out"
                  price = {1.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61fkf2Q0ppL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR"
                  price = {697.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC._SR360,460.jpg"
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
                  title = "Roku Premiere | HD/4K/HDR Streaming Media Player"
                  price = {37.49}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/81wHpn6wPLL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "TCL 32' 3-Series 720p ROKU Smart TV - 32S335"
                  price = {128.00}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61ficuy07aL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "All-new Fire TV Cube, hands-free with Alexa and 4K Ultra HD, streaming"
                  price = {119.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/41e9eAuFMQL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Mini Projector, PVO Portable Projector for Cartoon, Kids Gift"
                  price = {69.99}
                  rating = {5}
                  image = "https://images-na.ssl-images-amazon.com/images/I/61By+PYGkwL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Mdbebbron 120 inch Projection Screen 16:9 HD Foldable Anti-Crease"
                  price = {29.99}
                  rating = {4}
                  image = "https://images-na.ssl-images-amazon.com/images/I/81RIoVN1MWL._AC._SR360,460.jpg"
                />
              </div>
              <div className="tv-video__product-card">
                <ElectronicsProductTemplate 
                  id = "123123"
                  title = "Mini Projector, Meer Portable Pico Full Color LED LCD Video Projector"
                  price = {56.99}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/51is6bX7nFL._AC._SR360,460.jpg"
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

export default CameraPhotoVideo;
