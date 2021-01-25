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
        </div>
        <div className="footer__box">
          <h5>Make Money with Us</h5>
          <ul>
            <Link to="/"><p>Sell products on Junk-Seller</p></Link>
            <Link to="/"><p>Sell apps on Junk-Seller</p></Link>
            <Link to="/"><p>Become an Affiliate</p></Link>
            <Link to="/"><p>Advertise Your Products</p></Link>
            <Link to="/"><p>Host an Junk-Seller Hub</p></Link>
            <Link to="/"><p>See More Make Money with Us</p></Link>
          </ul>
        </div>
        <div className="footer__box">
          <h5>Get to Know Us</h5>
          <ul>
            <Link to="/"><p>Careers</p></Link>
            <Link to="/"><p>Blog</p></Link>
            <Link to="/"><p>About Junk-Seller</p></Link>
            <Link to="/"><p>Press Center</p></Link>
            <Link to="/"><p>Investor Relations</p></Link>
            <Link to="/"><p>Junk-Seller Devices</p></Link>
            <Link to="/"><p>Junk-Seller Tours</p></Link>
          </ul>
        </div>
        <div className="footer__box">
          <h5>Let Us Help You</h5>
          <ul>
            <Link to="/"><p>Junk-Seller and COVID-19</p></Link>
            <Link to="/"><p>Your Account</p></Link>
            <Link to="/"><p>Your Orders</p></Link>
            <Link to="/"><p>Shipping Rates & Policies</p></Link>
            <Link to="/"><p>Junk-Seller Prime</p></Link>
            <Link to="/"><p>Returns & Replacements</p></Link>
            <Link to="/"><p>Manage Your Content and Devices</p></Link>
            <Link to="/"><p>Junk-Seller Assistant</p></Link>
            <Link to="/"><p>Help</p></Link>
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
        <div>Icons made by <a href="" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <p>All right reserved by &copy;JUNK-SELLER 2020 </p>
      </div>
    </footer>
  )
}

export default Footer
