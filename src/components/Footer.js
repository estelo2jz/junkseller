import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer class="footer">
      <div className="footer__flex-container">
        <div className="footer__box">
          <h5>Categories</h5>
          <ul>
            <Link to="/electronics&computers"><p>Electronics & Computers</p></Link>
            <Link to="/clothing&jewelry"><p>Clothing & Jewelry</p></Link>
            {/* <Link to="/smarthome"><p>SmartHome</p></Link>
            <Link to="/homegardentools"><p>Home, Garden & Tools</p></Link>
            <Link to="/petsupplies"><p>Pet Supplies</p></Link>
            <Link to="/foodgrocery"><p>Food & Grocery</p></Link>
            <Link to="/beautyhealth"><p>Beauty & Health</p></Link>
            <Link to="/toyskidsbaby"><p>Toys, Kids & Baby</p></Link>
            <Link to="/handmade"><p>Handmade</p></Link>
            <Link to="/sports"><p>Sports</p></Link>
            <Link to="/outdoors"><p>Outdoors</p></Link>
            <Link to="/automotiveindustrial"><p>Automotive & Industrial</p></Link> */}
          </ul>
        </div>
        <div className="footer__box">
          <h5>Make Money</h5>
          <ul>
            <Link to="/"><p>Sell apps</p></Link>
            <Link to="/"><p>Affiliate</p></Link>
            <Link to="/"><p>Advertise Products</p></Link>
            <Link to="/"><p>Host a Hub</p></Link>
            <Link to="/"><p>See More</p></Link>
          </ul>
        </div>
        <div className="footer__box">
          <h5>Let Us Help You</h5>
          <ul>
            <Link to="/"><p>COVID-19</p></Link>
            <Link to="/"><p>Your Account</p></Link>
            <Link to="/"><p>Your Orders</p></Link>
            <Link to="/"><p>Rates & Policies</p></Link>
            <Link to="/"><p>Returns & Replacements</p></Link>
            <Link to="/"><p>Assistant</p></Link>
            <Link to="/"><p>Help</p></Link>
          </ul>
        </div>
        <div className="footer__box">
          <h5>Get to Know Us</h5>
          <ul>
            <Link to="/"><p>Careers</p></Link>
            <Link to="/"><p>Blog</p></Link>
            <Link to="/"><p>About Junk-Seller</p></Link>
            <Link to="/"><p>Press Center</p></Link>
          </ul>
        </div>
      </div>
      {/* <div class="footer-left">
        <h1>JUNK-SELLER</h1>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook-square"></i></a>
          <a href="#"><i class="fab fa-youtube-square"></i></a>
          <a href="#"><i class="fab fa-instagram-square"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div> */}
      {/* <ul class="footer-right"> */}
        {/* <li>
          <h2>Categories</h2>
          <ul class="box">
            <Link to="/electronics"><p>Electronics</p></Link>
            <Link to="/computers"><p>Computers</p></Link>
            <Link to="/smarthome"><p>SmartHome</p></Link>
            <Link to="/homegardentools"><p>Home, Garden & Tools</p></Link>
            <Link to="/petsupplies"><p>Pet Supplies</p></Link>
            <Link to="/foodgrocery"><p>Food & Grocery</p></Link>
            <Link to="/beautyhealth"><p>Beauty & Health</p></Link>
            <Link to="/toyskidsbaby"><p>Toys, Kids & Baby</p></Link>
            <Link to="/handmade"><p>Handmade</p></Link>
            <Link to="/sports"><p>Sports</p></Link>
            <Link to="/outdoors"><p>Outdoors</p></Link>
            <Link to="/automotiveindustrial"><p>Automotive & Industrial</p></Link>

          </ul>
        </li> */}
        {/* <li class="features">
          <h2>Useful Links</h2>
          <ul class="box">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Certificates</a></li>
            <li><a href="#">Customer</a></li>
          </ul>
        </li> */}
        {/* <li>
          <h2>Address</h2>
          <ul class="box">
            <li><a href="#">123, Westwood Ave</a></li>
            <li><a href="#">DA15 9PS, Sidcup</a></li>
            <li><a href="#">London</a></li>
            <li><a href="#">United Kingdom</a></li>
          </ul>
        </li> */}
      {/* </ul> */}
      {/* <hr /> */}
      <div class="footer__bottom">
        <p>All right reserved by &copy;JUNKSELLER 2020 </p>
        <div>Icons made by <a href="" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </footer>
  )
}

export default Footer
