import { chooseUs } from "../constants";
import twowomen from "../assets/Crito - Design and Images/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg";
const WhyChoosingUs = () => {
  return (
    <>
      <section className="why_choose-us section-container">
        <div className="content">
          <p className="title">Why Choose Us</p>
          <h2>Why We Are The Best Business Consulting Agency</h2>
          <div className="benefits_list">
            <ul>
              {chooseUs.map((item) => {
                return (
                  <li key={item.title}>
                    <div className="img_wrapper">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="list_detail">
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="image_container">
          <img src={twowomen} alt="two women talking together" />
          <div className="bg"></div>
        </div>
      </section>
    </>
  );
};

export default WhyChoosingUs;
