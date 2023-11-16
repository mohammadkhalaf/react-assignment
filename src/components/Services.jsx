import arrowRight from "../assets/Crito - Design and Images/images/Arrow right up.svg";
import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import lines from "../assets/Crito - Design and Images/images/background-lines-right.svg";
const servicesArray = [
  {
    title: "Business Advice",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elitVero  aspernatur accusamus praesentium?",
    icon: arrowRight,
  },
  {
    title: "Startup Business",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elitVero  aspernatur accusamus praesentium?",
    icon: arrowRight,
  },
  {
    title: "Financial Advice",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elitVero  aspernatur accusamus praesentium?",
    icon: arrowRight,
  },
  {
    title: "Risk Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elitVero  aspernatur accusamus praesentium?",
    icon: arrowRight,
  },
];

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="services_wrapper section-container">
          <p className="sub-header">Our services</p>
          <h2>We provide The Best Services For Consulting</h2>
          <div className="services_container">
            {servicesArray.map((servicecard) => {
              return (
                <div className="service_card" key={servicecard.title}>
                  <div className="line"></div>
                  <h4>{servicecard.title}</h4>
                  <p>{servicecard.desc}</p>
                  <img
                    src={servicecard.icon}
                    alt={`${servicecard.title} icon`}
                    className="arrow_icon"
                  />
                </div>
              );
            })}
          </div>
          <div className="btn-container">
            <a href="#" className="service_btn">
              Browse Services
              <img src={arrow} alt="arrow icon" />
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={lines} alt="lines" />
        </div>
      </section>
    </>
  );
};

export default Services;
