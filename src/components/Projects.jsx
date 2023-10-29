import growbusiness from '../assets/Crito - Design and Images/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'
import responsivewebsite from '../assets/Crito - Design and Images/images/marek-levak-zANXcXyByos-unsplash.jpg'
import educate from '../assets/Crito - Design and Images/images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import businessinsight from '../assets/Crito - Design and Images/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import arrow from '../assets/Crito - Design and Images/images/arrow.svg'
import arrowWhite from '../assets/Crito - Design and Images/images/arrrowwhite.svg'
const projectCards=[
  {
    title:'Grow your business',
    img:growbusiness
 },
 {
  title:'Why your client needs a responsive website', 
  img:responsivewebsite

 },
 {
  title:'Educate your employees to get better results',
  img:educate
 },
 {
  title:' Business Insight is an important piece of your business',
  img:businessinsight
 }
]

const Projects = () => {
  return  <>
    <section class="projects section-container">
        <div class="header_wrapper">
          <p class="sub-header">Projects & Case Studies</p>
          <h2>Let's Looks Our Global Projects</h2>
        </div>

        <div class="projects_container">
          {projectCards.map((card)=>{
            return<div class="project_card">
            <img
              src={card.img}
              alt={card.title}
            />
            <p class="project_title">{card.title}</p>
            <button class="project_btn">Read more <img src={arrow} alt="arrow icon"/>
             </button>
          </div>
          })}
        </div>
        <div class="btn-container">
          <a href="#" class="projects_btn">All Recent Projects <img src={arrowWhite} alt="arrow icon"/></a>
        </div>
      </section>
  </>
};

export default Projects;
