import React from 'react';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import '../ElectronicStyles/TVVideo.scss';
import JumpTo from '../../JumpTo';

function TVVideo() {
  return (
    <div className="tv-video__container">
      <div className="tv-video__jump-to">
        <JumpTo 
          path1 = "/electronics/headphones"
          link1 = "/headphones"
          path2 = "/electronics/carelectronics"
          link2 = "/carelectronics"
          path3 = "/electronics/cameraphotovideo"
          link3 = "/cameraphotovideo"
          path4 = "/electronics/electronicsbase"
          link4 = "/electronics"
          path5 = "/electronics/musicalinstruments"
          link5 = "/musicalinstruments"
          path6 = "/electronics/bluetoothwireless"
          link6 = "/bluetoothwireless"
          path7 = "/electronics/wearabletechnology"
          link7 = "/wearabletechnology"
          path8 = "/electronics/homeaudiotheater"
          link8 = "/homeaudiotheater"
          path9 = "/electronics/videogames"
          link9 = "/videogames"
          path10 = "/electronics/cellphones"
          link10 = "/cellphones"
        />
      </div>
      <div className="tv-video__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/electronics">
          <p>
            /electronics
          </p>
        </Link>
        <p>/tv&video</p>
      </div>
      <div className="tv-video__heading">
        <h1>TV & Video</h1>
      </div>
      <div className="tv-video__ads-image">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HandpickedTelevisions_DT_EN.jpg" alt="tv-video" />
      </div>
      <div className="tv-video__tv-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/Value_B084JBTYHJ_Storefront.jpg" alt="tv-video"/>        
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/FamilyEntertainment_B0849L2DM3_Storefront.jpg" alt="tv-video"/> 
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/AllAround_B084KQLVFH_Storefront.jpg" alt="tv-video"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/Premium_B0817H41YN_Storefront.jpg" alt="tv-video"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/Style_B084RMZJDY_Storefront.jpg" alt="tv-video"/>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/HE/AlexaVoice_B0851NMSC6_Storefront.jpg" alt="tv-video"/>
      </div>
      <div>
      <div className="tv-video__heading">
        <h1>Related to Items You've Viewed</h1>
      </div>
      <div className="tv-video__related">
        <div className="tv-video__flex-box">
          <div className="tv-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2019"
              price = {119.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/41fziVetM7L._AC._SR360,460.jpg"
            />
          </div>
          <div className="tv-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "TaoTronics Projector Screen with Stand,Indoor Outdoor PVC Projection"
              price = {102.82}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/91k0fB2gQHL._AC._SR360,460.jpg"
            />
          </div>
          <div className="tv-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision |"
              price = {4.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC._SR360,460.jpg"
            />
          </div>
          <div className="tv-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Elite Screens Yard Master 2, 120-inch Outdoor Indoor Projector Screen"
              price = {169.00}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71YY4Vy4xgL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="tv-video__heading">
      <h1>Featured categories</h1>  
    </div>
    <div className="tv-video__flex-box">
      <div className="tv-video__featured-items">
        <div className="tv-video__featured-item-img">
          <img
              src="https://m.media-amazon.com/images/I/61Tob9ZNFIL._AC_UY218_.jpg"
            alt="Television"
          />
        </div>

        <p>Television</p>
      </div>
      <div className="tv-video__featured-items">
        <div className="tv-video__featured-item-img">
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/71aqRWD3Z3L._AC._SR360,460.jpg"
              alt="Projectors"
            />
        </div>
        <p>Projectors</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
                src="https://m.media-amazon.com/images/I/71Bf0PWemQL._AC_UY218_.jpg"
              alt="Projection Screens"
            />
          </div>
          <p>Projection Screens</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
                src="https://m.media-amazon.com/images/I/615rrQfnMqL._AC_UY218_.jpg"
              alt="Satellite Television"
            />
          </div>
          <p>Satellite Television</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
                src="https://m.media-amazon.com/images/I/71bGb9jRoGL._AC_UY218_.jpg"
                alt="DVD Players"
            />
          </div>
          <p>DVD Players </p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg"
              alt="Streaming Media Player"
            />
          </div>
          <p>Streaming Media Player</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SX466_.jpg"
              alt="Video Glasses"
            />
          </div>
          <p>Video Glasses</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81RMDc4CWYL._AC._SR360,460.jpg"
              alt="Television"
            />
          </div>
          <p>Television</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://m.media-amazon.com/images/I/71UzXMoMueL._AC_UY218_.jpg"
              alt="Home Theater Systems"
            />
          </div>
          <p>Home Theater Systems</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71%2B0JAFy1-L._AC_SL1500_.jpg"
              alt="AV Reveivers & Aplifiers"
            />
          </div>
          <p>AV Reveivers</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://m.media-amazon.com/images/I/81AyC1bS6yL._AC_UY218_.jpg"
              alt="VCRs"
            />
          </div>
          <p>VCRs</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://m.media-amazon.com/images/I/81xoVh9+uNL._AC_UY218_.jpg"
              alt="Blu-ray Players & Recorders"
            />
          </div>
          <p>Blu-ray Players</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://m.media-amazon.com/images/I/71zi1++ZB9L._AC_UY218_.jpg"
              alt="Analog-to-Digital (DTV) Convertors"
            />
          </div>
          <p>Analog-to-Digital (DTV)</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://m.media-amazon.com/images/I/61YQyhH4P3L._AC_UY218_.jpg"
              alt="DVD-VCR Combos"
            />
          </div>
          <p>DVD-VCR Combos</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://m.media-amazon.com/images/I/61zFWtmpPxL._AC_UY218_.jpg"
              alt="TV-DVD Combos"
            />
          </div>
          <p>TV-DVD Combos</p>
      </div>
      <div className="tv-video__featured-items">
          <div className="tv-video__featured-item-img">
            <img
              src="https://m.media-amazon.com/images/I/61I9kg2KJ3L._AC_UY218_.jpg"
              alt="HD DVD Players"
            />
          </div>
          <p>HD DVD Players</p>
      </div>
    </div>
    <div className="tv-video__top-rated-container">
      <div className="tv-video__heading">
        <h1>Top rated</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Apple TV (32GB, 4th generation)"
            price = {149.00}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/41LpF5n38kL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "SAMSUNG 43-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR"
            price = {347.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition"
            price = {169.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/41VCva3xinL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "USX MOUNT Full Motion TV Wall Mount for Most 47-84 inch Flat"
            price = {45.99}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/71jcxZXEaGL._AC._SR360,460.jpg"
          />
        </div>
      </div>
    </div>
    <div className="tv-video__hot-new-container">
      <div className="tv-video__heading">
        <h1>Hot new releases</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "TP-Link USB WiFi Adapter for Desktop PC, AC1300Mbps USB 3.0 WiFi"
            price = {19.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/414EnmcsFjL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "TCL 4K Smart LED TV, 50' (50S435)"
            price = {327.50}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/714hn7q7WxL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "LG BP175 Blu-Ray DVD Player, with HDMI Port Bundle (Comes with a 6"
            price = {83.19}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/418C0wu9DML._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Replacement Remote for Fire TV Stick, Fire TV Stick 4K & Fire TV Stick Lite"
            price = {21.99}
            rating = {3}
            image = "https://images-na.ssl-images-amazon.com/images/I/61xIeJFGaVL._AC._SR360,460.jpg"
          />
        </div>
      </div>
    </div>
    <div className="tv-video__recommended-container">
      <div className="tv-video__heading">
        <h1>Recommended for you</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "TaoTronics Projector Screen with Stand, TT-HP020 Indoor Outdoor"
            price = {138.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71hOdTAlxQL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Projector Screen with Stand 100 inch - Indoor and Outdoor Projection"
            price = {119.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/91NstomHSTL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Sideclick Remotes SC2-FT16K Universal Remote Attachment for Amazon"
            price = {24.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71SvmExX45L._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Vamvo Outdoor Indoor Projector Screen with Stand Foldable Portable"
            price = {129.00}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/71bej4zekBL._AC._SR360,460.jpg"
          />
        </div>
      </div>
    </div>
    <div className="tv-video__under-container">
      <div className="tv-video__heading">
        <h1>Under $25</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Full Motion TV Monitor Wall Mount Bracket Articulating Arms Swivels"
            price = {23.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71zPlLF3w-L._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Roku Voice Remote (Official) for Roku Players and Roku TVs"
            price = {19.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71SEgNJxRmL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Tilting TV Wall Mount Bracket Low Profile for Most 23-55 Inch LED, LCD"
            price = {19.99}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/61XwAsbn71L._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "RCA to HDMI,AV to HDMI Converter,ABLEWE 1080P Mini RCA Composite CVBS"
            price = {14.99}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/61kxUH1ZRSL._AC._SR360,460.jpg"
          />
        </div>
      </div>
    </div>
    <div className="tv-video__best-seller-container">
      <div className="tv-video__heading">
        <h1>Best sellers</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Fire TV Stick 4K with all-new Alexa Voice Remote, streaming media player"
            price = {49.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/51Dmg3tGpbL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Roku Express | HD Streaming Media Player with High Speed HDMI"
            price = {28.89}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/81+0dqbDGWL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Mounting Dream UL Listed TV Mount for Most 37-70 Inches TVs, Universal Tilt"
            price = {27.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71VOIPqcJTL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "U MUST HAVE Amplified HD Digital TV Antenna Long 180 Miles Range"
            price = {29.90}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/915YXVMH6qL._AC._SR360,460.jpg"
          />
        </div>
      </div>
    </div>
    <div className="tv-video__featured-deals-container">
      <div className="tv-video__heading">
        <h1>Featured deals</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Mini DVD Player, DVD CD/Disc Player for TV with HDMI/AV Output, HDMI/AV Cables Included, HD 1080P Supported Built-in PAL/NTSC System USB Input"
            price = {35.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/61qp67eI4eL._AC_SL1500_.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Universal TV Stand - Table Top TV Stand for 32-47 Inch LCD LED TVs - Height Adjustable TV Base Stand with Tempered Glass Base & Wire Management"
            price = {20.64}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/61DRLfmrVDL._AC_SL1500_.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Full Motion TV Wall Mount Dual Swivel Articulating Tilt 6 Arms TV Bracket for 37-70' LED, OLED, 4K Flat/Curved TVs "
            price = {20.84}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71uFsg6T1kL._AC_SL1500_.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Abdtech Portable Outdoor Movie Screen, 120 inch 3D Projector Screen Frame Foldable Movie Screen for Projectors "
            price = {92.03}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/61a1uKJquEL._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
    <div className="tv-video__lightning-deals-container">
      <div className="tv-video__heading">
        <h1>Lightning deals</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "PERLESMITH Fixed TV Wall Mount Bracket Low Profile for 32-82 inch LED, LCD,and OLED Flat Screen TVs - Fits 16”- 24” Wood Studs"
            price = {15.29}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/61JNvejgFaL._AC_SL1500_.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "BLUE STONE Tilt TV Wall Mount Bracket for Most 32-65 Inch LED LCD OLED Flat Screen TVs/Curved TVs, Low Profile, Up to VESA 400x400 and 165 LBS"
            price = {12.74}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/61n2MrNMsML._AC_SL1500_.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "PERLESMITH TV Tripod Stand-Portable TV Stand for 23-55 Inch LED LCD OLED Flat Screen TVs-Height Adjustable Display Floor TV Stand with VESA 400x400mm"
            price = {59.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/612lAJXcFkL._AC_SL1500_.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Universal TV Stand Base Tabletop TV Stand for 26 to 55 Inch TVs -Height Adjustable TV Base Stand with Tempered Glass Base & Wire Management"
            price = {25.95}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71Ml4u4O59L._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
    <div className="tv-video__most-wished-container">
      <div className="tv-video__heading">
        <h1>Most wished for</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "WiFi Projector,VILINICE 5000L Mini Outdoor Movie Projector ,Portable Phone"
            price = {99.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/715l4w-zFUL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR"
            price = {397.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Insignia Smart HD TV - Fire TV Edition"
            price = {169.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/51YUcT86d4L._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "DR. J Professional HI-04 Mini Projector Outdoor Movie Projector"
            price = {79.03}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/718A7339wbL._AC._SR360,460.jpg"
          />
        </div>
      </div>
    </div>        
    <div className="tv-video__most-gifted-container">
      <div className="tv-video__heading">
        <h1>Most gifted</h1>
      </div>
      <div className="tv-video__flex-box">
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Roku Premiere | HD/4K/HDR Streaming Media Player"
            price = {37.49}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/81wHpn6wPLL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "TCL 32' 3-Series 720p ROKU Smart TV - 32S335"
            price = {128.00}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/61ficuy07aL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "All-new Fire TV Cube, hands-free with Alexa and 4K Ultra HD, streaming"
            price = {119.99}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/41e9eAuFMQL._AC._SR360,460.jpg"
          />
        </div>
        <div className="tv-video__product-card">
          <ElectronicsProductTemplate 
            id = {uuid()}
            title = "Mini Projector, PVO Portable Projector for Cartoon, Kids Gift"
            price = {69.99}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/61By+PYGkwL._AC._SR360,460.jpg"
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

export default TVVideo;
