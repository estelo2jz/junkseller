import React from 'react';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from './ElectronicsProductTemplate';
import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import '../ElectronicStyles/CameraPhotoVideo.scss';

function CameraPhotoVideo() {
  return (
    <div className="camera-photo-video__container">
      <div className="camera-photo-video__heading">
        <h1>Camera, Photo & Video</h1>
      </div>
      <div className="camera-photo-video__featured-category-container">
        <div className="camera-photo-video__heading">
          <h1>Featured categories</h1>  
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/61NPMBpOU2L._AC_UY218_.jpg"
              alt="Accessories"
            />
            <p>Accessories</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/81T6hx8XDTL._AC_UY218_.jpg"
              alt="Video"
            />
            <p>Video</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/71ZcdiDEU1L._AC_UY218_.jpg"
              alt="Lighting Studio"
            />
            <p>Lightning Studio</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/716JVo5F8oL._AC_UY218_.jpg"
              alt="Video Surveillance"
            />
            <p>Video Surveillance</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/71SeIiJC-WL._AC_UY218_.jpg"
              alt="Binoculars & Scopes"
            />
            <p>Binoculars & Scopes</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/91HnWaCgcuL._AC_UY218_.jpg"
              alt="Bags & Cases"
            />
            <p>Bags & Cases</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/510gNC8PV8L._AC_UY218_.jpg"
              alt="Film Photography"
            />
            <p>Film Photography</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/71tGMtL2Y4L._AC_UY218_.jpg"
              alt="Tripods & Monopods"
            />
            <p>Tripods & Monopods</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/715KblPZchL._AC_UY218_.jpg"
              alt="Underwater Photography"
            />
            <p>Underwater Photography</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/61WEBCKCDWL._AC_UY218_.jpg"
              alt="Falshes"
            />
            <p>Falshes</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51NBMySL3sL._AC_SX184_.jpg"
              alt="Digital Cameras"
            />
            <p>Digital Cameras</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/71HiZaQJzGL._AC_SX180_SY120_QL70_.jpg"
              alt="Lenses"
            />
            <p>Lenses</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71L7Abx808L._AC_SX466_.jpg"
              alt="Simulated Cameras"
            />
            <p>Simulated Cameras</p>
          </div>
          <div className="camera-photo-video__featured-items">
            <img
              src="https://m.media-amazon.com/images/I/81wYdbMAP7L._AC_UY218_.jpg"
              alt="Printers & Scanners"
            />
            <p>Printers & Scanners</p>
          </div>
        </div>
      </div>
      <div className="camera-photo-video__top-rated-container">
        <div className="camera-photo-video__heading">
          <h1>Top rated</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K"
              price = {17.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81axmUuRHrL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Fujifilm Instax Mini Instant Film Twin Pack (White)"
              price = {13.38}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81nkuTnzwVL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Fujifilm Instax Mini Instant Film, 10 Sheets×5 Pack(Total 50 Shoots)"
              price = {36.00}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/510gNC8PV8L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "10'' Ring Light with 50'' Extendable Tripod Stand, Sensyne LED Circle Lights"
              price = {36.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51yb9yuvqJL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision"
              price = {25.98}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61B04f0ALWL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Ring Video Doorbell – 1080p HD video, improved motion detection, easy"
              price = {99.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71vtXgJBagL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Nixplay Smart Digital Picture Frame 10.1 Inch, Share Video Clips"
              price = {139.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81-59aOYNuL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "DJI Mini 2 Fly More Combo – Ultralight Foldable Drone, 3-Axis Gimbal"
              price = {599.00}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71wfsfmD-UL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="camera-photo-video__ads-image">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_ORIGIN_1270534_1388561_US_us_ce_camera_3413668_750x447_en_US.jpg" alt="ads-image" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/2pack/ce_camera_2pack_desktop_amazonbasics.jpg" alt="ads-image" />
      </div>
      <div className="camera-photo-video__heading">
        <h2>Shop by Brand</h2>
      </div>
      <div className="camera-photo-video__brand-category">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_canon.png" alt="brand-image" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_fujifilm.png" alt="brand-image" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_sony.png" alt="brand-image" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1222794_1163159_US_us_ce_camera_brandfarm_3069759_230x80_null_en_US.jpg" alt="brand-image" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_olympus.png" alt="brand-image" />
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/camera/6pack/ce_camera_brand-tile_6pack_nikon.png" alt="brand-image" />
      </div>
      <div className="camera-photo-video__hot-new-container">
        <div className="camera-photo-video__heading">
          <h1>Hot new releases</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate   
              id = {uuid()}
              title = "Viajero 12X50 Monocular Telescope, High Power Starscope Monocular"
              price = {39.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61-6nBr3nWL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "eufy Security, Wi-Fi Video Doorbell Kit"
              price = {89.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61o+xkuIb7L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Hidden Mini Spy Camera with Audio and Video Live Feed WiFi with Cell Phone"
              price = {44.98}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/51Sr2b-rU+L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Blink Outdoor Wireless, Weather Resistant HD Security Camera with 2"
              price = {34.95}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51k8P8BpfbL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Security Camera Outdoor Wireless WiFi, Floodlight Camera HOSAFE Video"
              price = {42.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61-epdndwJL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Security Camera Outdoor, 2 Pack GOAOFOEOI 1080P WiFi Wireless Camera"
              price = {67.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71UDZ7glAAL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="camera-photo-video__recommended-container">
        <div className="camera-photo-video__heading">
          <h1>Recommended for you</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "GoPro HERO8 Black 4K Waterproof Action Camera - Black (Renewed)"
              price = {25.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71UAtd5yS5L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Neewer 50-In-1 Action Camera Accessory Kit Compatible with GoPro"
              price = {29.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81HjyDDLEtL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Kupton Waterproof Housing Case Compatible with GoPro Hero 8 Black"
              price = {15.90}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71lHUpo9nVL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SNAPTAIN S5C WiFi FPV Drone with 1080P HD Camera,Voice Control"
              price = {79.00}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71-LV9vYPmL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "GoPro HERO8 Black — Waterproof Action Camera with Touch Screen"
              price = {299.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/617H15wJYxL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="camera-photo-video__under-container">
        <div className="camera-photo-video__heading">
          <h1>Under $25</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Amazon Basics High-Speed 4K HDMI Cable - 6 Feet"
              price = {8.61}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61pBvlYVPxL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter"
              price = {20.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81ti8lPxEjL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SanDisk 128GB microSDXC UHS-I-Memory-Card for Nintendo-Switch"
              price = {25.29}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/810o-i5jpiL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SanDisk 64GB Ultra microSDXC UHS-I Memory Card with Adapter"
              price = {12.49}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51IEVgCe89L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "PowerBear 4K HDMI Cable 10 ft | High Speed, Braided Nylon & Gold Connectors"
              price = {10.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81bnp9oosVL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SanDisk 32GB Ultra SDHC UHS-I Memory Card - 120MB/s, C10, U1, Full HD"
              price = {8.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81ySKIiDGOL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "USB C to HDMI Cable for Home Office | 6ft 4K@60Hz, uni USB Type C"
              price = {17.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61GhvYaPWtL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="camera-photo-video__best-seller-container">
        <div className="camera-photo-video__heading">
          <h1>Best sellers</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Wyze Cam Smart Home Cameras"
              price = {25.98}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61prs9ArY1L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Wyze Cam Pan 1080p Pan/Tilt/Zoom"
              price = {37.95}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51GTM1f9OwL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "All-new Ring Stick Up Cam HD security camera with two-way talk"
              price = {99.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/714EzDQpKRL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "eufy Security 2K Indoor Cam Pan & Tilt, Plug-in Security Indoor Camera"
              price = {39.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51RAiKC4hgL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical"
              price = {99.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81nUym12AOL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "BEBIRD Ear Wax Removal Endoscope Otoscope, Earwax Remover Tools"
              price = {35.98}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51U4x0g5SmL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Wansview Wireless Security Camera 1080P HD Wansview, WiFi Home"
              price = {29.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61ZZMqjlfSL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>
      <div className="camera-photo-video__featured-deals-container">
        <div className="camera-photo-video__heading">
          <h1>Featured deals</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter"
              price = {99.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81nUym12AOL._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Security Camera Indoor, Goowls 2-Pack 1080p HD 2.4GHz WiFi Plug-in IP Camera for Home Security, Baby/Dog/Pet/Nanny Camera Monitor with Motion Detection Night Vision Two-Way Audio, Works with Alexa"
              price = {33.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61Udqm-Ba1L._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Outdoor Security Camera System Wireless, Solar Battery Powered, 1080p Wirefree Waterproof 2-Way Audio Night Vision w/ PIR Motion Sensor, Support Alexa/Google Assistant/Local SD, Argus Eco+Solar Panel"
              price = {75.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71DCBMF%2BSeL._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "TETHYS Wireless Security Camera 1080P Indoor [Work with Alexa] Pan/Tilt WiFi Smart IP Camera Dome Surveillance System w/Night Vision,Motion Detection,2-Way Audio,Cloud for Home,Business, Baby Monitor"
              price = {22.94}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51M%2Bjm5kJ4L._AC_SL1059_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "TaoTronics Ring Light CL025, 12'' Ring Light with 78'' Tripod Stand, Dimmable LED Light Outer 24W 6500K, USB Charging Port, Carrying Bag, Light Remote Control for YouTube TikTok Live Stream Video"
              price = {67.63}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61OYVYwY24L._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Viajero 12X50 Monocular Telescope, High Power Starscope Monocular with Smartphone Holder & Tripod, Day & Low Night Vision Waterproof Zoom Telescope, BAK4 Prism Dual Focus for Hunting Bird Watching"
              price = {39.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61-6nBr3nWL._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "eufy Security 2K Indoor Cam Pan & Tilt, Plug-in Security Indoor Camera with Wi-Fi, IP Camera, Human & Pet AI, Voice Assistant Compatibility, Motion Tracking, HomeBase Not Required"
              price = {39.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51RAiKC4hgL._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
      <div className="camera-photo-video__lightning-deals-container">
        <div className="camera-photo-video__heading">
          <h1>Lightning deals</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "WiFi Otoscope Ear Wax Removal Kit- KFF 3.9mm HD Visual Ear Camera with 6 LED Light Storage Box, Wireless Ear Scope Endoscope with Eax Wax Remover Tool, Phone Holder for iPhone, Android and iPad"
              price = {28.85}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71UeyJ5i67L._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "(Latest Gen)PatrolMaster 1296P UHD Body Camera with Audio (build-in 64GB), 2 Inch Display, Night Vision, Waterproof, Shockproof, Body Worn Camera with Compact Design, Police Camera for Law Enforcement"
              price = {110.49}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/81QVjjEHXjL._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Byakov 12x42 Binoculars for Adults and Kids, Compact Hunting Binoculars with Clear Weak Light Vision, 18mm Large Eyepiece Binoculars for Bird Watching, Outdoor Sports and Concerts with BAK4 FMC Lens"
              price = {35.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71yRwGfFlxL._AC_SL1500_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Neewer NW-670 TTL Flash Speedlite with LCD Display Kit for Canon DSLR Cameras,Includes:(1)NW-670 Flash,(1)2.4 GHz Wireless Trigger with C1/C3 Cable,(1)Soft/Hard Diffuser+(1)Lens Cap Holder"
              price = {64.59}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71%2BkYbgIquL._AC_SL1001_.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Neewer 8.5ft X 10ft/2.6M X 3M Background Stand Support System with 6ft X 9ft/1.8M X 2.8M Backdrop(White,Black,Green) for Portrait,Product Photography and Video Shooting"
              price = {74.79}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61L39wZqycL._AC_SL1001_.jpg"
            />
          </div>
        </div>
      </div>
      <div className="camera-photo-video__most-wished-container">
        <div className="camera-photo-video__heading">
          <h1>Most wished for</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Victure 1080P FHD Baby Monitor Pet Camera 2.4G Wireless Indoor Home"
              price = {29.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/51kHZ5QIlHL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Anykit Ear Wax Removal Tool, HD Otoscope for Android and PC-NOT"
              price = {26.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61LxWqYnxCL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "YI 1080P Home Security Camera"
              price = {22.49}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/51PinGfn0rL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Carson MicroBrite Plus 60x-120x LED Lighted Zoom Pocket Microscope"
              price = {11.76}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61CLmYGD72L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Spy Camera Charger - Hidden Camera - Premium Pack - Mini Spy Camera"
              price = {36.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/81yQgbkm49L._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "HeimVision PTZ Security Camera Outdoor, 2x2MP Ultra HD Dual Lens"
              price = {59.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61QFi8KopeL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Pet Camera, Conico 1080P Baby Monitor with Sound Motion Detection IR Night"
              price = {99.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/61NHaxeg1jL._AC._SR360,460.jpg"
            />
          </div>
        </div>
      </div>        
      <div className="camera-photo-video__most-gifted-container">
        <div className="camera-photo-video__heading">
          <h1>Most gifted</h1>
        </div>
        <div className="camera-photo-video__flex-box">
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Nooie Baby Monitor, WiFi Pet Camera Indoor, 360-degree Wireless IP Nanny"
              price = {49.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/51eejJiZEzL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Occer 12x25 Compact Binoculars with Clear Low Light Vision"
              price = {35.99}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71aIoTvKaLL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "Binoculars for Adults and Kids, 10x25 Compact Binoculars for Bird"
              price = {24.88}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/71p-bGgJhuL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "NASA Lunar Telescope for Kids – Capable of 90x Magnification"
              price = {49.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/810IhV6aMNL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "12x42 Binoculars for Adults with 18mm Large View Eyepiece & Clear Dim"
              price = {38.86}
              rating = {4}
              image = "https://images-na.ssl-images-amazon.com/images/I/613FtBfcOQL._AC._SR360,460.jpg"
            />
          </div>
          <div className="camera-photo-video__product-card">
            <ElectronicsProductTemplate 
              id = {uuid()}
              title = "SkyGenius 10 x 50 Powerful Binoculars for Adults Durable Full-Size"
              price = {36.99}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/61YaLg-nAlL._AC._SR360,460.jpg"
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

export default CameraPhotoVideo;
