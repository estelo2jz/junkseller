import './App.css';
import './styles/main.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewNav from './components/SidebarData';
import Header from './components/Header';
import { FooterContainer } from './components/containers/Footer';
import Checkout from './components/Checkout';

import Electronics from './components/category/Electronics';
import Computers from './components/category/Computers';
import Clothing from './components/category/Clothing';
import Jewelry from './components/category/Jewelry';
import AutomotiveIndustrial from './components/category/AutomotiveIndustrial';
import BeautyHealth from './components/category/BeautyHealth';
import FoodGrocery from './components/category/FoodGrocery';
import Handmade from './components/category/Handmade';
import HomeGardenTools from './components/category/HomeGardenTools';
import Outdoors from './components/category/Outdoors';
import PetSupplies from './components/category/PetSupplies';
import SmartHome from './components/category/SmartHome';
import Sports from './components/category/Sports';
import ToysKidsBaby from './components/category/ToysKidsBaby';


import ElectronicsMenu from './components/ElectricCategory/ElectronicsMenu';
import ComputersMenu from './components/ComputerCategory/ComputersMenu';
import AutomotiveMenu from './components/AutomotiveCategory/AutomotiveMenu';
import BeautyHealthMenu from './components/BeautyHealthCategory/BeautyHealthMenu';
import FoodGroceryMenu from './components/FoodGroceryCategory/FoodGroceryMenu';
import HandmadeMenu from './components/HandmadeCategory/HandmadeMenu';
import HomeGardenToolsMenu from './components/HomeGardenToolsCategory/HomeGardenToolsMenu';
import OutdoorMenu from './components/OutdoorsCategory/OutdoorsMenu';
import PetSuppliesMenu from './components/PetSuppliesCategory/PetSuppliesMenu';
import SmartHomeMenu from './components/SmartHomeCategory/SmartHomeMenu';
import SportMenu from './components/SportsCategory/SportsMenu';
import ToysKidsBabyMenu from './components/ToysKidsBabyCategory/ToysKidsBabyMenu';
import ClothingMenu from './components/ClothingCategory/ClothingMenu';
import JewelryMenu from './components/JewelryCategory/JewelryMenu';

// ELECTRONICS & COMPUTERS CATEGORY
import TVVideo from './components/ElectricCategory/Category/TVVideo';
import HomeAudioTheater from './components/ElectricCategory/Category/HomeAudioTheater';
import CameraPhotoVideo from './components/ElectricCategory/Category/CameraPhotoVideo';
import CellPhone from './components/ElectricCategory/Category/CellPhone';
import Headphones from './components/ElectricCategory/Category/Headphones';
import VideoGames from './components/ElectricCategory/Category/VideoGames';
import BluetoothWireless from './components/ElectricCategory/Category/BluetoothWireless';
import CarElectronics from './components/ElectricCategory/Category/CarElectronics';
import MusicalInstruments from './components/ElectricCategory/Category/MusicalInstruments';
import WearableTechnology from './components/ElectricCategory/Category/WearableTechnology';
import ElectronicsBase from './components/ElectricCategory/Category/ElectronicsBase';

// Computer Components
import ComputerTablet from './components/ComputerCategory/Category/Tablet';
import ComputerMonitors from './components/ComputerCategory/Category/Monitors';
import ComputerAccessories from './components/ComputerCategory/Category/Accessories';
import ComputerNetworking from './components/ComputerCategory/Category/Networking';
import ComputerHardDrivesStorage from './components/ComputerCategory/Category/DrivesStorage';
import ComputerPartsComponents from './components/ComputerCategory/Category/PartsComponents';
import ComputerSoftware from './components/ComputerCategory/Category/Software';




// Apparel Components
import ClothingApparel from './components/ClothingCategory/Category/Apparel';
import ClothingPantsJeans from './components/ClothingCategory/Category/PantsJeans';
import ClothingHoodiesSweaters from './components/ClothingCategory/Category/HoodiesSweaters';
import ClothingJackets from './components/ClothingCategory/Category/Jackets';
import ClothingHatsBeanies from './components/ClothingCategory/Category/HatsBeanies';
import ClothingBackpacks from './components/ClothingCategory/Category/Backpacks';
import ClothingSocks from './components/ClothingCategory/Category/Socks';

