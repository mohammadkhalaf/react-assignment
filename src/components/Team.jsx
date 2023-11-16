import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import arrowwhite from "../assets/Crito - Design and Images/images/arrrowwhite.svg";
import Kristinepalmer from "../assets/Crito - Design and Images/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg";
import MarkAburi from "../assets/Crito - Design and Images/images/itay-verchik-6ZKGBzrDd3I-unsplash copy.jpg";
import kimperlyhansen from "../assets/Crito - Design and Images/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash copy.jpg";
import justinwilloman from "../assets/Crito - Design and Images/images/the-connected-narrative-N8lRH2uxih4-unsplash copy.jpg";
import Slider from "./Slider";
import Stars from "./Stars";
import Testimonial from "./Testimonial";

const members = [
  {
    name: "Kristine Palmer",
    img: Kristinepalmer,
    jobTitle: "Chef Operation Officer",
  },
  {
    name: "Mark Aubri",
    img: MarkAburi,
    jobTitle: "Senior Consultant",
  },
  {
    name: "Kimberly Hansen",
    img: kimperlyhansen,
    jobTitle: "Senior Consultant",
  },
  {
    name: "Justin Willoman",
    img: justinwilloman,
    jobTitle: "Senior Tech Consultant",
  },
];

const Team = () => {
  return (
    <>
      <section className="team">
        <div className="section-container">
          <div className="team_header">
            <p className="sub-header">Meet Our Team</p>
            <div className="team_header-wrapper">
              <h2>Experience Team Members</h2>
              <button>
                Browse Team <img src={arrow} alt="arrow icon" />
              </button>
            </div>
          </div>
          <div className="team_container">
            {members.map((member) => {
              return (
                <div className="member_card" key={member.name}>
                  <img src={member.img} alt={member.name} />
                  <h4 className="member_name">{member.name}</h4>
                  <p className="job_title">{member.jobTitle}</p>
                </div>
              );
            })}
          </div>
          <Slider />
          <div className="testimonials">
            <div className="header_wrapper">
              <p className="sub-header">Testimonial</p>
              <h2>What Our Client Says</h2>
            </div>
            <Testimonial />
          </div>

          {/* <button className="testimonials_btn">All Reviews <img src="./assets/Crito - Design and Images/images/arrrowwhite.svg" alt="arrow icon"/></button> */}
        </div>
      </section>
    </>
  );
};

export default Team;
