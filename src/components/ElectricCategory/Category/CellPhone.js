import React from 'react';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/CellPhone.scss';

function CellPhone() {
  return (
    <div className="cell-phone__container">
        <div className="cell-phone__heading">
          <h1>Cell Phones & Accessories</h1>
        </div>
        <div className="cell-phone__ads-image">
          <img src="https://images-na.ssl-images-amazon.com/images/I/81JZ1r424bL.png" alt="ads-image" />
        </div>
        <div className="cell-phone__heading">
          <h1>Featured categories</h1>  
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__featured-items">
            <div className="cell-phone__featured-item-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81MZ5D1wHpL._AC._SR360,460.jpg"
                alt="Accessories"
              />
            </div>
            <p>Accessories</p>
          </div>
          <div className="cell-phone__featured-items">
            <div className="cell-phone__featured-item-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71NoAVsl10L._AC._SR360,460.jpg"
                alt="Cases, Holster & Sleeves"
              />
            </div>
            <p>Cases, Holster & Sleeves</p>
          </div>
          <div className="cell-phone__featured-items">
            <div className="cell-phone__featured-item-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71ikxa1gBdL._AC_SL1500_.jpg"
                alt="Cell Phones"
              />
            </div>
            <p>Cell Phones</p>
          </div>
          <div className="cell-phone__featured-items">
            <div className="cell-phone__featured-item-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41QxYgIJIHL._AC_.jpg"
                alt="SIM Cards & Prepaid Minutes"
              />
            </div>
            <p>SIM Cards & Prepaid</p>
          </div>
        </div>
      <div className="cell-phone__top-rated-container">
        <div className="cell-phone__heading">
          <h1>Top rated</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1"
              price = {6.97}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81MZ5D1wHpL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Apple AirPods with Charging Case (Wired)"
              price = {128.98}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Apple AirPods Pro"
              price = {209.00}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC._SR360,460.jpg"
              rateNumber = "157,841"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "UNEN MFi Certified 5Pack[3/3/6/6/10ft] Nylon Braided iPhone"
              price = {14.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71wA5HD38nL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Apple EarPods with Lightning Connector - White"
              price = {18.98}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/41wYbyr3LLL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "QHOHQ 3 Pack Screen Protector for iPhone 12 Pro Max [6.7”] "
              price = {16.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71JSy14DhNL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K"
              price = {17.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81axmUuRHrL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="cell-phone__hot-new-container">
        <div className="cell-phone__heading">
          <h1>Hot new releases</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate   
              id = {uuid()}
              title = "Apple 20W USB-C Power Adapter"
              price = {18.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/41iWogJnZQL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Temdan Clear Case Compatible with iPhone 12 Case/Compatible"
              price = {9.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/710Vu4PSd6L._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "jwacct Compatible for Apple Watch Band 38mm 40mm 42mm 44mm"
              price = {11.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71Km6UzvhbL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "TOZO Compatible for iPhone 12 and Compatible for iPhone 12 Pro Screen"
              price = {6.98}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71XFkkNUL0L._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Apple MagSafe Charger"
              price = {35.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/91ghhfky4LL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "AUKEY [Upgraded Version] Car Phone Holder, Universal Phone Car Air"
              price = {11.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/719iaAphGgL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Cordking Designed for iPhone 12 Case, Designed for iPhone 12 Pro Case"
              price = {13.98}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61ykllTSTbL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="cell-phone__recommended-container">
        <div className="cell-phone__heading">
          <h1>Recommended for you</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Beats by Dr dre Powerbeats2 Wireless In-Ear Bluetooth Headphone"
              price = {69.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71XegvkQavL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Occiam Bluetooth Headphones-True Wireless Earbuds 48Hrs Playtime"
              price = {39.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61cLu+0jalL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Powerbeats3 Wireless In-Ear Headphones - Black (Renewed)"
              price = {64.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/51+hHeWBdIL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Mpow Flame Bluetooth Headphones V5.0 IPX7 Waterproof Wireless"
              price = {18.98}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/6160DGE7fNL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Beats Powerbeats3 Wireless Pop Violet Pop Collection in Ear"
              price = {78.00}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/51sGzwFhh4L._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="cell-phone__under-container">
        <div className="cell-phone__heading">
          <h1>Under $10</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Apple Lightning to 3.5 mm Headphone Jack Adapter"
              price = {7.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/31mmFtpMqOL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Mkeke Compatible with iPhone XR Screen Protector, IPhone 11"
              price = {6.94}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71nK-Ti90+L._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "LiCB CR2032 3V Lithium Battery(10-Pack)"
              price = {5.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/810VU2PDlNL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "VicTsing MM057 2.4G Wireless Portable Mobile Mouse Optical Mice"
              price = {9.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Temdan Clear Case Compatible with iPhone 12 Case/Compatible"
              price = {19.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71NoAVsl10L._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Duracell - 2032 3V Lithium Coin Battery - with bitter coating - 4 count"
              price = {8.34}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71joMbc6EpL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Ailun Screen Protector Compatible for iPhone 11 Pro Max/iPhone Xs Max 3"
              price = {7.97}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81CVqvi2wIL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="cell-phone__best-seller-container">
        <div className="cell-phone__heading">
          <h1>Best sellers</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Upright GO NEW Posture Trainer and Corrector for Back | Strapless, Discreet"
              price = {99.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/713bA9hEIeL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "QHOHQ 3 Pack Screen Protector for iPhone 12 Pro Max [6.7”] with 2"
              price = {16.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71JSy14DhNL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Yootech Wireless Charger Qi-Certified 10W Max Fast Wireless Charging"
              price = {9.19}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/51hBV+OTVYL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Anker Nano USB-C Charger, PIQ 3.0 Durable Compact Fast Charger"
              price = {16.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51gHyK0YQVL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "8' Selfie Ring Light with Tripod Stand & Cell Phone Holder for Live"
              price = {33.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61dR6Py28XL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "USB C Female to USB Male Adapter (2-Packs), Basesailor Type C to USB A"
              price = {9.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61uhvhOY3-L._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Selfie Stick Tripod, UBeesize 51' Extendable Tripod Stand"
              price = {23.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61H5ZTSKIlL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="cell-phone__featured-deals-container">
        <div className="cell-phone__heading">
          <h1>Featured deals</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Anker Wireless Charger, PowerWave Stand, Qi-Certified for iPhone SE, 11, 11 Pro, 11 Pro Max, XR, Xs Max, XS, X, 8, 8 Plus, 10W Fast-Charging Galaxy S20 S10 S9 S8, Note 10 Note 9 (No AC Adapter)"
              price = {15.19}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51J1d8kZsCL._AC_SL1250_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Yootech Wireless Charger, Qi-Certified 10W Max Fast Wireless Charging Pad Compatible with iPhone 12/12 Mini/12 Pro Max/SE 2020/11 Pro Max,Samsung Galaxy S20/Note 10/S10/S9,AirPods Pro(No AC Adapter)"
              price = {9.19}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61oIAKY9s1L._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "JETech 3-Pack Screen Protector for iPhone SE 2020, iPhone 8, iPhone 7, iPhone 6s, and iPhone 6, Tempered Glass Film, 4.7-Inch"
              price = {5.07}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71-a7F4zObL._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Mpow Car Phone Mount, Dashboard Car Phone Holder, Washable Strong Sticky Gel Pad with One-Touch Design Compatible iPhone Xs,XS MAX,XR,X,8,8Plus,7,7Plus,6,6Plus, Galaxy S7,8,9,10, Google Nexus, Black"
              price = {7.17}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81OB3Y9wKGL._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "JETech Screen Protector for iPhone 11 Pro, for iPhone Xs, for iPhone X, 5.8-Inch, Tempered Glass Film, 2-Pack"
              price = {5.08}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61QEY3YKqqL._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "BRG Case for Apple Watch Series SE 6 5 4 3 Screen Protector 40mm 44mm 38mm 42mm,[2 Pack] Soft TPU HD Clear Ultra-Thin Overall Protective Cover Case"
              price = {5.83}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/719Fc7MvqlL._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Smiling Case Compatible with Apple Watch Series 6/SE/Series 5/Series 4 44mm with Built in Tempered Glass Screen Protector- All Around Hard PC Case Overall Protective Cover (Black)"
              price = {7.93}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61wJ747%2BkML._AC_SL1254_.jpg"
            />
          </div>
        </div>
      </div>
      <div className="cell-phone__lightning-deals-container">
        <div className="cell-phone__heading">
          <h1>Lightning deals</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "PERLESMITH Full Motion TV Wall Mount for 37-80 Inch Flat Curved TVs with Smooth Tilts Swivel & Extends - Dual Articulating Arms Wall Mount TV Bracket"
              price = {46.73}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71INH2K3wKL._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "PERLESMITH Fixed TV Wall Mount Bracket Low Profile for 32-82 inch LED, LCD,and OLED Flat Screen TVs - Fits 16”- 24” Wood Studs"
              price = {15.29}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61JNvejgFaL._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "BLUE STONE Tilt TV Wall Mount Bracket for Most 32-65 Inch LED LCD OLED Flat Screen TVs/Curved TVs, Low Profile, Up to VESA 400x400 and 165 LBS"
              price = {12.74}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61n2MrNMsML._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "PERLESMITH TV Tripod Stand-Portable TV Stand for 23-55 Inch LED LCD OLED Flat Screen TVs-Height Adjustable Display Floor TV Stand with VESA 400x400mm"
              price = {59.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/612lAJXcFkL._AC_SL1500_.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Universal TV Stand Base Tabletop TV Stand for 26 to 55 Inch TVs -Height Adjustable TV Base Stand with Tempered Glass Base & Wire Management"
              price = {25.95}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71Ml4u4O59L._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
      <div className="cell-phone__most-wished-container">
        <div className="cell-phone__heading">
          <h1>Most wished for</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "WiFi Projector,VILINICE 5000L Mini Outdoor Movie Projector ,Portable Phone"
              price = {99.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/715l4w-zFUL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR"
              price = {397.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Insignia Smart HD TV - Fire TV Edition"
              price = {169.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51YUcT86d4L._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "DR. J Professional HI-04 Mini Projector Outdoor Movie Projector"
              price = {79.03}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/718A7339wbL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Mini Projector for iPhone, ELEPHAS 2020 WiFi Movie Projector with Synchronize"
              price = {99.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71asgWsMZyL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Philips Hue Play HDMI Sync Box, HDMI 4K Splitter, 4 HDMI in 1 Out"
              price = {1.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61fkf2Q0ppL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR"
              price = {697.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>        
      <div className="cell-phone__most-gifted-container">
        <div className="cell-phone__heading">
          <h1>Most gifted</h1>
        </div>
        <div className="cell-phone__flex-box">
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Roku Premiere | HD/4K/HDR Streaming Media Player"
              price = {37.49}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81wHpn6wPLL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "TCL 32' 3-Series 720p ROKU Smart TV - 32S335"
              price = {128.00}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61ficuy07aL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "All-new Fire TV Cube, hands-free with Alexa and 4K Ultra HD, streaming"
              price = {119.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/41e9eAuFMQL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Mini Projector, PVO Portable Projector for Cartoon, Kids Gift"
              price = {69.99}
              rateNumber = {"234,618"}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61By+PYGkwL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Mdbebbron 120 inch Projection Screen 16:9 HD Foldable Anti-Crease"
              price = {29.99}
              rateNumber = {"234,618"}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81RIoVN1MWL._AC._SR360,460.jpg"
            />
          </div>
          <div className="cell-phone__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Mini Projector, Meer Portable Pico Full Color LED LCD Video Projector"
              price = {56.99}
              rateNumber = {"234,618"}
              rating = {3}
              image = "https://images-na.ssl-images-amazon.com/images/I/51is6bX7nFL._AC._SR360,460.jpg"
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

export default CellPhone;