// Jewelry Components
import JewelryNecklace from './components/JewelryCategory/Category/JewelryNecklace';
import JewelryEarrings from './components/JewelryCategory/Category/JewelryEarrings';
import JewelryWatchz from './components/JewelryCategory/Category/JewelryWatchz';
import JewelryPendant from './components/JewelryCategory/Category/JewelryPendants';
import PremiumJewelry from './components/JewelryCategory/Category/PremiumJewelry';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <NavBar />
            {/* <Header /> */}
            <Checkout />
          </Route>
          <Route path="/login">
            {/* <Header /> */}
            <NavBar />
            <h1>Login</h1>
          </Route>
          <Route exact path="/">
            {/* <Header /> */}
            <NavBar />
            <Home />
          </Route>
          <Route path="/electronics" 
            exact
            component={Electronics}
          >
            <NavBar />
            <Electronics></Electronics>
          </Route>
          <Route path="/electronics/tvvideo" exact component={TVVideo}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <TVVideo />
          </Route>
          <Route path="/electronics/homeaudiotheater" exact component={HomeAudioTheater}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <HomeAudioTheater />
          </Route>
          <Route path="/electronics/cameraphotovideo" exact component={CameraPhotoVideo}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <CameraPhotoVideo />
          </Route>
          <Route path="/electronics/cellphones" exact component={CellPhone}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <CellPhone />
          </Route>
          <Route path="/electronics/headphones" exact component={Headphones}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <Headphones />
          </Route>
          <Route path="/electronics/VideoGames" exact component={VideoGames}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <VideoGames />
          </Route>
          <Route path="/electronics/bluetoothwireless" exact component={BluetoothWireless}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <BluetoothWireless />
          </Route>
          <Route path="/electronics/carelectronics" exact component={CarElectronics}>
            <NavBar />
            <ElectronicsMenu
              category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <CarElectronics />
          </Route>
          <Route path="/electronics/musicalinstruments" exact component={MusicalInstruments}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <MusicalInstruments />
          </Route>
          <Route path="/electronics/cameraphotovideo" exact component={CameraPhotoVideo}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <CameraPhotoVideo />
          </Route>
          <Route path="/electronics/wearabletechnology" exact component={WearableTechnology}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <WearableTechnology />
          </Route>
          <Route path="/electronics/electronicsbase" exact component={ElectronicsBase}>
            <NavBar />
            <ElectronicsMenu
               category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless "
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
            />
            <ElectronicsBase />
          </Route>
          


          <Route path="/computers" exact component={Computers}>
            <NavBar />
            <Computers></Computers>
          </Route>
          <Route path="/computers/tablet" exact component={ComputerTablet}>
            <NavBar />
            <ComputersMenu
              category0="Computers, Tablets & PC"
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Hard Drives & Storage"
              category5="Computer Parts & Components"
            />
            <ComputerTablet />
          </Route>
          <Route path="/computers/monitors" exact component={ComputerMonitors}>
            <NavBar />
            <ComputersMenu
              category0="Computers, Tablets & PC"
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Hard Drives & Storage"
              category5="Computer Parts & Components"
            />
            <ComputerMonitors />
          </Route>
          <Route path="/computers/accessories" exact component={ComputerAccessories}>
            <NavBar />
            <ComputersMenu
              category0="Computers, Tablets & PC"
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Hard Drives & Storage"
              category5="Computer Parts & Components"
            />
            <ComputerAccessories />
          </Route>
          <Route path="/computers/networking" exact component={ComputerNetworking}>
            <NavBar />
            <ComputersMenu
              category0="Computers, Tablets & PC"
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Hard Drives & Storage"
              category5="Computer Parts & Components"
            />
            <ComputerNetworking />
          </Route>
          <Route path="/computers/harddrives&storage" exact component={ComputerHardDrivesStorage}>
            <NavBar />
            <ComputersMenu
              category0="Computers, Tablets & PC"
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Hard Drives & Storage"
              category5="Computer Parts & Components"
            />
            <ComputerHardDrivesStorage />
          </Route>
          <Route path="/computers/parts&components" exact component={ComputerPartsComponents}>
            <NavBar />
            <ComputersMenu
              category0="Computers, Tablets & PC"
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Hard Drives & Storage"
              category5="Computer Parts & Components"
            />
            <ComputerPartsComponents />
          </Route>
          <Route path="/computers/software" exact component={ComputerSoftware}>
            <NavBar />
            <ComputersMenu
              category0="Computers, Tablets & PC"
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Hard Drives & Storage"
              category5="Computer Parts & Components"
            />
            <ComputerSoftware />
          </Route>



          <Route path="/beauty&health" exact component={BeautyHealth}>
            <NavBar />
            <BeautyHealth />
          </Route>
          <Route path="/food&grocery" exact component={FoodGrocery}>
            <NavBar />
            <FoodGrocery />
          </Route>
          <Route path="/home&garden&tools" exact component={HomeGardenTools}>
            <NavBar />
            <HomeGardenTools />
          </Route>
          <Route path="/handmade" exact component={Handmade}>
            <NavBar />
            <Handmade />
          </Route>
          <Route path="/outdoors" exact component={Outdoors}>
            <NavBar />
            <Outdoors />
          </Route>
          <Route path="/pet&supplies" exact component={PetSupplies}>
            <NavBar />
            <PetSupplies />
          </Route>
          <Route path="/smarthome" exact component={SmartHome}>
            <NavBar />
            <SmartHome />
          </Route>
          <Route path="/toys&kids&baby" exact component={ToysKidsBaby}>
            <NavBar />
            <ToysKidsBaby />
          </Route>
          <Route path="/sports" exact component={Sports}>
            <NavBar />
            <Sports />
          </Route>
          <Route path="/automotive&industrial" exact component={AutomotiveIndustrial}>
            <NavBar />
            <AutomotiveIndustrial />
          </Route>
          


























          {/* Clothing COMPONENTS */}
          <Route path="/clothing" exact component={Clothing}>
            <NavBar />
            <Clothing />
          </Route>
          <Route path="/clothing/shirts&tees" exact component={ClothingApparel}>
            <NavBar />
            <ClothingMenu
              category0="Shirts & Tees"
              category1="Pants & Jeans"
              category2="Hoodies & Sweaters"
              category3="Jackets"
              category4="Hats & Beanies"
              category5="Backpacks"
              category6="Socks"
            />
            <ClothingApparel />
          </Route>
          <Route path="/clothing/pants&jeans" exact component={ClothingPantsJeans}>
            <NavBar />
            <ClothingMenu
              category0="Shirts & Tees"
              category1="Pants & Jeans"
              category2="Hoodies & Sweaters"
              category3="Jackets"
              category4="Hats & Beanies"
              category5="Backpacks"
              category6="Socks"
            />
            <ClothingPantsJeans />
          </Route>
          <Route path="/clothing/hoodies&sweaters" exact component={ClothingHoodiesSweaters}>
            <NavBar />
            <ClothingMenu
              category0="Shirts & Tees"
              category1="Pants & Jeans"
              category2="Hoodies & Sweaters"
              category3="Jackets"
              category4="Hats & Beanies"
              category5="Backpacks"
              category6="Socks"
            />
            <ClothingHoodiesSweaters />
          </Route>
          <Route path="/clothing/jackets" exact component={ClothingJackets}>
            <NavBar />
            <ClothingMenu
              category0="Shirts & Tees"
              category1="Pants & Jeans"
              category2="Hoodies & Sweaters"
              category3="Jackets"
              category4="Hats & Beanies"
              category5="Backpacks"
              category6="Socks"
            />
            <ClothingJackets />
          </Route>
          <Route path="/clothing/hats&beanies" exact component={ClothingHatsBeanies}>
            <NavBar />
            <ClothingMenu
              category0="Shirts & Tees"
              category1="Pants & Jeans"
              category2="Hoodies & Sweaters"
              category3="Jackets"
              category4="Hats & Beanies"
              category5="Backpacks"
              category6="Socks"
            />
            <ClothingHatsBeanies />
          </Route>
          <Route path="/clothing/backpacks" exact component={ClothingBackpacks}>
            <NavBar />
            <ClothingMenu
              category0="Shirts & Tees"
              category1="Pants & Jeans"
              category2="Hoodies & Sweaters"
              category3="Jackets"
              category4="Hats & Beanies"
              category5="Backpacks"
              category6="Socks"
            />
            <ClothingBackpacks />
          </Route>
          <Route path="/clothing/socks" exact component={ClothingSocks}>
            <NavBar />
            <ClothingMenu
              category0="Shirts & Tees"
              category1="Pants & Jeans"
              category2="Hoodies & Sweaters"
              category3="Jackets"
              category4="Hats & Beanies"
              category5="Backpacks"
              category6="Socks"
            />
            <ClothingSocks />
          </Route>


          {/* Jewelry COMPONENTS */}
          <Route path="/jewelry" exact component={Jewelry}>
            <NavBar />
            <Jewelry />
          </Route>
          <Route path="/jewelry/necklaces" exact component={JewelryNecklace}>
            <NavBar />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <JewelryNecklace />
          </Route>
          <Route path="/jewelry/watchs" exact component={JewelryWatchz}>
            <NavBar />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <JewelryWatchz />
          </Route>
          <Route path="/jewelry/earrings" exact component={JewelryEarrings}>
            <NavBar />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <JewelryEarrings />
          </Route>
          <Route path="/jewelry/pendants" exact component={JewelryPendant}>
            <NavBar />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <JewelryPendant />
          </Route>
          {/* <Route path="/jewelry/premiumjewelries" exact component={PremiumJewelry}>
            <NavBar />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <PremiumJewelry />
          </Route> */}
        </Switch>
        <FooterContainer />
      </div>
    </Router>
  );
}

export default App;
