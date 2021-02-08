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
import ClothingJewelry from './components/category/ClothingJewelry';

import ElectronicsMenu from './components/ElectricCategory/ElectronicsMenu';
import ClothingJewelryMenu from './components/ClothingJewelryCategory/ClothingJewelryMenu';

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
import ComputerTablet from './components/ElectricCategory/Category/ComputerTablet';
import ComputerAccessories from './components/ElectricCategory/Category/ComputerAccessories';
import ComputerComponents from './components/ElectricCategory/Category/ComputerComponents';
import DrivesStorage from './components/ElectricCategory/Category/DrivesStorage';
import Monitors from './components/ElectricCategory/Category/Monitors';
import Networking from './components/ElectricCategory/Category/Networking';
import Software from './components/ElectricCategory/Category/Software';


// 
import ClothingJewelryApperal from './components/ClothingJewelryCategory/Category/Apperal';
import ClothingJewelryChainz from './components/ClothingJewelryCategory/Category/JewelryChainz';
import ClothingJewelryGrillz from './components/ClothingJewelryCategory/Category/JewelryGrillz';
import ClothingJewelryWatchz from './components/ClothingJewelryCategory/Category/JewelryWatchz';
import ClothingJewelryPendantz from './components/ClothingJewelryCategory/Category/JewelryPendantz';

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
          <Route path="/electronics&computers" 
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Software"
            />
            <ElectronicsBase />
          </Route>
          <Route path="/electronics/computertablet" exact component={ComputerTablet}>
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Printers & Ink"
              category17="Software"
              category19="Office & School Supllies"
              category20="Trade In Your Electronics"
            />
            <ComputerTablet />
          </Route>
          <Route path="/electronics/computeraccessories" exact component={ComputerAccessories}>
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Printers & Ink"
              category17="Software"
              category19="Office & School Supllies"
              category20="Trade In Your Electronics"
            />
            <ComputerAccessories />
          </Route>
          <Route path="/electronics/computercomponents" exact component={ComputerComponents}>
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Printers & Ink"
              category17="Software"
              category19="Office & School Supllies"
              category20="Trade In Your Electronics"
            />
            <ComputerComponents />
          </Route>
          <Route path="/electronics/drivesstorage" exact component={DrivesStorage}>
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Printers & Ink"
              category17="Software"
              category19="Office & School Supllies"
              category20="Trade In Your Electronics"
            />
            <DrivesStorage />
          </Route>
          <Route path="/electronics/monitors" exact component={Monitors}>
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Printers & Ink"
              category17="Software"
              category19="Office & School Supllies"
              category20="Trade In Your Electronics"
            />
            <Monitors />
          </Route>
          <Route path="/electronics/networking" exact component={Networking}>
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Printers & Ink"
              category17="Software"
              category19="Office & School Supllies"
              category20="Trade In Your Electronics"
            />
            <Networking />
          </Route>
          <Route path="/electronics/software" exact component={Software}>
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
              category11="Computers, Tablets & PC"
              category12="Monitors"
              category13="Accessories"
              category14="Networking"
              category15="Hard Drives & Storage"
              category16="Computer Parts & Components"
              category17="Printers & Ink"
              category17="Software"
              category19="Office & School Supllies"
              category20="Trade In Your Electronics"
            />
            <Software />
          </Route>
          



          {/* Clothing & Jewelry COMPONENTS */}
          <Route path="/clothing&jewelry" exact component={ClothingJewelry}>
            <NavBar />
            <ClothingJewelry />
          </Route>
          <Route path="/clothing&jewelry/apperal" exact component={ClothingJewelryApperal}>
            <NavBar />
            <ClothingJewelryMenu
              category0="Apperal"
              category1="Chainz"
              category2="Watchz"
              category3="Grillz"
              category4="Pendantz"
            />
            <ClothingJewelryApperal />
          </Route>
          <Route path="/clothing&jewelry/chainz" exact component={ClothingJewelryChainz}>
            <NavBar />
            <ClothingJewelryMenu
              category0="Apperal"
              category1="Chainz"
              category2="Watchz"
              category3="Grillz"
              category4="Pendantz"
            />
            <ClothingJewelryChainz />
          </Route>
          <Route path="/clothing&jewelry/watchz" exact component={ClothingJewelryWatchz}>
            <NavBar />
            <ClothingJewelryMenu
              category0="Apperal"
              category1="Chainz"
              category2="Watchz"
              category3="Grillz"
              category4="Pendantz"
            />
            <ClothingJewelryWatchz />
          </Route>
          <Route path="/clothing&jewelry/grillz" exact component={ClothingJewelryGrillz}>
            <NavBar />
            <ClothingJewelryMenu
              category0="Apperal"
              category1="Chainz"
              category2="Watchz"
              category3="Grillz"
              category4="Pendantz"
            />
            <ClothingJewelryGrillz />
          </Route>
          <Route path="/clothing&jewelry/pendantz" exact component={ClothingJewelryPendantz}>
            <NavBar />
            <ClothingJewelryMenu
              category0="Apperal"
              category1="Chainz"
              category2="Watchz"
              category3="Grillz"
              category4="Pendantz"
            />
            <ClothingJewelryPendantz />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
