import './App.css';
import './styles/main.scss';

import ScrollToTop from './components/ScrollToTop';
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

// Beauty & Health Components
import AllBeauty from './components/BeautyHealthCategory/Category/AllBeauty';
import HealthHousehold from './components/BeautyHealthCategory/Category/HealthHousehold';
import MensGrooming from './components/BeautyHealthCategory/Category/MensGrooming';
import PremiumBeauty from './components/BeautyHealthCategory/Category/PremiumBeauty';
import SalonSpa from './components/BeautyHealthCategory/Category/SalonSpa';
import VitaminsDiet from './components/BeautyHealthCategory/Category/VitaminsDiet';
import SkinCare from './components/BeautyHealthCategory/Category/SkinCare';

// Food & Grocery Components
import Fresh from './components/FoodGroceryCategory/Category/Fresh';
import GroceryGourmet from './components/FoodGroceryCategory/Category/GroceryGourmet';
import Pantry from './components/FoodGroceryCategory/Category/Pantry';
import WholeFoods from './components/FoodGroceryCategory/Category/WholeFoods';

// Home Garden Tools Components
import HomeHome from './components/HomeGardenToolsCategory/Category/AmazonHome';
import Appliances from './components/HomeGardenToolsCategory/Category/Appliances';
import ArtsCrafts from './components/HomeGardenToolsCategory/Category/ArtsCrafts';
import BedBath from './components/HomeGardenToolsCategory/Category/BedBath';
import CollectiveFineArt from './components/HomeGardenToolsCategory/Category/CollectiveFineArt';
import Discover from './components/HomeGardenToolsCategory/Category/Discover';
import EventsParty from './components/HomeGardenToolsCategory/Category/EventsParty';
import ExploreShowroom from './components/HomeGardenToolsCategory/Category/ExploreShowroom';
import FineArt from './components/HomeGardenToolsCategory/Category/FineArt';
import HomeFurniture from './components/HomeGardenToolsCategory/Category/Furniture';
import GardenOutdoor from './components/HomeGardenToolsCategory/Category/GardenOutdoor';
import HomeDecor from './components/HomeGardenToolsCategory/Category/HomeDecor';
import HomePetSupplies from './components/HomeGardenToolsCategory/Category/HomePetSupplies';
import KitchenDining from './components/HomeGardenToolsCategory/Category/KitchenDining';
import Lighting from './components/HomeGardenToolsCategory/Category/Lighting';
import Mattresses from './components/HomeGardenToolsCategory/Category/Mattresses';
import ShopRoom from './components/HomeGardenToolsCategory/Category/ShopRoom';
import StorageOrganization from './components/HomeGardenToolsCategory/Category/StorageOrganization';

// Handmade Components
import AllHandmade from './components/HandmadeCategory/Category/AllHandmade';
import Artwork from './components/HandmadeCategory/Category/Artwork';
import Baby from './components/HandmadeCategory/Category/Baby';
import BeautyGrooming from './components/HandmadeCategory/Category/BeautyGrooming';
import ClothingShoes from './components/HandmadeCategory/Category/ClothingShoes';
import Furniture from './components/HandmadeCategory/Category/Furniture';
import Gifts from './components/HandmadeCategory/Category/Gifts';
import HandbagsAccessories from './components/HandmadeCategory/Category/HandbagsAccessories';
import HandmadeHomeDecor from './components/HandmadeCategory/Category/HomeDecor';
import HomeKitchen from './components/HandmadeCategory/Category/HomeKitchen';
import HandmadePetSupplies from './components/HandmadeCategory/Category/PetSupplies';
import SellOn from './components/HandmadeCategory/Category/SellOn';
import StationaryParty from './components/HandmadeCategory/Category/StationaryParty';
import ToysGames from './components/HandmadeCategory/Category/ToysGames';
import Wedding from './components/HandmadeCategory/Category/Wedding';
import HandmadeKitchenDining from './components/HandmadeCategory/Category/KitchenDining';

