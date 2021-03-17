import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import SportsMenu from '../SportsCategory/SportsMenu';
import '../../styles/Sports.scss';
import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';
import  FourSqaureTemplate from './HomePageComponents/FourSqaureTemplate';
import  FourSqaureTwoTemplate from './HomePageComponents/FourSqaureTwoTemplate';


function Sports() {
  return (
    <div className="products__base">
      <div className="sports__container">
        <div className="sports__container-heading">
          <SportsMenu 
              category0="Athletic Clothing" 
              category1="Exercise & Fitness"
              category2="Hunting & Fishing"
              category3="Golf"
              category4="Fan Shop"
              category5="Leisure Sports & Game Room"
              category6="Sports & Collectibles"
              category7="All Sports & Fitness"
              category8="New Gear Innovations"
            />
        </div>
        <div className="sports__container-flex-grid">
          {/* <div className="sports__container-flex-1">
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={120.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />   
          </div> */}
          <div className="sports__container-flex-1">
            <FourSqaureTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/crosstraining.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/Golf.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/BAGS.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/HuntFish.jpg"
              pathFour = ""
            />
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Strength._CB1535664535_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_FreeWeights._CB1533834449_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Cardio._CB1534437382_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Yoga._CB1533927902_.jpg"
              pathFour = ""
            />
            <FourSqaureTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/RUNNING.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/SOCKS.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/SWIM.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/shefmega/2021Merch/YOGA.jpg"
              pathFour = ""
            />
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Pilates._CB1533834449_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Boxing._CB1533834449_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_SmartFitness._CB1533834449_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Gear._CB1533834449_.jpg"
              pathFour = ""
            />
            {/* <FourSqaureTemplate 
              imageOne = "" 
              pathOne = ""
              imageTwo = ""
              pathTwo = ""
              imageThree = ""
              pathThree = ""
              imageFour = ""
              pathFour = ""
            /> */}
            {/* <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            />
            <CircleFeaturedCategories
              image=""
              title=""
              path=""
            /> */}
          </div>
          <div className="sports__container-flex-1">
          <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
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
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
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
            <SqaureFeatured 
              image = ""
              title = ""
              path = "/"
            />
          </div>
          <div className="sports__container-flex-1">
          <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
            <FirstFeaturedProduct 
              image = ""
              path = ""
            />
          </div>
          <div className="sports__container-flex-1">
            <FourSqaureTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/BaseballSoftball._CB1528478998_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Basketball._CB1528325170_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Football._CB1528478998_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/SportsMedicine._CB1528325171_.jpg"
              pathFour = ""
            />
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Trampolines._CB1533834261_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_TableTennis._CB1533834260_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_OutdoorGames._CB1533834260_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Bowling._CB1533834259_.jpg"
              pathFour = ""
            />
            <FourSqaureTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Racquet._CB1528325170_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Soccer._CB1528325171_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750._CB1528325170_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/More._CB1528325170_.jpg"
              pathFour = ""
            />
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_TableArcadeGames._CB1533834259_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Billiards._CB1533834259_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Darts._CB1533834259_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_PokerCasino._CB1533834258_.jpg"
              pathFour = ""
            />
            {/* <FourSqaureTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/MLB440x300.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/NBA440x300.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/NFL440x300._CB1198675309_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/NHL440x300.jpg"
              pathFour = ""
            />
            <FourSqaureTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/NCAA440x300._CB514126732_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/Nascar440x300._CB1507239649_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/PGA440x300._CB1507239649_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/img17/collectibles/content-grid/MoreSports440x300._CB1507239648_.jpg"
              pathFour = ""
            /> */}
            {/* <FourSqaureTemplate 
              imageOne = "" 
              pathOne = ""
              imageTwo = ""
              pathTwo = ""
              imageThree = ""
              pathThree = ""
              imageFour = ""
              pathFour = ""
            /> */}
          </div>
          <div className="sports__container-flex-1">
          <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
            <SecondFeaturedProduct
              image = ""
              path = ""             
             />
          </div>
          <div className="sports__container-flex-1">
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Archery._CB1533857568_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_TrailCameras._CB1533857569_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Airsoft._CB1533857568_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_HuntingAccessories._CB1533857568_.jpg"
              pathFour = ""
            />
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_GolfBalls._CB1533834361_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_GolfBags._CB1533834361_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Sports/XCM_Manual_1169465_204213_CALEO_750x750_Sports_XCM_Manual_1169465_us_sports_caleo_750x750_1_1556552471_jpg.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/Sports/simDriverHomePage.png"
              pathFour = ""
            />
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Optics._CB1533857568_.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Scopes._CB1533857569_.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Knives._CB1533857568_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Cases._CB1533857568_.jpg"
              pathFour = ""
            />
            <FourSqaureTwoTemplate 
              imageOne = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Sports/XCM_Manual_1169465_204213_CALEO_750x750_Sports_XCM_Manual_1169465_us_sports_caleo_750x750_2_1556552471_jpg.jpg" 
              pathOne = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Sports/XCM_Manual_1170850_bushnell_750x750_Sports_XCM_Manual_1170850_us_sports_bushnell_750x750_1557809717_jpg.jpg"
              pathTwo = ""
              imageThree = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Equipment._CB1533834361_.jpg"
              pathThree = ""
              imageFour = "https://images-na.ssl-images-amazon.com/images/G/01/sports/Harmony_NavBlock_750x750_Accessories._CB1533834362_.jpg"
              pathFour = ""
            />
          </div>
          <div className="sports__container-flex-1">
          <TwoProductTemplate 
              titleOne = "Wilson 2021 A2K 1795 w/SuperSkin (IF) Right Hand Throw Baseball Glove - 12', Black/Black SS"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81F4KySnH9L._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "379.95"
              titleTwo = "Etekcity Lantern Camping Lantern Battery Powered Lights for Power Outages, Home Emergency, Camping, Hiking, Hurricane, A Must Have Camping Accessories"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/714G8MawTYL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "24.25"
            />
            <TwoProductTemplate 
              titleOne = "PRIMASOLE Folding Yoga Travel Pilates Mat"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/41G8-Z9c3lL.jpg"
              pathOne = ""
              priceOne = "10.19"
              titleTwo = "Yes4All EPP Exercise Foam Roller – Extra Firm High Density Foam Roller – Best for Flexibility and Rehab"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/5162dBnMyfL.jpg"
              pathTwo = ""
              priceTwo = "9.89"
            />
            <TwoProductTemplate 
              titleOne = "Yes4All Foam Exercise Pad/Versatile Soft Balance Pads for Physical Therapy and Fitness Workout Training, Suitable for Home, Work, Rehabilitation"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71XKqgJLxeL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "16.99"
              titleTwo = "ENERGIZER LED Tactical Flashlight, IPX4 Water Resistant, Super Bright, Heavy Duty Metal Body, Built For Camping, Outdoors, Emergency, Batteries Included"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81Ug4HmgGPL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "13.89"
            />
            <TwoProductTemplate 
              titleOne = "Energizer High-Powered LED Headlamp Flashlights, IPX4 Water Resistant, Super Bright LED, Multiple"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/31Lr8gZwcuL.jpg"
              pathOne = ""
              priceOne = "21.87"
              titleTwo = "Eveready 360 LED Camping Lantern, IPX4 Water Resistant, Super Bright, 100 Hour Run-time, Battery"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/41Y6Pl82D6L.jpg"
              pathTwo = ""
              priceTwo = "19.04"
            />
            <TwoProductTemplate 
              titleOne = "Simple Modern NCAA unisex-adult Simple Modern NCAA Licensed 30oz Tumbler"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/413ZojY7qPL.jpg"
              pathOne = ""
              priceOne = "20.24"
              titleTwo = "Portzon Set of 2 Neoprene Dumbbell Hand Weights, Anti-Slip, Anti-roll"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/41zrk3iHDeL.jpg"
              pathTwo = ""
              priceTwo = "22.51"
            />
            <TwoProductTemplate 
              titleOne = "Hover Hoverboard Electric Scooter Blue"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71a9bQsHXzL._AC_SL1500_.jpg"
              pathOne = "Yes4All Adjustable Barbell Squat Rack – Standard and Premium Options Available"
              priceOne = "199.99"
              titleTwo = ""
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71DHEjWDHIL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "152.95"
            />
            <TwoProductTemplate 
              titleOne = "MUSE S: The Brain Sensing Headband - Overnight Sleep Tracker & Meditation Headset Device - Multi Sensor Monitor with Responsive Sound Feedback Guidance"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81TQAIMkhkL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "299.99"
              titleTwo = "SereneLife Trampoline with Net – 10ft ASTM Approved Trampoline with Net Enclosure – Stable, Strong Kids and Adult Trampoline – Outdoor"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/91K9vv7T-zL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "274.20"
            />
            <TwoProductTemplate 
              titleOne = "MUSE 2: The Brain Sensing Headband - Meditation Tracker Multi Sensor Headset Device - Responsive Sound Feedback for Brain Wave, Heart, Body & Breath Activity"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71KKItClMXL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "219.99"
              titleTwo = "Yes4All Adjustable Dumbbells 40, 50, 52.5, 60, 105 to 200 lbs with Connector Options"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81GZjjA0dKL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "219.99"
            />
            <TwoProductTemplate 
              titleOne = "SWAGTRON App-Enabled Swagger 5 Boost Commuter Electric Scooter with Upgraded 300W Motor"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71Rx-9hvApL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "290.90"
              titleTwo = "Yes4All Adjustable Weight Bench with Foldable Design for Full Body Workout"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61A1bH%2B9wUL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "99.03"
            />
            <TwoProductTemplate 
              titleOne = "Coastrail Outdoor Folding Rocking Chair with Detachable Rockers 2 in 1 Rocking Camping Chair"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71bjlLJ0CnL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "71.99"
              titleTwo = "Yes4All Non-Slip/Wooden Plyo Box, Easy-to-Assemble Plyometric Jump Box for Jumping Trainers, Workout Step Platform, Crossfit Equipment for Fitness, Box-Squats and Steps-up, Multi Sizes"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71BT4fW9gUL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "48.88"
            />
            <TwoProductTemplate 
              titleOne = "Flow Surf Skates Stub 29' Surf Skateboard with Carving Truck, Multi-Color"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71ChSDqR52L._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "143.95"
              titleTwo = "Portzon Swim Goggles, Swimming Goggles for Adult Men Women Youth Kids Child, Silicone Nose Bridge, Clear Vision, Easy-Adjustable Strap, UV Protection, Anti-Fog, No Leaking"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71oHQmU4JJL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "15.98"
            />
          </div>
          <div className="sports__container-flex-1">
          <TwoProductTemplateTwo 
              titleOne = "Lifeline Pull Up Revolution Assistance System to Improve Arm, Improved."
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71XGYDYx3dL._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "28.48"
              titleTwo = "Nikon Coolshot 20i GII Golf Laser Slope Rangefinder"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61JFG60eI8L._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "199.95"
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
          <div className="sports__container-flex-1">
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

export default Sports;
