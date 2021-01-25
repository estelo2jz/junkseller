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
import SmartSmartHome from './components/SmartHomeCategory/Category/SmartHome';
// import DetectorsSensors from './components/SmartHomeCategory/Category/DetectorsSensors';
// import HeatingCooling from './components/SmartHomeCategory/Category/HeatingCooling';
// import HomeEntertainment from './components/SmartHomeCategory/Category/HomeEntertainment';
// import SmartKitchen from './components/SmartHomeCategory/Category/Kitchen';
// import LawnGarden from './components/SmartHomeCategory/Category/LawnGarden';
// import SmartPet from './components/SmartHomeCategory/Category/Pet';
// import PlugsOutlet from './components/SmartHomeCategory/Category/PlugsOutlet';
// import SecurityCameras from './components/SmartHomeCategory/Category/SecurityCameras';
// import SmartDevices from './components/SmartHomeCategory/Category/SmartDevices';
// import SmartLocks from './components/SmartHomeCategory/Category/SmartLocks';
// import VacuumMops from './components/SmartHomeCategory/Category/VacuumMops';
// import VoiceAssistants from './components/SmartHomeCategory/Category/VoiceAssistants';
// import WifiNetworking from './components/SmartHomeCategory/Category/WifiNetworking';


// FOOD GROCERY CATEGORY
// import Fresh from './components/FoodGroceryCategory/Category/Fresh';
// import GroceryGourmet from './components/FoodGroceryCategory/Category/GroceryGourmet';
// import Pantry from './components/FoodGroceryCategory/Category/Pantry';
// import WholeFoods from './components/FoodGroceryCategory/Category/WholeFoods';

// BEAUTY HEALTH CATEGORY
// import AllBeauty from './components/BeautyHealthCategory/Category/AllBeauty';
// import HealthHousehold from './components/BeautyHealthCategory/Category/HealthHousehold';
// import MensGrooming from './components/BeautyHealthCategory/Category/MensGrooming';
// import PremiumBeauty from './components/BeautyHealthCategory/Category/PremiumBeauty';
// import SalonSpa from './components/BeautyHealthCategory/Category/SalonSpa';
// import SkinCare from './components/BeautyHealthCategory/Category/SkinCare';
// import VitaminsDiet from './components/BeautyHealthCategory/Category/VitaminsDiet';

// TOYS KIDS BABY
// import ToysBaby from './components/ToysKidsBabyCategory/Category/Baby';
// import BabyRegistry from './components/ToysKidsBabyCategory/Category/Babyregistry';
// import Diapering from './components/ToysKidsBabyCategory/Category/Diapering';
// import ToysFamily from './components/ToysKidsBabyCategory/Category/Family';
// import KidsBirthdays from './components/ToysKidsBabyCategory/Category/KidsBirthdays';
// import KidsTeen from './components/ToysKidsBabyCategory/Category/Teen';
// import ToysGames from './components/ToysKidsBabyCategory/Category/ToysGames';
// import VideoGameKids from './components/ToysKidsBabyCategory/Category/VideoGameKids';

// HANDMADE CATEGORY
// import AllHandmade from './components/HandmadeCategory/Category/AllHandmade';
// import Artwork from './components/HandmadeCategory/Category/Artwork';
// import HandmadeBaby from './components/HandmadeCategory/Category/Baby';
// import BeautyGrooming from './components/HandmadeCategory/Category/BeautyGrooming';
// import ClothingShoes from './components/HandmadeCategory/Category/ClothingShoes';
// import HandmadeFurniture from './components/HandmadeCategory/Category/Furniture';
// import HandmadeGifts from './components/HandmadeCategory/Category/Gifts';
// import HandbagsAccessories from './components/HandmadeCategory/Category/HandbagsAccessories';
// import HomeDecor from './components/HandmadeCategory/Category/HomeDecor';
// import HomeKitchen from './components/HandmadeCategory/Category/HomeKitchen';
// import Jewelry from './components/HandmadeCategory/Category/Jewelry';
// import KitchenDining from './components/HandmadeCategory/Category/KitchenDining';
// import HandmadePetSupplies from './components/HandmadeCategory/Category/PetSupplies';
// import SellOn from './components/HandmadeCategory/Category/SellOn';
// import StationaryParty from './components/HandmadeCategory/Category/StationaryParty';
// import ToysGames from './components/HandmadeCategory/Category/ToysGames';
// import Wedding from './components/HandmadeCategory/Category/Wedding';

// SPORTS CATEGORY
// import AllSports from './components/SportsCategory/Category/AllSports';
// import AthleticClothing from './components/SportsCategory/Category/AthleticClothing';
// import ExerciseFitness from './components/SportsCategory/Category/ExerciseFitness';
// import FanShop from './components/SportsCategory/Category/FanShop';
// import Golf from './components/SportsCategory/Category/Golf';
// import HuntingFishing from './components/SportsCategory/Category/HuntingFishing';
// import LeisureGame from './components/SportsCategory/Category/LeisureGame';
// import  NewGear from './components/SportsCategory/Category/NewGear';
// import SportsCollectibles from './components/SportsCategory/Category/SportsCollectibles';