// Outdoors Components
import AllOutdoor from './components/OutdoorsCategory/Category/AllOutdoor';
import CampingHiking from './components/OutdoorsCategory/Category/CampingHiking';
import Climbing from './components/OutdoorsCategory/Category/Climbing';
import Cycling from './components/OutdoorsCategory/Category/Cycling';
import OutdoorAccessories from './components/OutdoorsCategory/Category/OutdoorAccessories';
import OutdoorClothing from './components/OutdoorsCategory/Category/OutdoorClothing';
import Skates from './components/OutdoorsCategory/Category/Skates';
import WaterSports from './components/OutdoorsCategory/Category/WaterSports';
import WinterSports from './components/OutdoorsCategory/Category/WinterSports';

// Pet & Supplies Components
import Birds from './components/PetSuppliesCategory/Category/Birds';
import CatFood from './components/PetSuppliesCategory/Category/CatFood';
import CatSupplies from './components/PetSuppliesCategory/Category/CatSupplies';
import DogFood from './components/PetSuppliesCategory/Category/DogFood';
import DogSupplies from './components/PetSuppliesCategory/Category/DogSupplies';
import FishAquatic from './components/PetSuppliesCategory/Category/FishAquatic';
import PetProfiles from './components/PetSuppliesCategory/Category/PetProfiles';
import SmallAnimals from './components/PetSuppliesCategory/Category/SmallAnimals';

// Smart Home Components
import DetectorsSensors from './components/SmartHomeCategory/Category/DetectorsSensors';
import HeatingCooling from './components/SmartHomeCategory/Category/HeatingCooling';
import HomeEntertainment from './components/SmartHomeCategory/Category/HomeEntertainment';
import Kitchen from './components/SmartHomeCategory/Category/Kitchen';
import SmartPet from './components/SmartHomeCategory/Category/Pet';
import PlugsOutlet from './components/SmartHomeCategory/Category/PlugsOutlet';
import SecurityCameras from './components/SmartHomeCategory/Category/SecurityCameras';
import SmartDevices from './components/SmartHomeCategory/Category/SmartDevices';
import SmartHome2 from './components/SmartHomeCategory/Category/SmartHome';
import SmartKitchen from './components/SmartHomeCategory/Category/SmartKitchen';
import SmartLighting from './components/SmartHomeCategory/Category/SmartLighting';
import SmartLock from './components/SmartHomeCategory/Category/SmartLocks';
import SmartPet2 from './components/SmartHomeCategory/Category/SmartPet';
import SmartVacuums from './components/SmartHomeCategory/Category/SmartVacuums';
import VoiceAssistants from './components/SmartHomeCategory/Category/VoiceAssistants';
import WifiNetworking from './components/SmartHomeCategory/Category/WifiNetworking';
import LawnGarden from './components/SmartHomeCategory/Category/LawnGarden';


// Toys Kids Baby Components
import Babys from './components/ToysKidsBabyCategory/Category/Baby';
import BabyRegistry from './components/ToysKidsBabyCategory/Category/BabyRegistry';
import Diapering from './components/ToysKidsBabyCategory/Category/Diapering';
import Family from './components/ToysKidsBabyCategory/Category/Family';
import KidsBirthdays from './components/ToysKidsBabyCategory/Category/KidsBirthdays';
import Teen from './components/ToysKidsBabyCategory/Category/Teen';
import KidsToysGames from './components/ToysKidsBabyCategory/Category/ToysGames';
import VideoGameKids from './components/ToysKidsBabyCategory/Category/VideoGameKids';



// Sports Components
import AllSports from './components/SportsCategory/Category/AllSports';
import AthleticClothing from './components/SportsCategory/Category/AthleticClothing';
import ExerciseFitness from './components/SportsCategory/Category/ExerciseFitness';
import FanShop from './components/SportsCategory/Category/FanShop';
import Golf from './components/SportsCategory/Category/Golf';
import HuntingFishing from './components/SportsCategory/Category/HuntingFishing';
import LeisureGame from './components/SportsCategory/Category/LeisureGame';
import NewGear from './components/SportsCategory/Category/NewGear';
import SportsCollectibles from './components/SportsCategory/Category/SportsCollectibles';


