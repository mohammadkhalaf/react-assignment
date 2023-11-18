import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import arrowWhite from "../assets/Crito - Design and Images/images/arrrowwhite.svg";
import { projectCards } from "../constants";

const Projects = () => {
  return (
    <>
      <section className="projects section-container">
        <div className="header_wrapper">
          <p className="sub-header">Projects & Case Studies</p>
          <h2>Let's Looks Our Global Projects</h2>
        </div>

        <div className="projects_container">
          {projectCards.map((card) => {
            return (
              <div className="project_card" key={card.title}>
                <img src={card.img} alt={card.title} />
                <p className="project_title">{card.title}</p>
                <button className="project_btn">
                  Read more <img src={arrow} alt="arrow icon" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="btn-container">
          <a href="#" className="projects_btn">
            All Recent Projects <img src={arrowWhite} alt="arrow icon" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
