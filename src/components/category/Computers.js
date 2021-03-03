import React from 'react';
import { uuid } from 'uuidv4';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
// import FeaturedCategoryTemplate from './FeaturedCategoryTemplate';
import ComputersMenu from '../ComputerCategory/ComputersMenu';
import '../../styles/Electronics.scss';

import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';

function Computers() {
  return (
    <div className="products__base">
      <div className="electronics__container">
        <div className="electronics__container-heading">
          <ComputersMenu
            category0="Computers, Tablets & PC"
            category1="Monitors"
            category2="Accessories"
            category3="Networking"
            category4="Hard Drives & Storage"
            category5="Computer Parts & Components"
          />
        </div>
        <div className="electronics__container-flex-grid">
          <div className="electronics__container-flex-1">
            <ElectronicsProductTemplate
              id={uuid()}
              title="Lenovo Legion 5 Gaming Laptop, 15.6' FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black"
              price={996.60}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81w%2B3k4U8PL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB"
              price={949.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71vFKBpKakL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="ASUS TUF Gaming VG27VH1B 27” Curved Monitor, 1080P Full HD"
              price={268.91}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81i6G0uoctL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="ROG Strix GA15DH Gaming Desktop PC, AMD Ryzen 7 3800X, GeForce"
              price={1829.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81mIQ527wEL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Blade Hawks RGB Gaming Mouse Pad, LED Soft Extra Extended Large Mouse"
              price={16.60}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51ybekXvQLL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Lenovo Flex 5 14' 2-in-1 Laptop, 14.0' FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
              price={671.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit"
              price={39.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC._SR360,460.jpg"
            />
            <ElectronicsProductTemplate
              id={uuid()}
              title="MSI GS75 STEALTH-242 17.3-inch 144Hz FHD - Intel i7-9750H 6-Core - NVIDIA RTX 2080 Max Q 8GB - 32GB DDR4 - 1TB Solid State Drive - Win10H"
              price={1849.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/513IMp-dM8L._AC_SL1000_.jpg"
            />
          </div>
          <div className="electronics__heading">
            <p>Categories you might want to explore.</p>
          </div>
          <div className="electronics__container-flex-1">
            <CircleFeaturedCategories
               image = "https://www.designfreelogoonline.com/wp-content/uploads/2019/02/00580-Family-01.png"
               title = "Family"
               path = "/toys&kids&baby/family"
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/41SjEa53NXL.jpg"
               title = "Events & Party"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71B-oQ1qHLL._AC_UY218_.jpg"
               title = "Lawn Mowers"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/91ZIAl67VlL._AC_UL320_.jpg"
               title = "Plants & Seeds"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/81j27jS95+L._AC_UL320_.jpg"
               title = "Game Room"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/41YN1wCSx0L._AC_SX184_.jpg"
               title = "Voice Assistants"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/61Gw2x7RrHL._AC_UL320_.jpg"
               title = "Sofas"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/81muiNoE-3L._AC._SR360,460.jpg"
               title = "Fish Food"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71Y9F8tJ8FL._AC_UY218_.jpg"
               title = "CPUs"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/61ie+mpdYPL._QL65_AC_UL640_.jpg"
               title = "Shoe's"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/41yB0kHGcSL.jpg"
               title = "Artificial FLower"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://images-na.ssl-images-amazon.com/images/I/41Y15o6btZL.jpg"
               title = "Streaming Media"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/91YFsh7mNqL._AC_UL320_.jpg"
               title = "Toys"
               path = ""
             />
            <CircleFeaturedCategories
               image = "https://m.media-amazon.com/images/I/71UsPriKaWL._AC_UL320_.jpg"
               title = "Mini Speaker's"
               path = ""
             />
          </div>
          <div className="electronics__container-flex-1">
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/91MWQtTH4bL._AC_UY218_.jpg"
              title = "Motherboards"
              path = "/"
            />
            <MultiSqaure 
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51geOOpItVL.jpg"
              titleOne = "Gaming Monitors"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC._SR360,460.jpg"
              titleTwo = "2 in 1"
              pathTwo = ""
              imageThree = "https://m.media-amazon.com/images/I/71fVpfx5oiL._AC_UL320_.jpg"
              titleThree = "Gaming PCs"
              pathThree = ""
              imageFour = "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY218_.jpg"
              titleFour = "Gaming Mouse"
              pathFour = ""
            />
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/91wc8+M4jtL._AC_UY218_.jpg"
              title = "Memory"
              path = "/"
            />
            <SqaureFeatured 
              image = "https://images-na.ssl-images-amazon.com/images/I/31qAlOX2ydL.jpg"
              title = "Gaming Laptops"
              path = "/"
            />
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/61LfuUIynRL._AC_UY218_.jpg"
              title = "Routers"
              path = "/"
            />
            <MultiSqaure 
              imageOne = "https://m.media-amazon.com/images/I/61S1GmNcK-L._AC_UY218_.jpg"
              titleOne = "Mini PC"
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/918idkuRlzL._AC_SL1500_.jpg"
              titleTwo = "Apple iMac"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/I/71dNZ4zZk4L._AC_SL1500_.jpg"
              titleThree = "Fire Tablet"
              pathThree = ""
              imageFour = "https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY218_.jpg"
              titleFour = "Headset"
              pathFour = ""
            />
            <SqaureFeatured 
              image = "https://m.media-amazon.com/images/I/71PyN--4a6L._AC_UY218_.jpg"
              title = "GPU's"
              path = "/"
            />
          </div>
          <div className="electronics__heading">
            <p>similar products you browse.</p>
          </div>
          <div className="electronics__container-flex-1">
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41dpAMv2H4L._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/21U7PiRUz7L._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41rQ-edna7L._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41lTaujYzwL._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/51lLkh-DRlL._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41aDb3t4tHL._AC_SX184_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/91S1PIX+yWL._AC._SR360,460.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/71f0QWSSKOL._AC._SR360,460.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/61lgxCi9b7L._AC._SR360,460.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/61Gm1upecsL._AC_UL200_SR200,200_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/61hFVa5my8L._AC_UL200_SR200,200_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/81ABwgAl-gL._AC_UL200_SR200,200_.jpg"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/91-WKoE6sTL._AC_UL200_SR200,200_.jpg"
              path = ""
            />
          </div>
          <div className="electronics__heading">
            <p>today's deal.</p>
          </div>
          <div className="electronics__container-flex-1">
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61LoIGYKmVL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/81SpC-0BjdL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71HI%2BSmylNL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/914pic6PuAL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/716xtsOgfHL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/91ekP94ki4L._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/81eQIlL8V9L._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71P3chRzgNL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/718sn7oOcfL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/51%2BfvgO-JwL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71z7ztyH1LL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/7143lurIrJL._AC_UL200_SR200,200_.jpg"
              path = ""             
             />
          </div>
          <div className="electronics__container-flex-1">
            <TwoProductTemplate 
              titleOne = "ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/810BY5U9baL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "199.99"
              titleTwo = "2021 Newest SuperBox S2 PRO with New Powerful 2GB RAM+16GB Quad"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81+P39WPtML._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "299.99"
            />
            <TwoProductTemplate 
              titleOne = "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "899.46"
              titleTwo = "SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81ti8lPxEjL._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "19.90"
            />
            <TwoProductTemplate 
              titleOne = "Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "384.99"
              titleTwo = "2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71vFKBpKakL._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "999.99"
            />
            <TwoProductTemplate 
              titleOne = "NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61rowppY2TL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "199.99"
              titleTwo = "Vetroo V5 CPU Air Cooler w/ 5 Heat Pipes 120mm PWM Processor Fan Intel"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/711L7ApyL1L._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "34.59"
            />
            <TwoProductTemplate 
              titleOne = "Asus Prime Z390-A Motherboard LGA1151 (Intel 8th And 9th Gen) ATX DDR4 DP HDMI M.2 USB 3.1 Gen2 Gigabit LAN"
              imageOne = "https://m.media-amazon.com/images/I/71OmavzkW8L._AC_UY218_.jpg"
              pathOne = ""
              priceOne = "174.98"
              titleTwo = "Intel Core i9-10850K Desktop Processor 10 Cores up to 5.2 GHz Unlocked LGA1200 (Intel 400 Series chipset) 125W"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61zpi0MigBL._AC_SL1080_.jpg"
              pathTwo = ""
              priceTwo = "409.99"
            />
            <TwoProductTemplate 
              titleOne = "AMD Ryzen 7 2700X Processor with Wraith Prism LED Cooler -"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61zovsZF-QL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "316.99"
              titleTwo = "TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "56.99"
            />
            <TwoProductTemplate 
              titleOne = "Tablet 10 Inch Android 9.0 3G Phone Tablets with 32GB Storage Dual Sim"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61NfcHUmxBL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "109.99"
              titleTwo = "Anker 4-Port USB 3.0 Hub, Ultra-Slim Data USB Hub with 2 ft Extended Cable"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51scO1VOfIL._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "12.99"
            />
            <TwoProductTemplate 
              titleOne = "iBUYPOWER TraceMR 150i Gaming Desktop Computer, Intel Core i3-"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61imhCrP3HL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "659.99"
              titleTwo = "Elgato Stream Deck - Live Content Creation Controller with 15"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "149.99"
            />
            <TwoProductTemplate 
              titleOne = "ARCTIC MX-4 (4 Grams) - Thermal Compound Paste, Carbon Based High"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51vSpWaK4IL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "6.89"
              titleTwo = "Portable Monitor - GTEK 15.6 Inch IPS Full HD 1920x1080 Screen with Protector"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71nHZHIE6mL._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "132.87"
            />
            <TwoProductTemplate 
              titleOne = "Noctua NH-D15 chromax.Black, Dual-Tower CPU Cooler"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/91t48GBv8TL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "99.95"
              titleTwo = "Foldable Bluetooth Keyboard with Numeric Keypad - Samsers Full Size"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/719B1Za6cSL._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "45.99"
            />
            <TwoProductTemplate 
              titleOne = "Roku Premiere | HD/4K/HDR Streaming Media Player, Simple"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81wHpn6wPLL._AC._SR360,460.jpg"
              pathOne = ""
              priceOne = "34.01"
              titleTwo = "upHere 5-Pack 120mm Silent Intelligent Control RGB Fan Adjustable"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71oZZCg585L._AC._SR360,460.jpg"
              pathTwo = ""
              priceTwo = "36.99"
            />
          </div>
          <div className="electronics__container-flex-1">
            <TwoProductTemplateTwo 
              titleOne = "AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61vGQNUEsGL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "372.01"
              titleTwo = "Western Digital 1TB WD Blue PC Hard Drive - 7200 RPM Class, SATA 6 Gb/s, , 64 MB Cache, 3.5"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71TtcpkXYrL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "39.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Corsair RMX Series, RM850x, 850 Watt, 80+ Gold Certified, Fully Modular Power Supply"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71dj%2B5GQwEL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "144.99"
              titleTwo = "Elegoo EL-CP-004 120pcs Multicolored Dupont Wire 40pin Male to Female, 40pin Male to Male"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81lyrrBqMIL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "6.98"
            />
            <TwoProductTemplateTwo 
              titleOne = "MSI Arsenal Gaming AMD Ryzen 2ND and 3rd Gen AM4 M.2 USB 3 DDR4 DVI HDMI Crossfire ATX"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/914pic6PuAL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "114.99"
              titleTwo = "Western Digital 500GB WD Blue SN550 NVMe Internal SSD - Gen3 x4 PCIe 8Gb/s, M.2 2280"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71RTRS3oAjL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "59.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "NZXT H510 - CA-H510B-W1 - Compact ATX Mid-Tower PC Gaming Case - Front I/O USB Type-C"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71QSKpbzlQL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "69.99"
              titleTwo = "HP 24-inch All-in-One Desktop Computer, AMD Athlon Silver 3050U Processor, 8 GB RAM, 256"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81gjltwz-qL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "499.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Skytech Archangel Gaming Computer PC Desktop – Ryzen 5 3600 3.6GHz, GTX 1660 Super 6G"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81gqqKQVkAL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "1224.99"
              titleTwo = "New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71KR2i6-WaL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "1679.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "HP EliteDesk 800 G2 Desktop Mini Business PC, Intel Quad-Core i5-6500T up to 3.1G,16G"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61vB30otClL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "268.99"
              titleTwo = "iBUYPOWER Gaming PC Computer Desktop 1000iV2 (Intel i7-10700F 2.9GHz, NVIDIA"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71gJbGIYWWL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "1849.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Skytech Chronos Mini Gaming PC Desktop - AMD Ryzen 3 3100, NVIDIA GTX 1660 6GB, 16GB"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81ULA2wYPcL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "899.99"
              titleTwo = "ASUS 24' 1080P Gaming Monitor (VG248QG) - Full HD, 165Hz (Supports 144Hz), 0.5ms, Extreme"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81MLtyTxeAL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "199.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player; High Performance, Dolby Vision"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61rowppY2TL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "199.99"
              titleTwo = "Logitech C-U0007 Unifying Receiver for Mouse and Keyboard Works with Any Logitech Product"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61njGLmoVEL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "11.65"
            />
            <TwoProductTemplateTwo 
              titleOne = "ASUS ZenScreen MB16ACE 15.6” Portable USB Type-C Monitor Full HD (1920 x 1080) IPS Eye"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81TmGVIFmDL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "169.99"
              titleTwo = "TP-Link Deco Mesh WiFi System(Deco M5) –Up to 5,500 sq. ft. Whole Home Coverage and 100+"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/611EW6z8sZL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "169.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Motorola MB8600 DOCSIS 3.1 Cable Modem, 6 Gbps Max Speed. Approved for Comcast Xfinity"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71FUBl-78lL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "149.99"
              titleTwo = "TP-Link AC1750 WiFi Extender (RE450), PCMag Editor's Choice, Up to 1750Mbps, Dual Band WiFi"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51Ll-YzawNL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "69.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "BenQ 24 Inch IPS Monitor | 1080P | Proprietary Eye-Care Tech | Ultra-Slim Bezel | Adaptive"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/712ZOa8Ze2L._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "119.99"
              titleTwo = "TP-Link AC1900 Smart WiFi Router (Archer A8) -High Speed MU-MIMO Wireless Router, Dual"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61NSuBZzm7L._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "69.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Apple TV 4K (64GB, Latest Model)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51Y-Dulc3bL._AC_UL200_SR200,200_.jpg"
              pathOne = ""
              priceOne = "199.99"
              titleTwo = "Roku Smart Soundbar, 4K/HD/HDR Streaming Media Player & Exceptional Audio Includes Roku"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71059Su8jlL._AC_UL200_SR200,200_.jpg"
              pathTwo = ""
              priceTwo = "149.99"
            />
          </div>
          {/* <div className="electronics__heading">
            <p>Popular Items</p>
          </div>
          <div className="electronics__container-flex-1">
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
            <MultiSqaure 
              imageOne = ""
              titleOne = ""
              pathOne = ""
              imageTwo = ""
              titleTwo = ""
              pathTwo = ""
              imageThree = ""
              titleThree = ""
              pathThree = ""
              imageFour = ""
              titleFour = ""
              pathFour = ""
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Computers;
