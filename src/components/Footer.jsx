import rectangle from '../assets/Crito - Design and Images/images/Rectangle 116.svg'
import logo from '../assets/Crito - Design and Images/images/logotype-white.svg'
import facebook from '../assets/Crito - Design and Images/images/facebook.svg'
import twitter from '../assets/Crito - Design and Images/images/twitter.svg'
import instagram from '../assets/Crito - Design and Images/images/instagram.svg'
import linkedin from '../assets/Crito - Design and Images/images/in.svg'
const links=[
  {
    listsHeader:'Company',
    links:[{link:'About',path:'#'},{link:'Feature',path:'#'},{link:'Work',path:'#'}, {link:'Career',path:'#'}]
  },
   {
    listsHeader:'Help',
    links:[{link:'Customer Support',path:'#'},{link:'Delivery Details',path:'#'},{link:'Terms & Conditions',path:'#'}, {link:'Privacy policy',path:'#'}]
  },
   {
    listsHeader:'Resources',
    links:[{link:'Free eBooks',path:'#'},{link:'Development tutorial',path:'#'},{link:'How to-Blog',path:'#'}, {link:'Youtube Playlist',path:'#'}]
  },
    {
    listsHeader:'Links',
    links:[{link:'Free eBooks',path:'#'},{link:'Development tutorial',path:'#'},{link:'How to-Blog',path:'#'}, {link:'Youtube Playlist',path:'#'}]
  }
]
const socialIcons=[
  facebook,twitter,instagram,linkedin

]

const Footer = () => {
  return <>
   <footer class="footer">
    
        <div class="img_container">
          <img src={rectangle} alt="wavy line" class="wavy_line"/>
        </div>

        <div class="footer_wrapper">
          <div class="footer_nav section-container">
            <section class="about_crito">
              <a href="index.html">
                <img
                src={logo}
                alt="logo icon"
              />
              </a>
            
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                dolorum laudantium, rerum fugiat impedit tempora obcaecati
                nesciunt deserunt nobis repellat.
              </p>
            </section>
            <div class="nav_lists">
              {links.map((linkSection)=>{
                return  <section class="nav_list">
                <h3>{linkSection.listsHeader}</h3>
                <div class="links">
                {linkSection.links.map((links)=>{
                  return  <a href={links.path}>{links.link}</a>
                })}
                </div>
               
              </section>
              })}
            </div>
          </div>
          <hr />
          <div class="footer_social_copyright section-container">
            <div class="copyright">
              &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </div>
            <div class="social_links">
              <ul class="social_icons">
                {socialIcons.map((icon)=>{
                  return <li>
                       <img
                    class="white_icon"
                    src={icon}
                    alt=''
                  />
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer> 
  </>
};

export default Footer;
