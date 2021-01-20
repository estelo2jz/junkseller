import './App.css';
import './styles/main.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewNav from './components/SidebarData';
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

// ELECTRONICS CATEGORY
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

// COMPUTERS CATEGORY
import ComputerAccessories from './components/ComputerCategory/Category/ComputerAccessories';
import ComputerComponents from './components/ComputerCategory/Category/ComputerComponents';
import ComputerTablet from './components/ComputerCategory/Category/ComputerTablet';
import DrivesStorage from './components/ComputerCategory/Category/DrivesStorage';
import Monitors from './components/ComputerCategory/Category/Monitors';
import Networking from './components/ComputerCategory/Category/Networking';
import OfficeSchool from './components/ComputerCategory/Category/OfficeSchool';
import PrintersInk from './components/ComputerCategory/Category/PrintersInk';
import Software from './components/ComputerCategory/Category/Software';
import Trade from './components/ComputerCategory/Category/Trade';

// HOME GARDEN TOOLS CATEGORY
import AmazonHome from './components/HomeGardenToolsCategory/Category/AmazonHome';
import Appliances from './components/HomeGardenToolsCategory/Category/Appliances';
import ArtsCrafts from './components/HomeGardenToolsCategory/Category/ArtsCrafts';
import BedBath from './components/HomeGardenToolsCategory/Category/BedBath';
import CollectiveFineArt from './components/HomeGardenToolsCategory/Category/CollectiveFineArt';
import Discover from './components/HomeGardenToolsCategory/Category/Discover';
import EventsParty from './components/HomeGardenToolsCategory/Category/EventsParty';
import ExploreShowroom from './components/HomeGardenToolsCategory/Category/ExploreShowroom';
import FineArt from './components/HomeGardenToolsCategory/Category/FineArt';
import Furniture from './components/HomeGardenToolsCategory/Category/Furniture';
import GardenOutdoor from './components/HomeGardenToolsCategory/Category/GardenOutdoor';
import HomeDecor from './components/HomeGardenToolsCategory/Category/HomeDecor';
import KitchenDining from './components/HomeGardenToolsCategory/Category/KitchenDining';
import Lighting from './components/HomeGardenToolsCategory/Category/Lighting';
import Mattresses from './components/HomeGardenToolsCategory/Category/Mattresses';
import HomePetSupplies from './components/HomeGardenToolsCategory/Category/HomePetSupplies';
import ShopRoom from './components/HomeGardenToolsCategory/Category/ShopRoom';
import StorageOrganization from './components/HomeGardenToolsCategory/Category/StorageOrganization';


// PET SUPPLIES CATEGORY
import PetBirds from './components/PetSuppliesCategory/Category/Birds';
import CatFood from './components/PetSuppliesCategory/Category/CatFood';
import CatSupplies from './components/PetSuppliesCategory/Category/CatSupplies';
import DogFood from './components/PetSuppliesCategory/Category/DogFood';
import DogSupplies from './components/PetSuppliesCategory/Category/DogSupplies';
import FishAquatic from './components/PetSuppliesCategory/Category/FishAquatic';
import PetProfiles from './components/PetSuppliesCategory/Category/PetProfiles';
import SmallAnimals from './components/PetSuppliesCategory/Category/SmallAnimals';


// OUTDOORS CATEGORY
import OutdoorAccessories from './components/OutdoorsCategory/Category/OutdoorAccessories';
import AllOutdoor from './components/OutdoorsCategory/Category/AllOutdoor';
import CampingHiking from './components/OutdoorsCategory/Category/CampingHiking';
import Climbing from './components/OutdoorsCategory/Category/Climbing';
import Cycling from './components/OutdoorsCategory/Category/Cycling';
import OutdoorClothing from './components/OutdoorsCategory/Category/OutdoorClothing';
import Skates from './components/OutdoorsCategory/Category/Skates';
import WaterSports from './components/OutdoorsCategory/Category/WaterSports';
import WinterSports from './components/OutdoorsCategory/Category/WinterSports';

// SMART HOME CATEGORY


// FOOD GROCERY CATEGORY


// BEAUTY HEALTH CATEGORY


// TOYS KIDS BABY


