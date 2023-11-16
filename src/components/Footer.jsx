import rectangle from "../assets/Crito - Design and Images/images/Rectangle 116.svg";
import logo from "../assets/Crito - Design and Images/images/logotype-white.svg";
import facebook from "../assets/Crito - Design and Images/images/facebook.svg";
import twitter from "../assets/Crito - Design and Images/images/twitter.svg";
import instagram from "../assets/Crito - Design and Images/images/instagram.svg";
import linkedin from "../assets/Crito - Design and Images/images/in.svg";
const links = [
  {
    listsHeader: "Company",
    links: [
      { link: "About", path: "#" },
      { link: "Feature", path: "#" },
      { link: "Work", path: "#" },
      { link: "Career", path: "#" },
    ],
  },
  {
    listsHeader: "Help",
    links: [
      { link: "Customer Support", path: "#" },
      { link: "Delivery Details", path: "#" },
      { link: "Terms & Conditions", path: "#" },
      { link: "Privacy policy", path: "#" },
    ],
  },
  {
    listsHeader: "Resources",
    links: [
      { link: "Free eBooks", path: "#" },
      { link: "Development tutorial", path: "#" },
      { link: "How to-Blog", path: "#" },
      { link: "Youtube Playlist", path: "#" },
    ],
  },
  {
    listsHeader: "Links",
    links: [
      { link: "Free eBooks", path: "#" },
      { link: "Development tutorial", path: "#" },
      { link: "How to-Blog", path: "#" },
      { link: "Youtube Playlist", path: "#" },
    ],
  },
];
const socialIcons = [facebook, twitter, instagram, linkedin];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="img_container">
          <img src={rectangle} alt="wavy line" className="wavy_line" />
        </div>

        <div className="footer_wrapper">
          <div className="footer_nav section-container">
            <section className="about_crito">
              <a href="index.html">
                <img src={logo} alt="logo icon" />
              </a>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                dolorum laudantium, rerum fugiat impedit tempora obcaecati
                nesciunt deserunt nobis repellat.
              </p>
            </section>
            <div className="nav_lists">
              {links.map((linkSection, index) => {
                return (
                  <section className="nav_list" key={index}>
                    <h3>{linkSection.listsHeader}</h3>
                    <div className="links">
                      {linkSection.links.map((links, index) => {
                        return (
                          <a href={links.path} key={index}>
                            {links.link}
                          </a>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="footer_social_copyright section-container">
            <div className="copyright">
              &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </div>
            <div className="social_links">
              <ul className="social_icons">
                {socialIcons.map((icon) => {
                  return (
                    <li key={icon}>
                      <img className="white_icon" src={icon} alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