// AUTOMOTIVE CATEGORY
// import CarElectronics from './components/AutomotiveCategory/Category/CarElectronics';
// import Garage from './components/AutomotiveCategory/Category/Garage';
// import MotorcyclePowerSports from './components/AutomotiveCategory/Category/MotorcyclePowerSports';
// import PartsAccessories from './components/AutomotiveCategory/Category/PartsAccessories';
// import RV from './components/AutomotiveCategory/Category/RV';
// import TiresWheel from './components/AutomotiveCategory/Category/TiresWheel';
// import ToolsEquipment from './components/AutomotiveCategory/Category/ToolsEquipment';
// import Vehicles from './components/AutomotiveCategory/Category/Vehicles';

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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
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
              category11="Amazon Renewed"
            />
            <ElectronicsBase />
          </Route>
          <Route path="/electronics/amazonrenewed" exact component={AmazonRenewed}>
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
          <Route path="/computers" exact component={Computers}>
            <NavBar />
            <Computers />
          </Route>
          <Route path="/computers/computertablet" exact component={ComputerTablet}>
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
          <Route path="/computers/monitors" exact component={Monitors}>
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
          <Route path="/computers/computeraccessories" exact component={ComputerAccessories}>
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
          <Route path="/computers/networking" exact component={Networking}>
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
          <Route path="/computers/drivesstorage" exact component={DrivesStorage}>
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
          <Route path="/computers/printersink" exact component={PrintersInk}>
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
          <Route path="/computers/software" exact component={Software}>
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
          <Route path="/computers/computercomponents" exact component={ComputerComponents}>
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
          <Route path="/computers/officeschool" exact component={OfficeSchool}>
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
          <Route path="/computers/trade" exact component={Trade}>
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
          <Route path="/smarthome" exact component={SmartHome}>
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
          <Route path="/homegardentools" exact component={HomeGardenTools}>
            <NavBar />
            <HomeGardenTools />
          </Route>
          <Route path="/homegardentools/amazonhome" exact component={AmazonHome}>
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
          <Route path="/homegardentools/appliances" exact component={Appliances}>
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
          <Route path="/homegardentools/artscrafts" exact component={ArtsCrafts}>
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
          <Route path="/homegardentools/bedbath" exact component={BedBath}>
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
          <Route path="/homegardentools/collectivefineart" exact component={CollectiveFineArt}>
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
          <Route path="/homegardentools/discover" exact component={Discover}>
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
          <Route path="/homegardentools/eventsparty" exact component={EventsParty}>
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
          <Route path="/homegardentools/exploreshowroom" exact component={ExploreShowroom}>
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
          <Route path="/homegardentools/fineart" exact component={FineArt}>
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
          <Route path="/homegardentools/furniture" exact component={Furniture}>
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
          <Route path="/homegardentools/gardenoutdoor" exact component={GardenOutdoor}>
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
          <Route path="/homegardentools/homedecor" exact component={HomeDecor}>
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
          <Route path="/homegardentools/kitchendining" exact component={KitchenDining}>
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
          <Route path="/homegardentools/lighting" exact component={Lighting}>
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
          <Route path="/homegardentools/mattresses" exact component={Mattresses}>
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
          <Route path="/homegardentools/homepetsupplies" exact component={HomePetSupplies}>
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
          <Route path="/homegardentools/ShopRoom" exact component={ShopRoom}>
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
          <Route path="/homegardentools/storageorganization" exact component={StorageOrganization}>
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
          <Route path="/petsupplies" exact component={PetSupplies}>
            <NavBar />
            <PetSupplies />
          </Route>
          <Route path="/petsupplies/petprofiles" exact component={PetProfiles}>
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
          <Route path="/petsupplies/dogsupplies" exact component={DogSupplies}>
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
          <Route path="/petsupplies/dogfood" exact component={DogFood}>
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
          <Route path="/petsupplies/catsupplies" exact component={CatSupplies}>
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
          <Route path="/petsupplies/catfood" exact component={CatFood}>
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
          <Route path="/petsupplies/fishaquatic" exact component={FishAquatic}>
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
          <Route path="/petsupplies/smallanimals" exact component={SmallAnimals}>
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
          <Route path="/petsupplies/birds" exact component={PetBirds}>
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
          <Route path="/foodgrocery" exact component={FoodGrocery}>
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
          <Route path="/beautyhealth" exact component={BeautyHealth}>
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
          <Route path="/toyskidsbaby" exact component={ToysKidsBaby}>
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
          <Route path="/handmade" exact component={Handmade}>
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
          <Route path="/sports" exact component={Sports}>
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
          <Route path="/outdoors" exact component={Outdoors}>
            <NavBar />
            <Outdoors />
          </Route>
          <Route path="/outdoors/outdoorclothing" exact component={OutdoorClothing}>
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
          <Route path="/outdoors/campinghiking" exact component={CampingHiking}>
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
          <Route path="/outdoors/climbing" exact component={Climbing}>
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
          <Route path="/outdoors/cycling" exact component={Cycling}>
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
          <Route path="/outdoors/skates" exact component={Skates}>
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
          <Route path="/outdoors/watersports" exact component={WaterSports}>
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
          <Route path="/outdoors/wintersports" exact component={WinterSports}>
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
          <Route path="/outdoors/outdooraccessories" exact component={OutdoorAccessories}>
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
          <Route path="/outdoors/alloutdoor" exact component={AllOutdoor}>
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
          <Route path="/automotiveindustrial" exact component={AutomotiveIndustrial}>
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
