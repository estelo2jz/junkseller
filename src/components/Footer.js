import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-left">
        <h1>JUNK-SELLER</h1>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook-square"></i></a>
          <a href="#"><i class="fab fa-youtube-square"></i></a>
          <a href="#"><i class="fab fa-instagram-square"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <ul class="footer-right">
        <li>
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
        </li>
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
      </ul>
      <div class="footer-bottom">
        <p>All right reserved by &copy;JUNK-SELLER 2020 </p>
      </div>
    </footer>
  )
}

export default Footer
