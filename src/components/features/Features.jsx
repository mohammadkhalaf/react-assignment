import { featuresArray } from "../../constants";
import arrow from "../../assets/Crito - Design and Images/images/arrow.svg";
const Features = () => {
  return (
    <>
      <section className="features">
        <div className="features_wrapper section-container">
          <div className="features_content">
            <p className="sub-header">Features</p>
            <h2>Our Accounting is trusted by thousands of companies</h2>
            <button>
              Learn More
              <img src={arrow} alt="arrow icon" />
            </button>
          </div>
          <div className="features_container">
            {featuresArray.map((feature, index) => {
              return (
                <div className="single_feature" key={index}>
                  <img src={feature.img} alt={feature.title} />
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