// Automotive & Industrial Components
import AutoCarElectronics from './components/AutomotiveCategory/Category/CarElectronics';
import Garage from './components/AutomotiveCategory/Category/Garage';
import MotorcyclePowerSports from './components/AutomotiveCategory/Category/MotorcyclePowerSports';
import PartsAccessories from './components/AutomotiveCategory/Category/PartsAccessories';
import RV from './components/AutomotiveCategory/Category/RV';
import TiresWheel from './components/AutomotiveCategory/Category/TiresWheel';
import ToolsEquipment from './components/AutomotiveCategory/Category/ToolsEquipment';
import Vehicles from './components/AutomotiveCategory/Category/Vehicles';

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
import { SkipNext } from '@material-ui/icons';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/beauty&health/allbeauty" exact component={AllBeauty}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <AllBeauty />
          </Route>
          <Route path="/beauty&health/premiumbeauty" exact component={PremiumBeauty}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <PremiumBeauty />
          </Route>
          <Route path="/beauty&health/skincare" exact component={SkinCare}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <SkinCare />
          </Route>
          <Route path="/beauty&health/allbeauty" exact component={AllBeauty}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <AllBeauty />
          </Route>
          <Route path="/beauty&health/salon&spa" exact component={SalonSpa}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <SalonSpa />
          </Route>
          <Route path="/beauty&health/mensgrooming" exact component={MensGrooming}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <MensGrooming />
          </Route>
          <Route path="/beauty&health/health&household&baby" exact component={HealthHousehold}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <HealthHousehold />
          </Route>
          <Route path="/beauty&health/vitamins&diet" exact component={VitaminsDiet}>
            <NavBar />
            <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
            <VitaminsDiet />
          </Route>


          <Route path="/food&grocery" exact component={FoodGrocery}>
            <NavBar />
            <FoodGrocery />
          </Route>
          <Route path="/food&grocery/grocery&gourmet" exact component={GroceryGourmet}>
            <NavBar />
            <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Fresh"
              category2="Whole Foods"
              category3="Pantry"
            />
            <GroceryGourmet />
          </Route>
          <Route path="/food&grocery/fresh" exact component={Fresh}>
            <NavBar />
            <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Fresh"
              category2="Whole Foods"
              category3="Pantry"
            />
            <Fresh />
          </Route>
          <Route path="/food&grocery/wholefoods" exact component={WholeFoods}>
            <NavBar />
            <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Fresh"
              category2="Whole Foods"
              category3="Pantry"
            />
            <WholeFoods />
          </Route>
          <Route path="/food&grocery/pantry" exact component={Pantry}>
            <NavBar />
            <FoodGroceryMenu 
              category0="Grocery & Gourmet Food" 
              category1="Fresh"
              category2="Whole Foods"
              category3="Pantry"
            />
            <Pantry />
          </Route>


          <Route path="/home&garden&tools" exact component={HomeGardenTools}>
            <NavBar />
            <HomeGardenTools />
          </Route>
          <Route path="/home&garden&tools/home" exact component={HomeHome}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
            <HomeHome />
          </Route>
          <Route path="/home&garden&tools/appliances" exact component={Appliances}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/arts&crafts" exact component={ArtsCrafts}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/bed&bath" exact component={BedBath}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/collective&fineart" exact component={CollectiveFineArt}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/discover" exact component={Discover}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/events&partysupplies" exact component={EventsParty}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/exploreshowroom" exact component={ExploreShowroom}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/fineart" exact component={FineArt}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/furniture" exact component={HomeFurniture}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
            <HomeFurniture />
          </Route>
          <Route path="/home&garden&tools/garden&outdoor" exact component={GardenOutdoor}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/homedecor" exact component={HomeDecor}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/kitchen&dining" exact component={KitchenDining}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/lighting" exact component={Lighting}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/mattresses" exact component={Mattresses}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/petsupplies" exact component={HomePetSupplies}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/shoproom" exact component={ShopRoom}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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
          <Route path="/home&garden&tools/storage&organization" exact component={StorageOrganization}>
            <NavBar />
            <HomeGardenToolsMenu 
              category0="Home" 
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




          <Route path="/handmade" exact component={Handmade}>
            <NavBar />
            <Handmade />
          </Route>
          <Route path="/handmade/allhandmade" exact component={AllHandmade}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <AllHandmade />
          </Route>
          <Route path="/handmade/gifts" exact component={Gifts}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <Gifts />
          </Route>
          <Route path="/handmade/jewelry" exact component={Jewelry}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <Jewelry />
          </Route>
          <Route path="/handmade/home&kitchen" exact component={HomeKitchen}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <HomeKitchen />
          </Route>
          <Route path="/handmade/wedding" exact component={Wedding}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <Wedding />
          </Route>
          <Route path="/handmade/clothing&shoes" exact component={ClothingShoes}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <ClothingShoes />
          </Route>
          <Route path="/handmade/handbags&accessories" exact component={HandbagsAccessories}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <HandbagsAccessories />
          </Route>
          <Route path="/handmade/beauty&grooming" exact component={BeautyGrooming}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <BeautyGrooming />
          </Route>
          <Route path="/handmade/stationary&partysupplies" exact component={StationaryParty}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <StationaryParty />
          </Route>
          <Route path="/handmade/toys&games" exact component={ToysGames}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <ToysGames />
          </Route>
          <Route path="/handmade/petsupplies" exact component={HandmadePetSupplies}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <HandmadePetSupplies />
          </Route>
          <Route path="/handmade/homedecor" exact component={HandmadeHomeDecor}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <HandmadeHomeDecor />
          </Route>
          <Route path="/handmade/artwork" exact component={Artwork}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <Artwork />
          </Route>
          <Route path="/handmade/kitchen&dining" exact component={HandmadeKitchenDining}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <HandmadeKitchenDining />
          </Route>
          <Route path="/handmade/allhandmade" exact component={AllHandmade}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <AllHandmade />
          </Route>
          <Route path="/handmade/furniture" exact component={Furniture}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <Furniture />
          </Route>
          <Route path="/handmade/baby" exact component={Baby}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <Baby />
          </Route>
          <Route path="/handmade/sellon" exact component={SellOn}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <SellOn />
          </Route>



          <Route path="/outdoors" exact component={Outdoors}>
            <NavBar />
            <Outdoors />
          </Route>
          <Route path="/outdoors/outdoorclothing" exact component={OutdoorClothing}>
            <NavBar />
            <OutdoorMenu 
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
          <Route path="/outdoors/camping&hiking" exact component={CampingHiking}>
            <NavBar />
            <OutdoorMenu 
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
            <OutdoorMenu 
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
            <OutdoorMenu 
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
          <Route path="/outdoors/scooters&skates&skateboards" exact component={Skates}>
            <NavBar />
            <OutdoorMenu 
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
            <OutdoorMenu 
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
            <OutdoorMenu 
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
          <Route path="/outdoors/accessories" exact component={OutdoorAccessories}>
            <NavBar />
            <OutdoorMenu 
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
            <OutdoorMenu 
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



          <Route path="/pet&supplies" exact component={PetSupplies}>
            <NavBar />
            <PetSupplies />
          </Route>
          <Route path="/pet&supplies/petprofiles" exact component={PetProfiles}>
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
          <Route path="/pet&supplies/dogsupplies" exact component={PetProfiles}>
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
          <Route path="/pet&supplies/dogsupplies" exact component={DogSupplies}>
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
          <Route path="/pet&supplies/dogfood" exact component={DogFood}>
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
          <Route path="/pet&supplies/catsupplies" exact component={CatSupplies}>
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
          <Route path="/pet&supplies/catfood" exact component={CatFood}>
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
          <Route path="/pet&supplies/fish&aquatic" exact component={FishAquatic}>
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
          <Route path="/pet&supplies/smallanimals" exact component={SmallAnimals}>
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
          <Route path="/pet&supplies/birds" exact component={Birds}>
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
            <Birds />
          </Route>



          <Route path="/smarthome" exact component={SmartHome}>
            <NavBar />
            <SmartHome />
          </Route>
          <Route path="/smarthome/smarthome" exact component={SmartHome2}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <SmartHome2 />
          </Route>
          <Route path="/smarthome/smarthomelighting" exact component={SmartLighting}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <SmartLighting />
          </Route>
          <Route path="/smarthome/smartlocks&entry" exact component={SmartLock}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <SmartLock />
          </Route>
          <Route path="/smarthome/securitycameras&systems" exact component={SecurityCameras}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <SecurityCameras />
          </Route>
          <Route path="/smarthome/plugs&outlets" exact component={PlugsOutlet}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <PlugsOutlet />
          </Route>
          <Route path="/smarthome/newsmartdevices" exact component={SmartDevices}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <SmartDevices />
          </Route>
          <Route path="/smarthome/heating&cooling" exact component={HeatingCooling}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <HeatingCooling />
          </Route>
          <Route path="/smarthome/detectors&sensors" exact component={DetectorsSensors}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <DetectorsSensors />
          </Route>
          <Route path="/smarthome/homeentertainment" exact component={HomeEntertainment}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <HomeEntertainment />
          </Route>
          <Route path="/smarthome/pet" exact component={SmartPet}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <SmartPet />
          </Route>
          <Route path="/smarthome/voiceassistants&hubs" exact component={VoiceAssistants}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <VoiceAssistants />
          </Route>
          <Route path="/smarthome/kitchen" exact component={Kitchen}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <Kitchen />
          </Route>
          <Route path="/smarthome/vacuum&mops" exact component={SmartVacuums}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <SmartVacuums />
          </Route>
          <Route path="/smarthome/lawn&garden" exact component={LawnGarden}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <LawnGarden />
          </Route>
          <Route path="/smarthome/wifi&networking" exact component={WifiNetworking}>
            <NavBar />
            <SmartHomeMenu 
              category0="Smart Home" 
              category1="Smart Home Lighting"
              category2="Smart Locks and Entry"
              category3="Securtity Cameras and Systems"
              category4="Plugs and Outlets"
              category5="New Smart Devices"
              category6="Heating and Cooling"
              category7="Detectors and Sensors"
              category8="Home Entertainment"
              category9="Pet"
              category10="Voice Assistants and Hubs"
              category11="Kitchen"
              category12="Vacuums and Mops"
              category13="Lawn and Garden"
              category14="WIFI and Networking"

          />
            <WifiNetworking />
          </Route>



          <Route path="/toys&kids&baby" exact component={ToysKidsBaby}>
            <NavBar />
            <ToysKidsBaby />
          </Route>
          <Route path="/toys&kids&baby/toys&games" exact component={KidsToysGames}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <KidsToysGames />
          </Route>
          <Route path="/toys&kids&baby/baby" exact component={Babys}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <Babys />
          </Route>
          <Route path="/toys&kids&baby/diapering" exact component={Diapering}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <Diapering />
          </Route>
          <Route path="/toys&kids&baby/videogamekids" exact component={VideoGameKids}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <VideoGameKids />
          </Route>
          <Route path="/toys&kids&baby/family" exact component={Family}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <Family />
          </Route>
          <Route path="/toys&kids&baby/teen" exact component={Teen}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <Teen />
          </Route>
          <Route path="/toys&kids&baby/babyregistry" exact component={BabyRegistry}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <BabyRegistry />
          </Route>
          <Route path="/toys&kids&baby/kidsbirthdays" exact component={KidsBirthdays}>
            <NavBar />
            <ToysKidsBabyMenu 
              category0="Toys & Games" 
              category1="Baby"
              category2="Diapering"
              category3="Video Games for Kids"
              category4="Family"
              category5="Teen"
              category6="Baby Registry"
              category7="Kids Birthdays"
            />
            <KidsBirthdays />
          </Route>



          <Route path="/sports" exact component={Sports}>
            <NavBar />
            <Sports />
          </Route>
          <Route path="/sports/athleticclothing" exact component={AthleticClothing}>
            <NavBar />
            <SportMenu 
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
            <AthleticClothing />
          </Route>
          <Route path="/sports/exercise&fitness" exact component={ExerciseFitness}>
            <NavBar />
            <SportMenu 
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
            <ExerciseFitness />
          </Route>
          <Route path="/sports/hunting&fishing" exact component={HuntingFishing}>
            <NavBar />
            <SportMenu 
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
            <HuntingFishing />
          </Route>
          <Route path="/sports/golf" exact component={Golf}>
            <NavBar />
            <SportMenu 
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
            <Golf />
          </Route>
          <Route path="/sports/fanshop" exact component={FanShop}>
            <NavBar />
            <SportMenu 
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
            <FanShop />
          </Route>
          <Route path="/sports/leisure&game" exact component={LeisureGame}>
            <NavBar />
            <SportMenu 
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
            <LeisureGame />
          </Route>
          <Route path="/sports/sports&collectibles" exact component={SportsCollectibles}>
            <NavBar />
            <SportMenu 
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
            <SportsCollectibles />
          </Route>
          <Route path="/sports/allsports&fitness" exact component={AllSports}>
            <NavBar />
            <SportMenu 
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
            <AllSports />
          </Route>
          <Route path="/sports/newgearinnovations" exact component={NewGear}>
            <NavBar />
            <SportMenu 
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
            <NewGear />
          </Route>



          <Route path="/automotive&industrial" exact component={AutomotiveIndustrial}>
            <NavBar />
            <AutomotiveIndustrial />
          </Route>
          <Route path="/automotive&industrial/parts&accessories" exact component={AutoCarElectronics}>
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
            <AutoCarElectronics />
          </Route>
          <Route path="/automotive&industrial/tools&equipment" exact component={ToolsEquipment}>
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
            <ToolsEquipment />
          </Route>
          <Route path="/automotive&industrial/carelectronics&gps" exact component={PartsAccessories}>
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
            <PartsAccessories />
          </Route>
          <Route path="/automotive&industrial/tires&wheels" exact component={TiresWheel}>
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
            <TiresWheel />
          </Route>
          <Route path="/automotive&industrial/motorcycle&powersports" exact component={MotorcyclePowerSports}>
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
            <MotorcyclePowerSports />
          </Route>
          <Route path="/automotive&industrial/rvpart&accessories" exact component={RV}>
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
            <RV />
          </Route>
          <Route path="/automotive&industrial/vehicles" exact component={Vehicles}>
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
            <Vehicles />
          </Route>
          <Route path="/automotive&industrial/yourgarage" exact component={Garage}>
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
            <Garage />
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
          <Route path="/handmade/jewelry" exact component={Jewelry}>
            <NavBar />
            <Jewelry />
          </Route>
          <Route path="/handmade/jewelry/necklaces" exact component={JewelryNecklace}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <JewelryNecklace />
          </Route>
          <Route path="/handmade/jewelry/watchs" exact component={JewelryWatchz}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <JewelryWatchz />
          </Route>
          <Route path="/handmade/jewelry/earrings" exact component={JewelryEarrings}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
            <JewelryMenu
              category0="Necklace's"
              category1="Watch's"
              category2="Earring's"
              category3="Pendant's"
              category4="Premium Jewelries"
            />
            <JewelryEarrings />
          </Route>
          <Route path="/handmade/jewelry/pendants" exact component={JewelryPendant}>
            <NavBar />
            <HandmadeMenu 
              category0="All Handmade" 
              category1="Gifts"
              category2="Jewerly"
              category3="Home & Kitchen"
              category4="Wedding"
              category5="Clothing & Shoes"
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
              category16="Sell on JunkSeller"
            />
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
        {/* <FooterContainer /> */}
      </div>
    </Router>
  );
}

export default App;