// HANDMADE CATEGORY


// SPORTS CATEGORY


// AUTOMOTIVE CATEGORY


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
            <Computers />
          </Route>
          <Route path="/computertablet" component={ComputerTablet}>
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
            <ComputerTablet />
          </Route>
          <Route path="/monitors" component={Monitors}>
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
            <Monitors />
          </Route>
          <Route path="/computeraccessories" component={ComputerAccessories}>
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
            <ComputerAccessories />
          </Route>
          <Route path="/networking" component={Networking}>
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
            <Networking />
          </Route>
          <Route path="/drivesstorage" component={DrivesStorage}>
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
            <DrivesStorage />
          </Route>
          <Route path="/printersink" component={PrintersInk}>
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
            <PrintersInk />
          </Route>
          <Route path="/software" component={Software}>
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
            <Software />
          </Route>
          <Route path="/computercomponents" component={ComputerComponents}>
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
            <ComputerComponents />
          </Route>
          <Route path="/officeschool" component={OfficeSchool}>
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
            <OfficeSchool />
          </Route>
          <Route path="/trade" component={Trade}>
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
            <Trade />
          </Route>



          {/* Smart Home COMPONENTS */}
          <Route path="/smarthome" component={SmartHome}>
            <NavBar />
            {/* <SmartHomeMenu 
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

            /> */}
            <SmartHome />
          </Route>




          {/* Home Garden Tools COMPONENTS */}
          <Route path="/homegardentools" component={HomeGardenTools}>
            <NavBar />
            <HomeGardenTools />
          </Route>
          <Route path="/amazonhome" component={AmazonHome}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <AmazonHome />
          </Route>
          <Route path="/appliances" component={Appliances}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <Appliances />
          </Route>
          <Route path="/artscrafts" component={ArtsCrafts}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <ArtsCrafts />
          </Route>
          <Route path="/bedbath" component={BedBath}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <BedBath />
          </Route>
          <Route path="/collectivefineart" component={CollectiveFineArt}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <CollectiveFineArt />
          </Route>
          <Route path="/discover" component={Discover}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <Discover />
          </Route>
          <Route path="/eventsparty" component={EventsParty}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <EventsParty />
          </Route>
          <Route path="/exploreshowroom" component={ExploreShowroom}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <ExploreShowroom />
          </Route>
          <Route path="/fineart" component={FineArt}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <FineArt />
          </Route>
          <Route path="/furniture" component={Furniture}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <Furniture />
          </Route>
          <Route path="/gardenoutdoor" component={GardenOutdoor}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <GardenOutdoor />
          </Route>
          <Route path="/homedecor" component={HomeDecor}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <HomeDecor />
          </Route>
          <Route path="/kitchendining" component={KitchenDining}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <KitchenDining />
          </Route>
          <Route path="/lighting" component={Lighting}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <Lighting />
          </Route>
          <Route path="/mattresses" component={Mattresses}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <Mattresses />
          </Route>
          <Route path="/homepetsupplies" component={HomePetSupplies}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <HomePetSupplies />
          </Route>
          <Route path="/ShopRoom" component={ShopRoom}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <ShopRoom />
          </Route>
          <Route path="/storageorganization" component={StorageOrganization}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Amazon Home" 
              category1="Appliances"
              category2="Arts Crafts & Sewing"
              category3="Bed & Bath"
              category4="Collective & Fine Art"
              category5="Discover"
              category6="Events & Party Supplies"
              category7="Explore Showroom"
              category8="Fine Art"
              category9="Furniture"
              category10="Garden & Outdoor"
              category11="Home Decor"
              category12="Kitchen & Dining"
              category13="Lighting"
              category14="Mattresses"
              category15="Pet Supplies"
              category16="Shop by Room"
              category17="Storage & Organization"
            />
            <StorageOrganization />
          </Route>




          {/* Pet Supplies COMPONENTS */}
          <Route path="/petsupplies" component={PetSupplies}>
            <NavBar />
            <PetSupplies />
          </Route>
          <Route path="/petprofiles" component={PetProfiles}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <PetProfiles />
          </Route>
          <Route path="/dogsupplies" component={DogSupplies}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <DogSupplies />
          </Route>
          <Route path="/dogfood" component={DogFood}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <DogFood />
          </Route>
          <Route path="/catsupplies" component={CatSupplies}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <CatSupplies />
          </Route>
          <Route path="/catfood" component={CatFood}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <CatFood />
          </Route>
          <Route path="/fishaquatic" component={FishAquatic}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <FishAquatic />
          </Route>
          <Route path="/smallanimals" component={SmallAnimals}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <SmallAnimals />
          </Route>
          <Route path="/birds" component={PetBirds}>
            <NavBar />
            <PetSuppliesMenu 
              category0="Pet Profiles" 
              category1="Dog Supplies"
              category2="Dog Food"
              category3="Cat Supplies"
              category4="Cat Food"
              category5="Fish & Aquatic Pets"
              category6="Small Animals"
              category7="Birds"
            />
            <PetBirds />
          </Route>




          {/* Food Grocery COMPONENTS */}
          <Route path="/foodgrocery" component={FoodGrocery}>
            <NavBar />
            {/* <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Amazon Fresh"
              category2="Whole Foods"
              category3="Pantry"
              category4="Amazon Launchpad Food"
              category5="Subscribe & Save"
              category6="Wickedly Prime"
              category7="Pay with SNAP EBT"
            /> */}
            <FoodGrocery />
          </Route>




          {/* Beauty Health COMPONENTS */}
          <Route path="/beautyhealth" component={BeautyHealth}>
            <NavBar />
            {/* <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Slaon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            /> */}
            <BeautyHealth />
          </Route>




          {/* Toys Kids Baby COMPONENTS */}
          <Route path="/toyskidsbaby" component={ToysKidsBaby}>
            <NavBar />
            {/* <ToysKidsBabyMenu 
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
            /> */}
            <ToysKidsBaby />
          </Route>




          {/* Handmade COMPONENTS */}
          <Route path="/handmade" component={Handmade}>
            <NavBar />
            {/* <HandmadeMenu 
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
            /> */}
            <Handmade />
          </Route>




          {/* Sports COMPONENTS */}
          <Route path="/sports" component={Sports}>
            <NavBar />
            {/* <SportsMenu 
              category0="Athletic Clothing" 
              category1="Exercise & Fitness"
              category2="Hunting & Fishing"
              category3="Glof"
              category4="Fan Shop"
              category5="Leisure Sports & Game Room"
              category6="Sports & Collectibles"
              category7="All Sports & Fitness"
              category8="New Gear Innovations"
            /> */}
            <Sports />
          </Route>




          {/* Outdoors COMPONENTS */}
          <Route path="/outdoors" component={Outdoors}>
            <NavBar />
            <Outdoors />
          </Route>
          <Route path="/outdoorclothing" component={OutdoorClothing}>
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
            <OutdoorClothing />
          </Route>
          <Route path="/campinghiking" component={CampingHiking}>
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
            <CampingHiking />
          </Route>
          <Route path="/climbing" component={Climbing}>
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
            <Climbing />
          </Route>
          <Route path="/cycling" component={Cycling}>
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
            <Cycling />
          </Route>
          <Route path="/skates" component={Skates}>
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
            <Skates />
          </Route>
          <Route path="/watersports" component={WaterSports}>
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
            <WaterSports />
          </Route>
          <Route path="/wintersports" component={WinterSports}>
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
            <WinterSports />
          </Route>
          <Route path="/outdooraccessories" component={OutdoorAccessories}>
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
            <OutdoorAccessories />
          </Route>
          <Route path="/alloutdoor" component={AllOutdoor}>
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
            <AllOutdoor />
          </Route>




          {/* Automotive COMPONENTS */}
          <Route path="/automotiveindustrial" component={AutomotiveIndustrial}>
            <NavBar />
            {/* <AutomotiveMenu 
              category0="Automotive Parts & Accessories" 
              category1="Automotive Tools & Equipment"
              category2="Car/Vehicle Electronics & GPS"
              category3="Tires & Wheels"
              category4="Motorcycle & Powersports"
              category5="RV Parts & Accessories"
              category6="Vehicles"
              category7="Your Garage"
            /> */}
            <AutomotiveIndustrial />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
