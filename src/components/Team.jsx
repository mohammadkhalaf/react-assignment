import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import { members } from "../constants";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

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
