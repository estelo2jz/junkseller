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
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
            <TwoProductTemplateTwo 
              titleOne = ""
              imageOne = ""
              pathOne = ""
              priceOne = ""
              titleTwo = ""
              imageTwo = ""
              pathTwo = ""
              priceTwo = ""
            />
          </div>
          <div className="electronics__heading">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Computers;
