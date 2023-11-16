import wavyLine from "../../assets/Crito - Design and Images/images/background-wavy-lines-white.svg";
import founder from "../../assets/Crito - Design and Images/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg";
import arrow from "../../assets/Crito - Design and Images/images/arrrowwhite.svg";
import videoimg from "../../assets/Crito - Design and Images/images/Video.svg";

const About = () => {
  return (
    <>
      <section className="about section-container">
        <div className="image_container">
          <img className="wavy_line" src={wavyLine} alt="wavy line" />
          <img className="about_image" src={founder} alt="Founder " />
          <div className="founder_card">
            <h6 className="founder_name">
              Samantha Brown, <span>Founder</span>
            </h6>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          </div>
        </div>
        <div className="about_content">
          <p className="sub-header">About Company</p>
          <h2>We are Business Consulting & Credit Repair Experts</h2>
          <p className="about_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            quibusdam quis modi vero iste, natus quasi odit rem ex possimus et
            harum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laboriosam voluptatibus nam laudantium, magnam ab vero velit sed
            necessitatibus maiores!
          </p>
          <div className="buttons_containers">
            <button>
              Learn more
              <img src={arrow} alt="arrow" className="arrow" />
            </button>
            <button className="video_btn">
              <img src={videoimg} alt="video icon" />
              Intro video
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
