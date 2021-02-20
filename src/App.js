import './App.css';
import './styles/main.scss';

import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NavBarSubBars from './components/NavBarSubBars';
import NewNav from './components/SidebarData';
import Header from './components/Header';
// import { FooterContainer } from './components/containers/Footer';
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


// import ElectronicsMenu from './components/ElectricCategory/ElectronicsMenu';
// import ComputersMenu from './components/ComputerCategory/ComputersMenu';
// import AutomotiveMenu from './components/AutomotiveCategory/AutomotiveMenu';
// import BeautyHealthMenu from './components/BeautyHealthCategory/BeautyHealthMenu';
// import FoodGroceryMenu from './components/FoodGroceryCategory/FoodGroceryMenu';
// import HandmadeMenu from './components/HandmadeCategory/HandmadeMenu';
// import HomeGardenToolsMenu from './components/HomeGardenToolsCategory/HomeGardenToolsMenu';
// import OutdoorMenu from './components/OutdoorsCategory/OutdoorsMenu';
// import PetSuppliesMenu from './components/PetSuppliesCategory/PetSuppliesMenu';
// import SmartHomeMenu from './components/SmartHomeCategory/SmartHomeMenu';
// import SportMenu from './components/SportsCategory/SportsMenu';
// import ToysKidsBabyMenu from './components/ToysKidsBabyCategory/ToysKidsBabyMenu';
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
import HandmadeJewelry from './components/HandmadeCategory/Category/Jewelry';

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
import SmartLighting from './components/SmartHomeCategory/Category/SmartLighting';
import SmartLock from './components/SmartHomeCategory/Category/SmartLocks';
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
            <NavBarSubBars />
            <Checkout />
          </Route>
          <Route path="/login">
            <NavBarSubBars />
            <h1>Login</h1>
          </Route>
          <Route exact path="/">
            <NavBarSubBars />
            <Home />
          </Route>
          <Route path="/electronics" 
            exact
            component={Electronics}
          >
            <NavBarSubBars />
            <Electronics></Electronics>
          </Route>
          <Route path="/electronics/tvvideo" exact component={TVVideo}>
            <NavBarSubBars />
            <TVVideo />
          </Route>
          <Route path="/electronics/homeaudiotheater" exact component={HomeAudioTheater}>
            <NavBarSubBars />
            <HomeAudioTheater />
          </Route>
          <Route path="/electronics/cameraphotovideo" exact component={CameraPhotoVideo}>
            <NavBarSubBars />
            <CameraPhotoVideo />
          </Route>
          <Route path="/electronics/cellphones" exact component={CellPhone}>
            <NavBarSubBars />
            <CellPhone />
          </Route>
          <Route path="/electronics/headphones" exact component={Headphones}>
            <NavBarSubBars />
            <Headphones />
          </Route>
          <Route path="/electronics/VideoGames" exact component={VideoGames}>
            <NavBarSubBars />
            <VideoGames />
          </Route>
          <Route path="/electronics/bluetoothwireless" exact component={BluetoothWireless}>
            <NavBarSubBars />
            <BluetoothWireless />
          </Route>
          <Route path="/electronics/carelectronics" exact component={CarElectronics}>
            <NavBarSubBars />
            <CarElectronics />
          </Route>
          <Route path="/electronics/musicalinstruments" exact component={MusicalInstruments}>
            <NavBarSubBars />
            <MusicalInstruments />
          </Route>
          <Route path="/electronics/cameraphotovideo" exact component={CameraPhotoVideo}>
            <NavBarSubBars />
            <CameraPhotoVideo />
          </Route>
          <Route path="/electronics/wearabletechnology" exact component={WearableTechnology}>
            <NavBarSubBars />
            <WearableTechnology />
          </Route>
          <Route path="/electronics/electronicsbase" exact component={ElectronicsBase}>
            <NavBarSubBars />
            <ElectronicsBase />
          </Route>
          


          <Route path="/computers" exact component={Computers}>
            <NavBarSubBars />
            <Computers></Computers>
          </Route>
          <Route path="/computers/tablet" exact component={ComputerTablet}>
            <NavBarSubBars />
            <ComputerTablet />
          </Route>
          <Route path="/computers/monitors" exact component={ComputerMonitors}>
            <NavBarSubBars />
            <ComputerMonitors />
          </Route>
          <Route path="/computers/accessories" exact component={ComputerAccessories}>
            <NavBarSubBars />
            <ComputerAccessories />
          </Route>
          <Route path="/computers/networking" exact component={ComputerNetworking}>
            <NavBarSubBars />
            <ComputerNetworking />
          </Route>
          <Route path="/computers/harddrives&storage" exact component={ComputerHardDrivesStorage}>
            <NavBarSubBars />
            <ComputerHardDrivesStorage />
          </Route>
          <Route path="/computers/parts&components" exact component={ComputerPartsComponents}>
            <NavBarSubBars />
            <ComputerPartsComponents />
          </Route>
          <Route path="/computers/software" exact component={ComputerSoftware}>
            <NavBarSubBars />
            <ComputerSoftware />
          </Route>



          <Route path="/beauty&health" exact component={BeautyHealth}>
            <NavBarSubBars />
            <BeautyHealth />
          </Route>
          <Route path="/beauty&health/allbeauty" exact component={AllBeauty}>
            <NavBarSubBars />
            <AllBeauty />
          </Route>
          <Route path="/beauty&health/premiumbeauty" exact component={PremiumBeauty}>
            <NavBarSubBars />
            <PremiumBeauty />
          </Route>
          <Route path="/beauty&health/skincare" exact component={SkinCare}>
            <NavBarSubBars />
            <SkinCare />
          </Route>
          <Route path="/beauty&health/allbeauty" exact component={AllBeauty}>
            <NavBarSubBars />
            <AllBeauty />
          </Route>
          <Route path="/beauty&health/salon&spa" exact component={SalonSpa}>
            <NavBarSubBars />
            <SalonSpa />
          </Route>
          <Route path="/beauty&health/mensgrooming" exact component={MensGrooming}>
            <NavBarSubBars />
            <MensGrooming />
          </Route>
          <Route path="/beauty&health/health&household&baby" exact component={HealthHousehold}>
            <NavBarSubBars />
            <HealthHousehold />
          </Route>
          <Route path="/beauty&health/vitamins&diet" exact component={VitaminsDiet}>
            <NavBarSubBars />
            <VitaminsDiet />
          </Route>


          <Route path="/food&grocery" exact component={FoodGrocery}>
            <NavBarSubBars />
            <FoodGrocery />
          </Route>
          <Route path="/food&grocery/grocery&gourmet" exact component={GroceryGourmet}>
            <NavBarSubBars />
            <GroceryGourmet />
          </Route>
          <Route path="/food&grocery/fresh" exact component={Fresh}>
            <NavBarSubBars />
            <Fresh />
          </Route>
          <Route path="/food&grocery/wholefoods" exact component={WholeFoods}>
            <NavBarSubBars />
            <WholeFoods />
          </Route>
          <Route path="/food&grocery/pantry" exact component={Pantry}>
            <NavBarSubBars />
            <Pantry />
          </Route>


          <Route path="/home&garden&tools" exact component={HomeGardenTools}>
            <NavBarSubBars />
            <HomeGardenTools />
          </Route>
          <Route path="/home&garden&tools/home" exact component={HomeHome}>
            <NavBarSubBars />
            <HomeHome />
          </Route>
          <Route path="/home&garden&tools/appliances" exact component={Appliances}>
            <NavBarSubBars />
            <Appliances />
          </Route>
          <Route path="/home&garden&tools/arts&crafts" exact component={ArtsCrafts}>
            <NavBarSubBars />
            <ArtsCrafts />
          </Route>
          <Route path="/home&garden&tools/bed&bath" exact component={BedBath}>
            <NavBarSubBars />
            <BedBath />
          </Route>
          <Route path="/home&garden&tools/collective&fineart" exact component={CollectiveFineArt}>
            <NavBarSubBars />
            <CollectiveFineArt />
          </Route>
          <Route path="/home&garden&tools/discover" exact component={Discover}>
            <NavBarSubBars />
            <Discover />
          </Route>
          <Route path="/home&garden&tools/events&partysupplies" exact component={EventsParty}>
            <NavBarSubBars />
            <EventsParty />
          </Route>
          <Route path="/home&garden&tools/exploreshowroom" exact component={ExploreShowroom}>
            <NavBarSubBars />
            <ExploreShowroom />
          </Route>
          <Route path="/home&garden&tools/fineart" exact component={FineArt}>
            <NavBarSubBars />
            <FineArt />
          </Route>
          <Route path="/home&garden&tools/furniture" exact component={HomeFurniture}>
            <NavBarSubBars />
            <HomeFurniture />
          </Route>
          <Route path="/home&garden&tools/garden&outdoor" exact component={GardenOutdoor}>
            <NavBarSubBars />
            <GardenOutdoor />
          </Route>
          <Route path="/home&garden&tools/homedecor" exact component={HomeDecor}>
            <NavBarSubBars />
            <HomeDecor />
          </Route>
          <Route path="/home&garden&tools/kitchen&dining" exact component={KitchenDining}>
            <NavBarSubBars />
            <KitchenDining />
          </Route>
          <Route path="/home&garden&tools/lighting" exact component={Lighting}>
            <NavBarSubBars />
            <Lighting />
          </Route>
          <Route path="/home&garden&tools/mattresses" exact component={Mattresses}>
            <NavBarSubBars />
            <Mattresses />
          </Route>
          <Route path="/home&garden&tools/petsupplies" exact component={HomePetSupplies}>
            <NavBarSubBars />
            <HomePetSupplies />
          </Route>
          <Route path="/home&garden&tools/shoproom" exact component={ShopRoom}>
            <NavBarSubBars />
            <ShopRoom />
          </Route>
          <Route path="/home&garden&tools/storage&organization" exact component={StorageOrganization}>
            <NavBarSubBars />
            <StorageOrganization />
          </Route>




          <Route path="/handmade" exact component={Handmade}>
            <NavBarSubBars />
            <Handmade />
          </Route>
          <Route path="/handmade/allhandmade" exact component={AllHandmade}>
            <NavBarSubBars />
            <AllHandmade />
          </Route>
          <Route path="/handmade/gifts" exact component={Gifts}>
            <NavBarSubBars />
            <Gifts />
          </Route>
          <Route path="/handmade/jewelry" exact component={HandmadeJewelry}>
            <NavBarSubBars />
            <HandmadeJewelry />
          </Route>
          <Route path="/handmade/home&kitchen" exact component={HomeKitchen}>
            <NavBarSubBars />
            <HomeKitchen />
          </Route>
          <Route path="/handmade/wedding" exact component={Wedding}>
            <NavBarSubBars />
            <Wedding />
          </Route>
          <Route path="/handmade/clothing&shoes" exact component={ClothingShoes}>
            <NavBarSubBars />
            <ClothingShoes />
          </Route>
          <Route path="/handmade/handbags&accessories" exact component={HandbagsAccessories}>
            <NavBarSubBars />
            <HandbagsAccessories />
          </Route>
          <Route path="/handmade/beauty&grooming" exact component={BeautyGrooming}>
            <NavBarSubBars />
            <BeautyGrooming />
          </Route>
          <Route path="/handmade/stationary&partysupplies" exact component={StationaryParty}>
            <NavBarSubBars />
            <StationaryParty />
          </Route>
          <Route path="/handmade/toys&games" exact component={ToysGames}>
            <NavBarSubBars />
            <ToysGames />
          </Route>
          <Route path="/handmade/petsupplies" exact component={HandmadePetSupplies}>
            <NavBarSubBars />
            <HandmadePetSupplies />
          </Route>
          <Route path="/handmade/homedecor" exact component={HandmadeHomeDecor}>
            <NavBarSubBars />
            <HandmadeHomeDecor />
          </Route>
          <Route path="/handmade/artwork" exact component={Artwork}>
            <NavBarSubBars />
            <Artwork />
          </Route>
          <Route path="/handmade/kitchen&dining" exact component={HandmadeKitchenDining}>
            <NavBarSubBars />
            <HandmadeKitchenDining />
          </Route>
          <Route path="/handmade/allhandmade" exact component={AllHandmade}>
            <NavBarSubBars />
            <AllHandmade />
          </Route>
          <Route path="/handmade/furniture" exact component={Furniture}>
            <NavBarSubBars />
            <Furniture />
          </Route>
          <Route path="/handmade/baby" exact component={Baby}>
            <NavBarSubBars />
            <Baby />
          </Route>
          <Route path="/handmade/sellon" exact component={SellOn}>
            <NavBarSubBars />
            <SellOn />
          </Route>



          <Route path="/outdoors" exact component={Outdoors}>
            <NavBarSubBars />
            <Outdoors />
          </Route>
          <Route path="/outdoors/outdoorclothing" exact component={OutdoorClothing}>
            <NavBarSubBars />
            <OutdoorClothing />
          </Route>
          <Route path="/outdoors/camping&hiking" exact component={CampingHiking}>
            <NavBarSubBars />
            <CampingHiking />
          </Route>
          <Route path="/outdoors/climbing" exact component={Climbing}>
            <NavBarSubBars />
            <Climbing />
          </Route>
          <Route path="/outdoors/cycling" exact component={Cycling}>
            <NavBarSubBars />
            <Cycling />
          </Route>
          <Route path="/outdoors/scooters&skates&skateboards" exact component={Skates}>
            <NavBarSubBars />
            <Skates />
          </Route>
          <Route path="/outdoors/watersports" exact component={WaterSports}>
            <NavBarSubBars />
            <WaterSports />
          </Route>
          <Route path="/outdoors/wintersports" exact component={WinterSports}>
            <NavBarSubBars />
            <WinterSports />
          </Route>
          <Route path="/outdoors/accessories" exact component={OutdoorAccessories}>
            <NavBarSubBars />
            <OutdoorAccessories />
          </Route>
          <Route path="/outdoors/alloutdoor" exact component={AllOutdoor}>
            <NavBarSubBars />
            <AllOutdoor />
          </Route>



          <Route path="/pet&supplies" exact component={PetSupplies}>
            <NavBarSubBars />
            <PetSupplies />
          </Route>
          <Route path="/pet&supplies/petprofiles" exact component={PetProfiles}>
            <NavBarSubBars />
            <PetProfiles />
          </Route>
          <Route path="/pet&supplies/dogsupplies" exact component={DogSupplies}>
            <NavBarSubBars />
            <DogSupplies />
          </Route>
          <Route path="/pet&supplies/dogfood" exact component={DogFood}>
            <NavBarSubBars />
            <DogFood />
          </Route>
          <Route path="/pet&supplies/catsupplies" exact component={CatSupplies}>
            <NavBarSubBars />
            <CatSupplies />
          </Route>
          <Route path="/pet&supplies/catfood" exact component={CatFood}>
            <NavBarSubBars />
            <CatFood />
          </Route>
          <Route path="/pet&supplies/fish&aquatic" exact component={FishAquatic}>
            <NavBarSubBars />
            <FishAquatic />
          </Route>
          <Route path="/pet&supplies/smallanimals" exact component={SmallAnimals}>
            <NavBarSubBars />
            <SmallAnimals />
          </Route>
          <Route path="/pet&supplies/birds" exact component={Birds}>
            <NavBarSubBars />
            <Birds />
          </Route>



          <Route path="/smarthome" exact component={SmartHome}>
            <NavBarSubBars />
            <SmartHome />
          </Route>
          <Route path="/smarthome/smarthome" exact component={SmartHome2}>
            <NavBarSubBars />
            <SmartHome2 />
          </Route>
          <Route path="/smarthome/smarthomelighting" exact component={SmartLighting}>
            <NavBarSubBars />
            <SmartLighting />
          </Route>
          <Route path="/smarthome/smartlocks&entry" exact component={SmartLock}>
            <NavBarSubBars />
            <SmartLock />
          </Route>
          <Route path="/smarthome/securitycameras&systems" exact component={SecurityCameras}>
            <NavBarSubBars />
            <SecurityCameras />
          </Route>
          <Route path="/smarthome/plugs&outlets" exact component={PlugsOutlet}>
            <NavBarSubBars />
            <PlugsOutlet />
          </Route>
          <Route path="/smarthome/newsmartdevices" exact component={SmartDevices}>
            <NavBarSubBars />
            <SmartDevices />
          </Route>
          <Route path="/smarthome/heating&cooling" exact component={HeatingCooling}>
            <NavBarSubBars />
            <HeatingCooling />
          </Route>
          <Route path="/smarthome/detectors&sensors" exact component={DetectorsSensors}>
            <NavBarSubBars />
            <DetectorsSensors />
          </Route>
          <Route path="/smarthome/homeentertainment" exact component={HomeEntertainment}>
            <NavBarSubBars />
            <HomeEntertainment />
          </Route>
          <Route path="/smarthome/pet" exact component={SmartPet}>
            <NavBarSubBars />
            <SmartPet />
          </Route>
          <Route path="/smarthome/voiceassistants&hubs" exact component={VoiceAssistants}>
            <NavBarSubBars />
            <VoiceAssistants />
          </Route>
          <Route path="/smarthome/kitchen" exact component={Kitchen}>
            <NavBarSubBars />
            <Kitchen />
          </Route>
          <Route path="/smarthome/vacuum&mops" exact component={SmartVacuums}>
            <NavBarSubBars />
            <SmartVacuums />
          </Route>
          <Route path="/smarthome/lawn&garden" exact component={LawnGarden}>
            <NavBarSubBars />
            <LawnGarden />
          </Route>
          <Route path="/smarthome/wifi&networking" exact component={WifiNetworking}>
            <NavBarSubBars />
            <WifiNetworking />
          </Route>



          <Route path="/toys&kids&baby" exact component={ToysKidsBaby}>
            <NavBarSubBars />
            <ToysKidsBaby />
          </Route>
          <Route path="/toys&kids&baby/toys&games" exact component={KidsToysGames}>
            <NavBarSubBars />
            <KidsToysGames />
          </Route>
          <Route path="/toys&kids&baby/baby" exact component={Babys}>
            <NavBarSubBars />
            <Babys />
          </Route>
          <Route path="/toys&kids&baby/diapering" exact component={Diapering}>
            <NavBarSubBars />
            <Diapering />
          </Route>
          <Route path="/toys&kids&baby/videogamekids" exact component={VideoGameKids}>
            <NavBarSubBars />
            <VideoGameKids />
          </Route>
          <Route path="/toys&kids&baby/family" exact component={Family}>
            <NavBarSubBars />
            <Family />
          </Route>
          <Route path="/toys&kids&baby/teen" exact component={Teen}>
            <NavBarSubBars />
            <Teen />
          </Route>
          <Route path="/toys&kids&baby/babyregistry" exact component={BabyRegistry}>
            <NavBarSubBars />
            <BabyRegistry />
          </Route>
          <Route path="/toys&kids&baby/kidsbirthdays" exact component={KidsBirthdays}>
            <NavBarSubBars />
            <KidsBirthdays />
          </Route>



          <Route path="/sports" exact component={Sports}>
            <NavBarSubBars />
            <Sports />
          </Route>
          <Route path="/sports/athleticclothing" exact component={AthleticClothing}>
            <NavBarSubBars />
            <AthleticClothing />
          </Route>
          <Route path="/sports/exercise&fitness" exact component={ExerciseFitness}>
            <NavBarSubBars />
            <ExerciseFitness />
          </Route>
          <Route path="/sports/hunting&fishing" exact component={HuntingFishing}>
            <NavBarSubBars />
            <HuntingFishing />
          </Route>
          <Route path="/sports/golf" exact component={Golf}>
            <NavBarSubBars />
            <Golf />
          </Route>
          <Route path="/sports/fanshop" exact component={FanShop}>
            <NavBarSubBars />
            <FanShop />
          </Route>
          <Route path="/sports/leisure&game" exact component={LeisureGame}>
            <NavBarSubBars />
            <LeisureGame />
          </Route>
          <Route path="/sports/sports&collectibles" exact component={SportsCollectibles}>
            <NavBarSubBars />
            <SportsCollectibles />
          </Route>
          <Route path="/sports/allsports&fitness" exact component={AllSports}>
            <NavBarSubBars />
            <AllSports />
          </Route>
          <Route path="/sports/newgearinnovations" exact component={NewGear}>
            <NavBarSubBars />
            <NewGear />
          </Route>



          <Route path="/automotive&industrial" exact component={AutomotiveIndustrial}>
            <NavBarSubBars />
            <AutomotiveIndustrial />
          </Route>
          <Route path="/automotive&industrial/parts&accessories" exact component={PartsAccessories}>
            <NavBarSubBars />
            <PartsAccessories />
          </Route>
          <Route path="/automotive&industrial/tools&equipment" exact component={ToolsEquipment}>
            <NavBarSubBars />
            <ToolsEquipment />
          </Route>
          <Route path="/automotive&industrial/carelectronics&gps" exact component={AutoCarElectronics}>
            <NavBarSubBars />
            <AutoCarElectronics />
          </Route>
          <Route path="/automotive&industrial/tires&wheels" exact component={TiresWheel}>
            <NavBarSubBars />
            <TiresWheel />
          </Route>
          <Route path="/automotive&industrial/motorcycle&powersports" exact component={MotorcyclePowerSports}>
            <NavBarSubBars />
            <MotorcyclePowerSports />
          </Route>
          <Route path="/automotive&industrial/rvpart&accessories" exact component={RV}>
            <NavBarSubBars />
            <RV />
          </Route>
          <Route path="/automotive&industrial/vehicles" exact component={Vehicles}>
            <NavBarSubBars />
            <Vehicles />
          </Route>
          <Route path="/automotive&industrial/yourgarage" exact component={Garage}>
            <NavBarSubBars />
            <Garage />
          </Route>
          
          {/* Clothing COMPONENTS */}
          <Route path="/clothing" exact component={Clothing}>
            {/* <NavBar /> */}
            <NavBarSubBars />
            <Clothing />
          </Route>
          <Route path="/clothing/shirts&tees" exact component={ClothingApparel}>
            {/* <NavBar /> */}
            <NavBarSubBars />
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
            {/* <NavBar /> */}
            <NavBarSubBars />
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
            {/* <NavBar /> */}
            <NavBarSubBars />
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
            {/* <NavBar /> */}
            <NavBarSubBars />
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
            {/* <NavBar /> */}
            <NavBarSubBars />
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
            {/* <NavBar /> */}
            <NavBarSubBars />
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
            {/* <NavBar /> */}
            <NavBarSubBars />
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
