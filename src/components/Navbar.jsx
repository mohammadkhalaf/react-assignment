import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../assets/Crito - Design and Images/images/logotype.svg'
import tel from '../assets/Crito - Design and Images/images/telephon.svg'
import envelope from '../assets/Crito - Design and Images/images/envelope.svg'
import location from '../assets/Crito - Design and Images/images/location.svg'
import facebook from '../assets/Crito - Design and Images/images/facebook.svg'
import twitter from '../assets/Crito - Design and Images/images/twitter.svg'
import linkedin from '../assets/Crito - Design and Images/images/in.svg'
import instagram from '../assets/Crito - Design and Images/images/instagram.svg'
import arrow from '../assets/Crito - Design and Images/images/arrow.svg'

const Navbar = () => {
  return <>
     <header className="primary-header">
      <div className="container section-container">
        <a href="#" className="logo">
          <img
            src={logo}
            alt="Crito logo"
          />
        </a>
        <div className="header_container">
          <div className="contact">
            <ul className="contact_list">
              <li className="contact_list-item">
                <img
                  src={tel}
                  alt="telefon icon"
                />
                +46 (8) 121 470 50
              </li>
              <li className="contact_list-item">
                <img
                  src={envelope}
                  alt="envelope icon"
                />
                info@crito.com
              </li>
              <li className="contact_list-item">
                <img
                  src={location}
                  alt=" location icon"
                />
                Sveavägen 31, 111 34 STOCKHOLM
              </li>
            </ul>
            <ul className="social_icons">
              <li>
                <img
                  src={facebook}
                  alt="facebook icon"
                />
              </li>
              <li>
                <img
                  src={twitter}
                  alt="twitter icon"
                />
              </li>
              <li>
                <img
                  src={instagram}
                  alt="instagram icon"
                />
              </li>
              <li>
                <img
                  src={linkedin}
                  alt="linkedin "
                />
              </li>
            </ul>
          </div>
          <nav className="nav">
            <ul className="nav_list">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <button>
                Login
                <img
                  src={arrow}
                  alt="arrow icon"
                />
              </button>
            </ul>
          </nav>
        </div>
        <button className="nav_toggle">
         <GiHamburgerMenu/>
        </button>
      </div>
    </header>
  </>
};

export default Navbar;
