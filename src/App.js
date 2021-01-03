import './App.css';
import './styles/main.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

import Electronics from './components/category/Electronics';
import Computers from './components/category/Computers';
import SmartHome from './components/category/SmartHome';
import HomeGardenTools from './components/category/HomeGardenTools';
import PetSupplies from './components/category/PetSupplies';
import FoodGrocery from './components/category/FoodGrocery';
import BeautyHealth from './components/category/BeautyHealth';
import ToysKidsBaby from './components/category/ToysKidsBaby';
import Handmade from './components/category/Handmade';
import Sports from './components/category/Sports';
import Outdoors from './components/category/Outdoors';
import AutomotiveIndustrial from './components/category/AutomotiveIndustrial';

import ElectronicsMenu from './components/ElectricCategory/ElectronicsMenu';
import SmartHomeMenu from './components/SmartHomeCategory/SmartHomeMenu';
import ComputerMenu from './components/ComputerCategory/ComputerMenu';
import HomeGardenToolsMenu from './components/HomeGardenToolsCategory/HomeGardenToolsMenu';
import PetSuppliesMenu from './components/PetSuppliesCategory/PetSuppliesMenu';
import FoodGroceryMenu from './components/FoodGroceryCategory/FoodGroceryMenu';
import BeautyHealthMenu from './components/BeautyHealthCategory/BeautyHealthMenu';
import ToysKidsBabyMenu from './components/ToysKidsBabyCategory/ToysKidsBabyMenu';
import HandmadeMenu from './components/HandmadeCategory/HandmadeMenu';
import SportsMenu from './components/SportsCategory/SportsMenu';
import OutdoorsMenu from './components/OutdoorsCategory/OutdoorsMenu';
import AutomotiveMenu from './components/AutomotiveCategory/AutomotiveMenu';

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
import AmazonRenewed from './components/ElectricCategory/Category/AmazonRenewed';

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
            component={Electronics}
          >
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
              category11="Amazon Renewed"
            />
            <Electronics></Electronics>
          </Route>
          <Route path="/tvvideo" component={TVVideo}>
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
              category11="Amazon Renewed"
            />
            <TVVideo />
          </Route>
          <Route path="/homeaudiotheater" component={HomeAudioTheater}>
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
              category11="Amazon Renewed"
            />
            <HomeAudioTheater />
          </Route>
          <Route path="/cameraphotovideo" component={CameraPhotoVideo}>
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
              category11="Amazon Renewed"
            />
            <CameraPhotoVideo />
          </Route>
          <Route path="/cellphones" component={CellPhone}>
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
              category11="Amazon Renewed"
            />
            <CellPhone />
          </Route>
          <Route path="/headphones" component={Headphones}>
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
              category11="Amazon Renewed"
            />
            <Headphones />
          </Route>
          <Route path="/VideoGames" component={VideoGames}>
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
              category11="Amazon Renewed"
            />
            <VideoGames />
          </Route>
          <Route path="/bluetoothwireless" component={BluetoothWireless}>
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
              category11="Amazon Renewed"
            />
            <BluetoothWireless />
          </Route>
          <Route path="/carelectronics" component={CarElectronics}>
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
              category11="Amazon Renewed"
            />
            <CarElectronics />
          </Route>
          <Route path="/musicalinstruments" component={MusicalInstruments}>
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
              category11="Amazon Renewed"
            />
            <MusicalInstruments />
          </Route>
          <Route path="/cameraphotovideo" component={CameraPhotoVideo}>
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
              category11="Amazon Renewed"
            />
            <CameraPhotoVideo />
          </Route>
          <Route path="/wearabletechnology" component={WearableTechnology}>
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
              category11="Amazon Renewed"
            />
            <WearableTechnology />
          </Route>
          <Route path="/electronicsbase" component={ElectronicsBase}>
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
              category11="Amazon Renewed"
            />
            <ElectronicsBase />
          </Route>
          <Route path="/amazonrenewed" component={AmazonRenewed}>
            <NavBar />
            <ElectronicsMenu
              category0="TV & Video"
              category1="Home Audio & Theater"
              category2="Camera, Photo & Video"
              category3="Cell Phones & Accessories"
              category4="Headphones"
              category5="Video Games"
              category6="Bluetooth & Wireless"
              category7="Car Electronics"
              category8="Musical Instruments"
              category9="Wearable Technology"
              category10="Electronics"
              category11="Amazon Renewed"
            />
            <AmazonRenewed />
          </Route>
          



          {/* COMPUTER COMPONENTS */}
          <Route path="/computers" component={Computers}>
            <NavBar />
            <ComputerMenu 
              category0="Computers, Tablets & PC" 
              category1="Monitors"
              category2="Accessories"
              category3="Networking"
              category4="Drives & Storage"
              category5="Computer Parts & Components"
              category6="Printers & Ink"
              category7="Software"
              category8="Office & School Supllies"
              category9="Trade In Your Electronics"
            />
            <Computers />
          </Route>
          <Route path="/smarthome" component={SmartHome}>
            <NavBar />
            <SmartHomeMenu 
              category0="Amazon Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertaiment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"
              category15="Other Solutions"

            />
            <SmartHome />
          </Route>
          <Route path="/homegardentools" component={HomeGardenTools}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Shop by Room"
              category2="Discover"
              category3="Explore Showroom"
              category4="Home Decor"
              category5="Furniture"
              category6="Kitchen & Dining"
              category7="Bed & Bath"
              category8="Garden & Outdoor"
              category9="Mattresses"
              category10="Lighting"
              category11="Storage & Organization"
              category12="Appliances"
              category13="Fine Art"
              category14="Collective & Fine Art"
              category15="Artsm Crafts & Sewing"
              category16="Events & Party Supplies"
              category17="Pet Supplies"
              
            />
            <HomeGardenTools />
          </Route>
          <Route path="/petsupplies" component={PetSupplies}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Suuplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <PetSupplies />
          </Route>
          <Route path="/foodgrocery" component={FoodGrocery}>
            <NavBar />
            <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Amazon Fresh"
              category2="Whole Foods"
              category3="Pantry"
              category4="Amazon Launchpad Food"
              category5="Subscribe & Save"
              category6="Wickedly Prime"
              category7="Pay with SNAP EBT"
            />
            <FoodGrocery />
          </Route>
          <Route path="/beautyhealth" component={BeautyHealth}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Slaon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <BeautyHealth />
          </Route>
          <Route path="/toyskidsbaby" component={ToysKidsBaby}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Amazon Family"
              category5="Amazon Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
              category8="Amazon Launchpad"
              category9="Amazon Elements"
            />
            <ToysKidsBaby />
          </Route>
          <Route path="/handmade" component={Handmade}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="CLothing & Shoes"
              category6="Handbags & Accessories"
              category7="Beauty & Grooming"
              category8="Stationay & Party Supplies"
              category9="Toys & Games"
              category10="Pet Supplies"
              category11="Home Decor"
              category12="Artwork"
              category13="Kitchen & Dining"
              category14="Furniture"
              category15="Baby"
              category16="Sell on Amazon Handmade"
            />
            <Handmade />
          </Route>
          <Route path="/sports" component={Sports}>
            <NavBar />
            <SportsMenu 
              category0="Athletic Clothing" 
              category1="Exercise & Fitness"
              category2="Hunting & Fishing"
              category3="Glof"
              category4="Fan Shop"
              category5="Leisure Sports & Game Room"
              category6="Sports & Collectibles"
              category7="All Sports & Fitness"
              category8="New Gear Innovations"
            />
            <Sports />
          </Route>
          <Route path="/outdoors" component={Outdoors}>
            <NavBar />
            <OutdoorsMenu 
              category0="Outdoor Clothing" 
              category1="Camping & Hiking"
              category2="Climbing"
              category3="Cycling"
              category4="Scooters, Skates & Skateboards"
              category5="Water Sports"
              category6="Winter Sports"
              category7="Accessories"
              category8="All Outdoor Recreation"
            />
            <Outdoors />
          </Route>
          <Route path="/automotiveindustrial" component={AutomotiveIndustrial}>
            <NavBar />
            <AutomotiveMenu 
              category0="Automotive Parts & Accessories" 
              category1="Automotive Tools & Equipment"
              category2="Car/Vehicle Electronics & GPS"
              category3="Tires & Wheels"
              category4="Motorcycle & Powersports"
              category5="RV Parts & Accessories"
              category6="Vehicles"
              category7="Your Garage"
            />
            <AutomotiveIndustrial />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
