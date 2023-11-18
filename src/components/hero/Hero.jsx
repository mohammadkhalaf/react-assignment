import arrow from "../../assets/Crito - Design and Images/images/arrow.svg";
import heroimg from "../../assets/Crito - Design and Images/images/showcase-image.svg";
import lines from "../../assets/Crito - Design and Images/images/background-lines.svg";
import "../../scss/index.scss";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <section className="banner section-container x">
        <div className="content">
          <h1>We provide The Best business solutions</h1>
          <p>
            Establish your vision and value propositions and turn them into
            testable prototypes
          </p>
          <div className="buttons-containers">
            <button>
              Get consulting
              <img src={arrow} alt="arrow icon" />
            </button>
            <button>
              Learn more
              <img src={arrow} alt="arrow icon" />
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src={heroimg} alt="banner" />
        </div>
        <div className="line-container">
          <img src={lines} alt="background lines images" />
        </div>
      </section>
    </>
  );
};

export default Hero;
