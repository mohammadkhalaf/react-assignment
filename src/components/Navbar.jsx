import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/Crito - Design and Images/images/logotype.svg";
import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/Context";
import { contactList, navLink, socialIcons } from "../constants";

const Navbar = () => {
  const { openModal, isModalOpen } = useAppContext();
  const clickHandler = () => {
    openModal();
  };
  return (
    <>
      {isModalOpen && <Modal />}
      <header className="primary-header">
        <div className="container section-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Crito logo" />
          </Link>

          <div className="header_container">
            <div className="contact">
              <ul className="contact_list">
                {contactList.map((item) => {
                  return (
                    <i className="contact_list-item" key={item.info}>
                      <img src={item.src} alt={item.alt} />
                      {item.info}
                    </i>
                  );
                })}
              </ul>
              <ul className="social_icons">
                {socialIcons.map((icon) => {
                  return (
                    <li key={icon.alt}>
                      <img src={icon.src} alt={icon.alt} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <nav className="nav">
              <ul className="nav_list">
                {navLink.map((link) => {
                  return (
                    <li key={link.page}>
                      <Link to={link.page}>{link.page}</Link>
                    </li>
                  );
                })}

                <button>
                  Login
                  <img src={arrow} alt="arrow icon" />
                </button>
              </ul>
            </nav>
          </div>
          <button className="nav_toggle" onClick={clickHandler}>
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
