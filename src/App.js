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

// Beauty & Health Components
import AllBeauty from './components/BeautyHealthCategory/Category/AllBeauty';
import HealthHousehold from './components/BeautyHealthCategory/Category/HealthHousehold';
import MensGrooming from './components/BeautyHealthCategory/Category/MensGrooming';
import PremiumBeauty from './components/BeautyHealthCategory/Category/PremiumBeauty';
import SalonSpa from './components/BeautyHealthCategory/Category/SalonSpa';
import VitaminsDiet from './components/BeautyHealthCategory/Category/VitaminsDiet';

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
import Wdeding from './components/HandmadeCategory/Category/Wedding';


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
          <Route path="/beauty&health/premiumbeauty" exact component={AllBeauty}>
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
          <Route path="/beauty&health/skincare" exact component={AllBeauty}>
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
          <Route path="/beauty&health/salon&spa" exact component={AllBeauty}>
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
          <Route path="/beauty&health/mensgrooming" exact component={AllBeauty}>
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
          <Route path="/beauty&health/health&household&baby" exact component={AllBeauty}>
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
          <Route path="/beauty&health/vitamins&diet" exact component={AllBeauty}>
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
          <Route path="/handmade/gifts" exact component={AllHandmade}>
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
          <Route path="/handmade/jewelryhome&kitchen" exact component={AllHandmade}>
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
          <Route path="/handmade/wedding" exact component={AllHandmade}>
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
          <Route path="/handmade/clothing&shoes" exact component={AllHandmade}>
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
          <Route path="/handmade/handbags&accessories" exact component={AllHandmade}>
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
          <Route path="/handmade/stationary&partysupplies" exact component={AllHandmade}>
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
          <Route path="/handmade/toys&games" exact component={AllHandmade}>
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
          <Route path="/handmade/petsupplies" exact component={AllHandmade}>
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
          <Route path="/handmade/homedecor" exact component={AllHandmade}>
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
          <Route path="/handmade/artwork" exact component={AllHandmade}>
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
